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
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { FetchUserWithoutLogin } from "./components/function";

function Routers() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      console.log("there is a user ");
    } else {
      console.log("there is no user ");
      history.push("/login");
    }
  }, []);

  return (
    <>
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

const App = () => {
  FetchUserWithoutLogin();
  return (
    <div className="App">
      <Router>
        <Header />
        <Routers />
      </Router>
    </div>
  );
};

export default App;
