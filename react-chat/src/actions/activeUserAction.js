import { LOGIN, LOGOUT } from "../constants/reducer";

const login = () => ({
  type: LOGIN,
  payload: { isLoggedIn: true },
});

const logout = () => ({
  type: LOGOUT,
  payload: { isLoggedIn: false },
});

export const loginUserAction = () => {
  return (dispatch, getState) => {
    dispatch(login());
  };
};

export const logoutUserAction = () => {
  return (dispatch, getState) => {
    dispatch(logout());
  };
};
