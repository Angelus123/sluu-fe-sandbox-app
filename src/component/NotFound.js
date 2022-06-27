import React from "react";
import { BiBlock } from "react-icons/bi";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="h-screen flex  justify-center items-center">
      <div>
        <BiBlock className="w-full block text-5xl" />
        <h1 className="text-xl mb-5">Page Not Found!</h1>
        <p className="text-center">
          <Link to="/team/chat" className="text-red bg-gray-100 border-2 border-red rounded-full p-2 mt-5 text-center">
           PLEASE GO TO CHAT
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
