import axios from "axios";

const url = "http://localhost:5000/reviews";

//function to fetch post will be used in actions
export const fetchReviews = () => {
  return axios.get(url);
};

export const createReview = (newReview) => {
  return axios.post(url, newReview);
};

export const deleteReview = (id) => {
  return axios.delete(`${url}/${id}`);
};
