import { createStore } from 'vuex'


export default createStore({
    //状态管理入口
    state: {
        
        github:"https://github.com/twqabc",
        twitter:"https://twitter.com/twqabc",
        wechat:"http://localhost:8080/src/assets/images/wechat-twqabc.png",
        linkedin:"https://www.linkedin.com/in/%E4%BC%9F%E5%A5%87-%E7%94%B0-160477201/",
        about: `# NodeJS程序员简历模板
        本简历模板由国内首家互联网人才拍卖网站「 [JobDeer.com](http://www.jobdeer.com) 」提供。

（括号里的是我们的顾问编写的说明，建议在简历书写完成后统一删除）

## 先讲讲怎样才是一份好的技术简历

首先，一份好的简历不光说明事实，更通过FAB模式来增强其说服力。

 - Feature：是什么
 - Advantage：比别人好在哪些地方
 - Benefit：如果雇佣你，招聘方会得到什么好处 
 # 联系方式
（HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）

- 手机：135******** 
- Email：goodman@gmail.com 
- QQ/微信号：6*******

---

# 个人信息

 - 胶布帝/男/1990 
 - 本科/萌鹿大学计算机系 
 - 工作年限：3年
 - 微博：[@JobDeer](http://weibo.com/jobdeer)
 - 技术博客：http://blog.github.io 
 - Github：http://github.com/geekcompany

 - 期望职位：NodeJS高级程序员，应用架构师
 - 期望薪资：税前月薪15k~20k，特别喜欢的公司可例外
 - 期望城市：北京

---

# 工作经历
（工作经历按逆序排列，最新的在最前边，按公司做一级分组，公司内按二级分组）

## ABC公司 （ 2012年9月 ~ 2014年9月 ）
        `
        
    },
    mutations: {
    }
})