import { createReview, fetchReviews } from "../api";

import {
  CREATE_POST,
  FETCH__POST,
  UPDATE_POST,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchReviews();

    dispatch({
      type: FETCH__POST,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createReviewnow = (review) => async (dispatch) => {
  try {
    const { data } = await createReview(review);
    console.log(data);
    dispatch({
      type: CREATE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
