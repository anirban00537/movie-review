import { TOTAL_REVIEW_FETCG } from "../constants/actionTypes";

const initialState = {
  total: 0,
};

export default (state = initialState.total, action) => {
  switch (action.type) {
    case TOTAL_REVIEW_FETCG:
      return action.payload;
    default:
      return state;
  }
};
