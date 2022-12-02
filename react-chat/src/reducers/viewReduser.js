import { SET_MOBILE_VIEW, SET_DESKTOP_VIEW } from "../constants/ActionTypes";

const initialState = {
  isMobile: false,
  isDesktop: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_VIEW:
      return action.payload;
    case SET_DESKTOP_VIEW:
      return action.payload;
    default:
      return state;
  }
};
