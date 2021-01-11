import {
  CREATE_POST,
  UPDATE_POST,
  FETCH__POST,
  DELETE_POST,
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
    case DELETE_POST:
      return state.filter((review) => review._id !== action.payload);
    default:
      return state;
  }
};
