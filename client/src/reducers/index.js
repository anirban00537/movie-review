import { combineReducers } from "redux";

import review from "./review";
import total from "./total";
import user from "./user";
export default combineReducers({
  review,
  total,
  user,
});
