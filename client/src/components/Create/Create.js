import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import "./create.css";
import { createReviewnow } from "../../actions/review";

const Create = () => {
  const [postData, setPostData] = React.useState({
    title: "",
    description: "",
    username: "",
    stars: 0,
    selectedFile: "",
  });

  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(createReviewnow(postData));
  };
  return (
    <div className="main_card">
      <form
        className="main_form"
        noValidate
        autoComplete="off"
        onSubmit={handelSubmit}
      >
        <h3 className="heading">Review a movie</h3>
        <input
          value={postData.username}
          onChange={(e) =>
            setPostData({ ...postData, username: e.target.value })
          }
          className="form_d"
          placeholder={"Username"}
        />
        <input
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          className="form_d"
          placeholder={"Movie name"}
        />
        <FileBase
          type="file"
          multipla={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />

        <textarea
          value={postData.description}
          placeholder={"Description"}
          className="form_des"
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        ></textarea>

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={postData.value}
            size="large"
            className="star"
            onChange={(event, newValue) => {
              setPostData({ ...postData, stars: newValue });
            }}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Done
        </Button>
      </form>
    </div>
  );
};

export default Create;
