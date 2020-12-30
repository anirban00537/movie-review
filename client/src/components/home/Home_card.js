import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./home.css";
import moment from "moment";

const Home_card = ({ review }) => {
  console.log(review.stars);
  return (
    <div className="post_card">
      <div className="card">
        <div className="username_info">
          <img
            className="dp_user"
            src="https://cdn.pixabay.com/photo/2016/11/14/04/57/young-1822656_960_720.jpg"
          />
          <p className="username">{review.username}</p>
        </div>

        <img className="card_image" src={review.selectedFile} />
        <div className="card_user_details">
          <p className="time">{moment(review.createdAt).fromNow()}</p>
          <Box
            className="rating_box"
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Rating name="read-only" value={review.stars} readOnly />
          </Box>
          <p className="info_footer_card">{review.title}</p>
          <p className="info_footer_card_descriptions">{review.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Home_card;
