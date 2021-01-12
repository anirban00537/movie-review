import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../keys.js";
import mongoose from "mongoose";
import User from "../models/user.js";

export default (req, res, next) => {
  // in this part user will send a request with token
  const { authorization } = req.headers;

  //if authorization dont exist then this part will return with an error message
  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in" });
  }

  //authorization == "Bearer ajsndkansdkjsandkj"
  //this will replace or remove the Bearer with empty string and will left the token only
  const token = authorization.replace("Bearer ", "");

  //this jwt.verify will verify that the token that user sends that is legal or not
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    //if there is an error thrown by the jwt.verify function then it will return an error
    if (err) {
      return res.status(401).json({ error: "you must be logged in" });
    }
    //@else
    //extracting user id from payload that hasbeen sent from the signin route
    const { _id } = payload;
    //finding the user with that id
    User.findById(_id).then((userdata) => {
      //then we can access user info inside of req.user
      req.user = userdata;
      next();
    });
  });
};
