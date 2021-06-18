const post = require("./post");
const user = require("./user");
const login = require("./login")
module.exports = (app) => {
  app.use("/post", post);
  app.use("/user",user);
  app.use("/login", login)
};
