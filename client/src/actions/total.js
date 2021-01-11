import { TOTAL_REVIEW_FETCG } from "../constants/actionTypes";

export const reviewCount = (number) => async (dispatch) => {
  try {
    await dispatch({ type: TOTAL_REVIEW_FETCG, payload: number });
  } catch (error) {
    console.log(error.message);
  }
};
