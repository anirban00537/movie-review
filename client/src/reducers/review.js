import {
  CREATE_POST,
  UPDATE_POST,
  FETCH__POST,
} from "../constants/actionTypes";

const intialState = {
  reviews: [],
};

export default (state = intialState.reviews, action) => {
  switch (action.type) {
    case FETCH__POST:
      return action.payload;
    case CREATE_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};
