import { createReview, fetchReviews, deleteReview } from "../api";

import {
  CREATE_POST,
  FETCH__POST,
  UPDATE_POST,
  DELETE_POST,
  TOTAL_REVIEW_FETCG,
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

export const deletePost = (id) => async (dispatch) => {
  try {
    await deleteReview(id);
    dispatch({ type: DELETE_POST, payload: id });
    console.log("deleted");
  } catch (error) {
    console.log(error.message);
  }
};

