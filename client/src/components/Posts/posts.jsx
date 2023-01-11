import React from "react";
import Post from "./Post/post.jsx";
import useStyles from "./styles.jsx";

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />;
      <Post />;
    </>
  );
};

export default Posts;