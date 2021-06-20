import { createStore } from 'vuex'


export default createStore({
    //状态管理入口
    state: {
        github:"https://github.com/twqabc",
        word:"https://twqabc.github.io/",
        twitter:"https://twitter.com/twqabc",
        wechat:"http://localhost:8080/src/assets/images/wechat-twqabc.png",
        linkedin:"https://www.linkedin.com/in/%E4%BC%9F%E5%A5%87-%E7%94%B0-160477201/",
        about: `
 # 联系方式

- 手机：18061887413
- Email：twqabc@gmail.com
- QQ/微信号：xltipa

# 个人信息

- 田伟奇/男/2001
- 大专/南京财经高等职业技术学校计算机网络专业
- Github：<a> http://github.com/twqabc </a>
- Segmentfault: <a> https://segmentfault.com/u/twqabc </a>
- 期望职位：软件测试实习生
- 期望薪资：税前月薪2k~，特别喜欢的公司可例外
- 期望城市：南京


# 开源项目
- [STU](https://github.com/twqabc/vueBlog)：个人博客网站
- [WXYZ](https://github.com/twqabc/gp-qxs)：栖霞山网站
# 技能清单
        以下均为我熟练使用的技能
- Web开发：Node
- Web框架：Django
- 前端框架：Bootstrap/Vue JS
- 前端工具：Sass
- 数据库相关：Mongodb/SQLite
- 版本管理、文档和自动化部署工具：Git
- 单元测试：SimpleTest
- 云和开放平台：微信应用开发 
# 致谢
        感谢您花时间阅读我的简历，期待能有机会和您共事。
        `  
    },
    mutations: {
        
        
    }
})