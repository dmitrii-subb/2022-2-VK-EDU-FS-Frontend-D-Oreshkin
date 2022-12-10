import {
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILURE,
  ADD_NEW_MESSAGE,
} from "../constants/reducer";

const initialState = {
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return { messages: [action.payload, ...state.messages] };
    case GET_MESSAGES_SUCCESS:
      return { messages: [...action.payload] };
    case GET_MESSAGES_FAILURE:
      return {};
    default:
      return state;
  }
};
