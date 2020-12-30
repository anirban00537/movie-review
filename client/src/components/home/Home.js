import React from "react";
import Home_card from "./Home_card";
import Right_sidebar from "./Right_sidebar";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const Home = () => {
  const reviews = useSelector((state) => state.review);
  console.log(reviews);

  return !reviews.length ? (
    <div className="home">
      <CircularProgress />
      <Right_sidebar />
    </div>
  ) : (
    <div className="home">
      <div className="home_post">
        {reviews.map((review) => (
          <Home_card key={review._id} review={review} />
        ))}
      </div>
      <Right_sidebar />
    </div>
  );
};

export default Home;
