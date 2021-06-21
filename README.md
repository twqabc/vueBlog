# vue-mongodb-blog

[预览](http://weiqi.icu/)

## 主要技术
1. Node.js 
2. MongoDB 
3. Vue3
4. Element-plus
5. Axios
6. Express
6. Nginx

## 实现的功能
1. 文章的增删改
2. 支持使用 `Markdown` 编辑与实时预览
5. 支持用户增删改


## 关键目录

```
| app.js              后端入口
| index.html          入口页面
| models             操作mongode封装
| routes              后端api
| .gitignore          git配置
| package.json
| vue.config.js       跨域配置
|
|-dist                vue打包生成的文件
|
|-node_modules        模块
|
|
|
|-src               前端
    |-assets        静态资源
    |-components    组件
    | App.vue
    | main.js
```

## How to start
``` bash
# clone projext
git clone https://github.com/twqabc/vueBlog.git

# 安装依赖
cd vueBlog
npm install

# 启动数据库
mongod

# 启动服务器
node app &

# 启动前端开发者模式
npm run serve
```
