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
import { getPosts } from "./actions/review";
import { useDispatch, useSelector } from "react-redux";
import { reviewCount } from "./actions/total";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function Routers() {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      console.log("there is a user ");
    } else {
      console.log("there is no user ");
      history.push("/login");
    }
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

function App() {
  const dispatch = useDispatch();
  const numberOfReview = useSelector((state) => state.review);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getPosts());
    dispatch(reviewCount(numberOfReview.length));
  }, []);

  return (
    <div className="App">
      <Router>
        {user ? <Header /> : null}

        <Routers />
      </Router>
    </div>
  );
}

export default App;
