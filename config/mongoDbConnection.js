const MongoClient = require("mongodb").MongoClient;//连接MongoClient实例

const url = "mongodb://localhost:27017";
const dbName = "myblog";
let _db = null;

async function connectDb() {
  if (!_db) {
    const client = new MongoClient(url, { useUnifiedTopology: true });//Server Discover and Monitoring engine(服务发现和监控引擎）要过时了避免警告
    try {
      await client.connect();
      _db = await client.db(dbName);
    } catch (error) {
      throw "连接到数据库出错";
    }
  }
  return _db;
}

exports.getCollection = (collection) => {//导出一个选择集合方法
  let _col = null;
  return async () => {
    if (!_col) {
      try {
        const db = await connectDb();
        _col = await db.collection(collection);
      } catch (error) {
        throw "选择 collection 出错";
      }
    }
    return _col;
  };
};
