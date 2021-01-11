import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Create from "./components/Create/Create";
import Profile from "./components/Profile/Profile";
import { getPosts } from "./actions/review";
import { useDispatch, useSelector } from "react-redux";
import { reviewCount } from "./actions/total";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const numberOfReview = useSelector((state) => state.review);
  dispatch(reviewCount(numberOfReview.length));
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
