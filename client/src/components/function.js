import { useDispatch, useSelector } from "react-redux";

import { loggingin } from "../actions/user";
export const FetchUserWithoutLogin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  if (user) {
    const { name, email } = user;
    dispatch(loggingin(email, token, name));
  } else {
  }
};
