import { LOGIN, LOGOUT } from "../constants/ActionTypes";

const login = () => ({
  type: LOGIN,
  payload: { isLoggedIn: true },
});

const logout = () => ({
  type: LOGOUT,
  payload: { isLoggedIn: false },
});

export const loginUser = () => {
  return (dispatch, getState) => {
    dispatch(login());
  };
};

export const logoutUser = () => {
  return (dispatch, getState) => {
    dispatch(logout());
  };
};
