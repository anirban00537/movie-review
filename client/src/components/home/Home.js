import { useEffect } from "react";
import Home_card from "./Home_card";
import Right_sidebar from "./Right_sidebar";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getPosts } from "../../actions/review";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const reviews = useSelector((state) => state.review);

  return !reviews.length ? (
    <div className="home">
      <div className="progress_box">
        <CircularProgress className="progress" />
      </div>

      <Right_sidebar />
    </div>
  ) : (
    <div className="home">
      <div className="home_post">
        {reviews.map((review) => (
          <Home_card key={review._id} review={review} />
        ))}
      </div>
      <Right_sidebar />
    </div>
  );
};

export default Home;
