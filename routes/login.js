const express = require("express");
var route = express.Router();
var url = require("url")

const vipLogin = require("../mock/data/vip_login.json")
const adminLogin = require("../mock/data/admin_login.json")

route.get("/", (req, res) => {
  const user = url.parse(req.url, true).query.user;
  if (user === 'admin') {
      res.send(adminLogin)
  } else {
      res.send(vipLogin)
  }
})

module.exports = route