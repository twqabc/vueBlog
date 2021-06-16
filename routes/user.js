const express = require("express");
var route = express.Router();

const userModel = require("../models/user");

//添加用户
route.post("/", async (req, res) => {
    try {
      const newPost = await userModel.save(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  });
  //查询所有用户
  route.get("/", async (req, res) => {
    try {
      const posts = await userModel.findAll();
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(404).send();
    }
  });
//查询某个用户
route.get("/:n", async (req, res) => {
  try {
    const post = await userModel.findOneUser(req.params.n)
    res.json(post)
  } catch (error) {
    console.error(error)
  }
})
//查询密码正误
route.get("/:n/:p", async (req, res) => {
  try {
    const post = await userModel.findOneUserPassword(req.params.n,req.params.p)
    res.json(post)
  } catch (error) {
    console.error(error)
  }
})

module.exports = route;