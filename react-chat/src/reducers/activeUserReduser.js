import { LOGIN, LOGOUT } from "../constants/ActionTypes";

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
