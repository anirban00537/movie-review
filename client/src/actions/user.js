import { LOGGED_IN } from "../constants/actionTypes";

export const loggingin = (email, token, name) => async (dispatch) => {
  const data = { email, token, name };
  try {
    dispatch({ type: LOGGED_IN, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
