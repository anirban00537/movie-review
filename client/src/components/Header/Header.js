import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="icon">
        <LocalMoviesIcon />
        <h4 className="title">IMDB</h4>
      </div>
      <div className="header__list">
        <Link to="/" className="header__item">
          <HomeIcon />
          <p>Home</p>
        </Link>
        <Link to="/create" className="header__item">
          <AddIcon />
          <p>Create</p>
        </Link>
        <Link to="/profile" className="header__item">
          <PersonIcon />
          <p>Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
