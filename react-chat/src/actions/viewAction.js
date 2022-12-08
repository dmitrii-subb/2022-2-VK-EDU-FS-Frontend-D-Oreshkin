import { SET_MOBILE_VIEW, SET_DESKTOP_VIEW } from "../constants/reducer";

const setMobileView = () => ({
  type: SET_MOBILE_VIEW,
  payload: {
    isMobile: true,
    isDesktop: false,
  },
});

const setDesktopView = () => ({
  type: SET_DESKTOP_VIEW,
  payload: {
    isMobile: false,
    isDesktop: true,
  },
});

export const setViewAction = (screenSize) => {
  return (dispatch, getState) => {
    if (screenSize.dynamicWidth <= 1100) {
      dispatch(setMobileView());
    } else {
      dispatch(setDesktopView());
    }
  };
};
