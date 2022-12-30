import { combineReducers } from "redux";
import viewReducer from "./viewReducer";
import messageReducer from "./messageReducer";
import activeChatReducer from "./activeChatReducer";
import activeUserReducer from "./activeUserReducer";

export default combineReducers({
  viewReducer,
  messageReducer,
  activeChatReducer,
  activeUserReducer,
});
