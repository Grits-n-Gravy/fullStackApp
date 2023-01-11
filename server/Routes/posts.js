import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const Router = express.Router();

Router.get("/", getPosts);
Router.post("/", createPost);
export default Router;
