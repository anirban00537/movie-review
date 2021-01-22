import axios from "axios";

const url = "http://localhost:5000/reviews";

//function to fetch post will be used in actions
export const fetchReviews = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem("jwt")}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axios.get(url);
};

export const createReview = (newReview) => {
  console.log("donenenene");
  return axios.post(url, newReview);
};

export const deleteReview = (id) => {
  return axios.delete(`${url}/${id}`);
};
