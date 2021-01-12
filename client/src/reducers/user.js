import { LOGGED_IN } from "../constants/actionTypes";

const intialState = { userInfo: {} };

export default (state = intialState.userInfo, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};
