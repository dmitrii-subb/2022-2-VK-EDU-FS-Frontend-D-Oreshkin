import { combineReducers } from "redux";
import viewReduser from "./viewReduser";
import messageReduser from "./messageReduser";
import activeChatReduser from "./activeChatReduser";

export default combineReducers({
  viewReduser,
  messageReduser,
  activeChatReduser,
});
