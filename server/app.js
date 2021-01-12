import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import reviewRoute from "./routes/review.js";
import auth from "./routes/auth.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/reviews", reviewRoute);
app.use("/", auth);

const CONNECTION_URL =
  "mongodb+srv://anirban00537:anirban00537@cluster0.rsvp4.mongodb.net/movie-imdb";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log("Server running successfully on localhost:" + PORT);
});

mongoose.set("useFindAndModify", false);
