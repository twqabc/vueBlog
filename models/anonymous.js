const anonymousCollection = require("../config/mongoDbConnection").getCollection(
  "anonymousCollection"
);

//添加文章
exports.save = async (say) => {
  try {
    const col = await anonymousCollection();
    const result = await col.insertOne(say);
    // return result.ops && result.ops[0];
    return result
  } catch (error) {
    throw "添加文章到数据库出错";
  }
};
//查询所有
exports.findAll = async () => {
  try {
    const col = await anonymousCollection();
    return col.find({}).toArray();
  } catch (error) {
    throw "查询所有文章出错";
  }
};