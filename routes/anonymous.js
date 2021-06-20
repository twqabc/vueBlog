const express = require("express");
var route = express.Router();

const anonymousModel = require("../models/anonymous");

//添加文章
route.post("/", async (req, res) => {
  try {
    const newPost = await anonymousModel.save(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});
//查询所有
route.get("/", async (req, res) => {
  try {
    const posts = await anonymousModel.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(404).send();
  }
});

module.exports = route;