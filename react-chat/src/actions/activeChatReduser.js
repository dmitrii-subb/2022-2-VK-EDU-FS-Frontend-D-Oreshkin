import { SET_ACTIVE_CHAT } from "../constants/ActionTypes";

const setActiveChat = (chat) => ({
  type: SET_ACTIVE_CHAT,
  payload: chat,
});

export const openChat = (chat) => {
  return (dispatch, getState) => {
    dispatch(setActiveChat(chat));
  };
};
