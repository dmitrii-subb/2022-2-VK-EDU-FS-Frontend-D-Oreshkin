import { combineReducers } from "redux";
import viewReducer from "./viewReducer";
import messageReducer from "./messageReducer";
import activeChatReducer from "./activeChatReducer";

export default combineReducers({
  viewReducer,
  messageReducer,
  activeChatReducer,
});
