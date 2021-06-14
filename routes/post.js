const express = require("express");
var route = express.Router();

const postModel = require("../models/post");

//添加文章
route.post("/", async (req, res) => {
  try {
    const newPost = await postModel.save(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});
//查询所有文章
route.get("/", async (req, res) => {
  try {
    const posts = await postModel.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(404).send();
  }
});
//查询单篇文章
route.get("/:id", async (req, res) => {
  try {
    const post = await postModel.findOne(req.params.id)
    res.json(post)
  } catch (error) {
    console.error(error)
  }
})
//更新文章
route.put("/:id", async (req, res) => {
  try {
    const updatedPost = await postModel.update(req.params.id, req.body);
    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});
//删除文章
route.delete("/:id", async (req, res) => {
  try {
    await postModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});
//删除评论
route.delete("/:id/comment", async (req, res) => {
  try {
    await postModel.deleteCommentByUser(req.params.id, req.body.user);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

module.exports = route;
