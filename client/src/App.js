import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./components/home/Home";
import Create from "./components/Create/Create";
import Profile from "./components/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function Routers() {
  const history = useHistory();
  let signHeader;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("there is a user ");
      signHeader = true;
    } else {
      console.log("there is no user ");
      history.push("/login");
      signHeader = false;
      console.log(signHeader);
    }
  }, []);

  return (
    <>
      {signHeader == true ? <Header /> : ""}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

function App() {
  // const userLocal = JSON.parse(localStorage.getItem("user"));
  const user = useSelector((state) => state.user);

  console.log(user, "user from app.js");
  return (
    <div className="App">
      <Router>
        {user.token ? <Header /> : null}

        <Routers />
      </Router>
    </div>
  );
}

export default App;
