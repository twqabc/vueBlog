const post = require("./post");
const user = require("./user");
const anonymous = require("./anonymous")
module.exports = (app) => {
  app.use("/post", post);
  app.use("/user",user);
  app.use("/anonymous",anonymous)
};
