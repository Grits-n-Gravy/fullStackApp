import React from "react";
import Post from "./Post/post.jsx";
import useStyles from "./styles.jsx";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.Posts);
  const classes = useStyles();
  console.log(posts);
  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <div
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </div>
  );
};

export default Posts;
