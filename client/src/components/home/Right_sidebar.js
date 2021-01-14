import React, { useEffect } from "react";
import "./right_sidebar.css";
import StarIcon from "@material-ui/icons/Star";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/review";

const Right_sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const reviews = useSelector((state) => state.review);
  return (
    <div className="sidebar">
      <div className="size">
        <div className="descriptions_section">
          <h3 className="headline margine10">
            Total Reviews
            <StarIcon fontSize="large" />
          </h3>
          <h1 className="headline margine10">{reviews.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default Right_sidebar;
