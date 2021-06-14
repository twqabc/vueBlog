const express = require("express");
var route = express.Router();

const userModel = require("../models/user");

//添加文章
route.post("/", async (req, res) => {
    try {
      const newPost = await userModel.save(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  });

  module.exports = route;