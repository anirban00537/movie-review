import React from "react";
import "./right_sidebar.css";
const Right_sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="headline">Recent Released</h3>
      <div className="size">
        <div className="image_Section">
          <img
            src="https://cdn.pixabay.com/photo/2020/03/01/12/36/fire-4892711_960_720.jpg"
            className="top_image"
          />
        </div>

        <div className="descriptions_section">
          <h4>Solay</h4>
          <p className="paragraph">
            ₹350 million (India) 60 million tickets (USSR) Sholay (Hindustani:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Right_sidebar;
