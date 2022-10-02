import axios from "axios";

import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
} from "./actionType";

const baseUrl = "https://reqres.in/api/users";

export const fetchUserStart = () => ({
  type: FETCH_USER_START,
});

export const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserFail = () => ({
  type: FETCH_USER_FAIL,
});

export function fetchUsers(page) {
  return function (dispatch) {
    dispatch(fetchUserStart());

    axios
      .get(baseUrl + `?page=${page}+&per_page=6`)
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFail(error.message));
      });
  };
}
