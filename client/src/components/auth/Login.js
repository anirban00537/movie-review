import React, { useState } from "react";
import "../Create/create.css";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { loggingin } from "../../actions/user";
import M from "materialize-css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const url = "http://localhost:5000/signin";
  const dispatch = useDispatch();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const tdata = await axios.post(url, { email: email, password: password });
    const { token, user } = tdata.data;
    dispatch(loggingin(token, user.email, user.name));
    localStorage.setItem("jwt", token);
    localStorage.setItem("user", JSON.stringify(user));
    M.toast({
      html: "signedin successfully",
      classes: "#43a047 green darken-1",
    });
    history.push("/");
  };

  return (
    <div className="main_card">
      <form
        className="main_form"
        noValidate
        autoComplete="off"
        onSubmit={handelSubmit}
      >
        <h3 className="heading">Login</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form_d"
          placeholder={"Email"}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form_d"
          placeholder={"Passwords"}
        />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
