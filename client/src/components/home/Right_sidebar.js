import React from "react";
import "./right_sidebar.css";
import StarIcon from "@material-ui/icons/Star";

import { useSelector } from "react-redux";
const Right_sidebar = () => {
  const postNumber = useSelector((state) => state.total);
  return (
    <div className="sidebar">
      <div className="size">
        <div className="descriptions_section">
          <h3 className="headline margine10">
            Total Reviews
            <StarIcon fontSize="large" />
          </h3>
          <h1 className="headline margine10">{postNumber}</h1>
        </div>
      </div>
    </div>
  );
};

export default Right_sidebar;
