import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);
  console.log(newPost);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  const getPost = await postMessage.findById(id);
  if (!getPost) return res.status(404).send("no post with that id");
  const updatedPost = await postMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const getPost = await postMessage.findById(id);
  if (!getPost) return res.status(404).send(`no post wit id: ${id}`);
  await postMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted sucessfully" });
};
export const likePost = async (req, res) => {
  const { id } = req.params;
  const getPost = await postMessage.findById(id);
  if (!getPost) return res.status(404).send(`no post wit id: ${id}`);
  const updatedPost = await postMessage.findByIdAndUpdate(
    id,
    { likeCount: getPost.likeCount + 1 },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};
