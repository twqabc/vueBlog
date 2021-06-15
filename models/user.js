const postCollection = require("../config/mongoDbConnection").getCollection(
    "userCollection"
  );

  //添加用户
exports.save = async (user) => {
    try {
      const col = await postCollection();
      const result = await col.insertOne(user);
      // return result.ops && result.ops[0];
      return result
    } catch (error) {
      throw "添加文章到数据库出错";
    }
  };

  