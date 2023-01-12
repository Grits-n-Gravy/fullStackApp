import React from "react";
import Post from "./Post/post.jsx";
import useStyles from "./styles.jsx";
import { useSelector } from "react-redux";
const Posts = () => {
  const posts = useSelector((state) => state.Posts);
  const classes = useStyles();
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />;
      <Post />;
    </>
  );
};

export default Posts;
