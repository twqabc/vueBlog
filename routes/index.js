const post = require("./post");
const user = require("./user");
module.exports = (app) => {
  app.use("/post", post);
  app.use("/user",user);
};
