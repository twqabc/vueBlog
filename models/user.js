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
//查询所有用户
exports.findAll = async () => {
  try {
    const col = await postCollection();
    return col.find({}).toArray();
  } catch (error) {
    throw "查询所有文章出错";
  }
};
//查寻某用户
exports.findOneUser = async (n) => {
  try {
    const col = await postCollection()
    return col.find({name: n}).toArray()// find 方法返回的是一个 cursor 游标
  } catch (error) {
    throw "查询单篇文章出错"
  }
}
//查询密码正误
exports.findOneUserPassword = async (n,p) => {
  try {
    const col = await postCollection()
    return col.find({name: n , password: p }).toArray()// find 方法返回的是一个 cursor 游标
  } catch (error) {
    throw "查询单篇文章出错"
  }
}