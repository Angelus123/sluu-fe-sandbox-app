import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { ImCross } from "react-icons/im";
import S3FileUpload from "react-s3";
import toast, { Toaster } from "react-hot-toast";
import s3 from "../../aws-s3";
import Loader2 from "../Loader2";
import Loader from "../Loader";
import {
  AuthService,
  userAuthstate,
} from "../../Service/authenticationService";
function Profile(props) {
  const name = useRef("");
  const bio = useRef("");
  const fileRef = useRef(null);
  const [imgLocation, setImgLocation] = useState("");
  const { currentUser } = useAuth();
  const [loader, setLoader] = useState(false);
  const [imgUploaded, setImgUpload] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    avatar: "",
    bio: "",
  });
  const [error, setError] = useState({
    avatar: "",
    name: "",
    bio: "",
  });

  const authState = userAuthstate();
  let update = {
    avatar: "",
    name: "",
    bio: "",
  };

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgUpload(true);
    } else {
      setImgUpload(false);
    }
  };

  useEffect(() => {
    if (currentUser.uid !== null) {
      //   authState.merge({ loading: true });
      AuthService.FetchAuthUser(currentUser.uid);
    }
  }, [authState.updateNeed.value]);

  const user = authState.authUser.value;

  useEffect(() => {
    if (user !== null) {
      setUserData({
        name: user.name !== undefined ? user.name : "",
        bio: user.bio !== undefined ? user.bio : "",
        avatar: user.avatar !== undefined ? user.avatar : "",
      });
    }
  }, [authState.loading.value]);

  async function handleSubmit() {
    const userdata = userData;
    const avatarInput = user ? user.avatar : fileRef.current.files[0];
    if (!avatarInput) {
      return setError({ ...error, avatar: "avatar is required" });
    }

    try {
      setError({ avatar: "", name: "", bio: "" });
      setLoader(true);
      // call function to upload image to s3 bucket
      let url =
        "";
      if (imgUploaded) {
        await S3FileUpload.uploadFile(fileRef.current.files[0], s3).then(
          (data) => {
            // console.log(data.location);
            setImgLocation(data.location.toString());
            update = {
              bio: bio.current.value,
              name: name.current.value,
              avatar: data.location,
            };
          }
        );
      } else {
        update = {
          bio: bio.current.value,
          name: name.current.value,
          avatar: "",
        };
      }
      userdata.name = update.name !== "" ? update.name : userdata.name;
      userdata.bio = update.bio !== "" ? update.bio : userdata.bio;
      userdata.avatar = update.avatar !== "" ? update.avatar : userdata.avatar;

      if (userdata.name === "")
        return setError({ ...error, name: "name is required" });
      if (userdata.bio === "")
        return setError({ ...error, bio: "bio is required" });
      await AuthService.UpdateAuthUser(currentUser.uid, userdata);
      toast.success("Updated Successful");
      setLoader(false);
    } catch (error) {
      setError("Failed to Update Profile");
      console.log("FAILED: " + error);
    }
  }
  return (
    <div className="bg-white m-4 rounded-lg w-full p-6">
      <h2 className="font-semibold py-2 text-2xl">My Profile</h2>
      <Toaster />
      <>
        {authState.loading.value ? (
          <Loader2 />
        ) : (
          <div>
            <>
              <div className="mb-3">
                <label className="text-darkBlack font-bold capitalize">
                  Profile Picture
                </label>
                <br></br>
                {userData.avatar === "" && (
                  <input
                    id="imageInput"
                    type="file"
                    ref={fileRef}
                    className="focus:outline-none w-full bg-lightGray p-2 mt-2 rounded"
                    onChange={handleChange}
                  />
                )}
                {userData.avatar !== "" && (
                  <div className="w-32 relative mt-4">
                    <img
                      src={userData.avatar}
                      alt=""
                      className="object-cover "
                    />
                    <div
                      className="absolute -top-2 -right-2 cursor-pointer"
                      onClick={() => setUserData({ ...userData, avatar: "" })}
                    >
                      <ImCross className="text-red" />
                    </div>
                  </div>
                )}
                {error && error.avatar && (
                  <span className="text-sm text-Red">{error.avatar}</span>
                )}
              </div>
            </>

            <div className="mb-3">
              <label className="text-darkBlack font-bold capitalize">
                Name
              </label>
              <input
                className="focus:outline-none w-full bg-lightGray p-2 mt-2 rounded"
                type="text"
                name="name"
                value={userData.name}
                onChange={onChange}
                ref={name}
              />
              {error && error.name && (
                <span className="text-sm text-Red">{error.name}</span>
              )}
            </div>
            <div className="mb-3">
              <label className="text-darkBlack font-bold capitalize">Bio</label>
              <textarea
                className="focus:outline-none w-full bg-lightGray p-2 mt-2 rounded"
                rows="10"
                cols="50"
                value={userData.bio}
                name="bio"
                onChange={onChange}
                ref={bio}
              />
              {error && error.bio && (
                <span className="text-sm text-Red">{error.bio}</span>
              )}
            </div>
            <button
              className=" mt-2 mx-auto bg-Red rounded text-white py-2 px-14 block"
              type="button"
              disabled={loader}
              onClick={() => handleSubmit()}
            >
              {loader && <Loader />}
              Update Profile
            </button>
          </div>
        )}
      </>
    </div>
  );
}

export default Profile;
