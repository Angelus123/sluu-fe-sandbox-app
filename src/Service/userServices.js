import { createState, useState } from "@hookstate/core";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import { store, useDispatch } from "../Store";

//State
const state = createState({
  user: [],
  retrieving: false,
  fetched: false,
  loading: true,
  updateNeed: true,
});

store.receptors.push((action) => {
  state.batch((s) => {
    switch (action.type) {
      case "USERS_LOADED":
        return s.merge({
          user: action.data,
          updateNeed: false,
          retrieving: true,
          fetched: true,
        });
      case "CREATE_USERS":
        return s.merge({
          user: action.data,
          loading: false,
          updateNeed: true,
        });
      case "USER_UPDATE":
        return s.merge({
          updateNeed: true,
          loading: false,
        });
      case "USER_INFO":
        return s.merge({
          user: action.data,
          loading: false,
          updateNeed: true,
        });
      case "USER_NAME_INFO":
        return s.merge({
          user: action.data,
          loading: false,
          updateNeed: true,
        });
      case "USER_DELETE":
        return s.merge({
          loading: false,
          updateNeed: true,
        });
      case "ALL_USER_INFO":
        return s.merge({
          user: action.data,
          loading: false,
          fetched: true,
          updateNeed: true,
        });
    }
  }, action.type);
});

export const accessUserState = () => state;

export const useUserState = () => useState(state);

//Service
export const UsersService = {
  FetchUsers: () => {
    const dispatch = useDispatch();
    axios
      .get(`${baseUrl}api/v1/users`)
      .then((res) => {
        dispatch(UsersAction.loadUsers(res.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  AddUser: async (data) => {
    const dispatch = useDispatch();
    await axios
      .post(`${baseUrl}api/v1/users/createUser`, data)
      .then((res) => {
        dispatch(UsersAction.createUsers(res));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  UpdateUser: (id, data) => {
    const dispatch = useDispatch();
    axios
      .put(`${baseUrl}api/v1/users/${id}`, data)
      .then((res) => {
        dispatch(UsersAction.updateUser(res));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FetchBasicInfo: (id) => {
    const dispatch = useDispatch();
    axios
      .get(`${baseUrl}api/users/basic_info/${id}`)
      .then((res) => {
        dispatch(UsersAction.fetchBasicInfo(res.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  CheckUserInfo: (name) => {
    const dispatch = useDispatch();
    axios
      .get(`${baseUrl}api/users/checkUsername/${name}`)
      .then((res) => {
        dispatch(UsersAction.checkusername(res.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  DeleteUser: (id) => {
    const dispatch = useDispatch();
    axios
      .delete(`${baseUrl}api/users/${id}`)
      .then((res) => {
        dispatch(UsersAction.deleteUser(res));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FetchUserInfo: (id) => {
    const dispatch = useDispatch();
    axios
      .get(`${baseUrl}api/users/${id}`)
      .then((res) => {
        dispatch(UsersAction.fetchUserInfo(res.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

//Action
export const UsersAction = {
  loadUsers: (data) => {
    return {
      type: "USERS_LOADED",
      data: data,
    };
  },
  createUsers: (data) => {
    return {
      type: "CREATE_USER",
      data: data,
    };
  },
  updateUser: (data) => {
    return {
      type: "USER_UPDATE",
      data: data,
    };
  },
  fetchBasicInfo: (data) => {
    return {
      type: "USER_INFO",
      data: data,
    };
  },
  checkusername: (data) => {
    return {
      type: "USER_NAME_INFO",
      data: data,
    };
  },
  deleteUser: (data) => {
    return {
      type: "USER_DELETE",
      data: data,
    };
  },
  fetchUserInfo: (data) => {
    return {
      type: "ALL_USER_INFO",
      data: data,
    };
  },
};
