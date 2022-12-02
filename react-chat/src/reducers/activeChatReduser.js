import { SET_ACTIVE_CHAT } from "../constants/ActionTypes";

const initialState = {
  id: 0,
  title: "",
  description: "",
  author_id: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT:
      return action.payload;
    default:
      return state;
  }
};
