import { createStore } from 'vuex'

import ArticleDetail from '../components/ArticleDetail.vue'
import About from '../components/About.vue'
import Home from '../Home.vue'
import AboutEdit from '../components/admin/AboutEdit.vue'
export default createStore({
    //状态管理入口
    state: {
        routes:[ {
            path: '/',
            name:'home',
            components: {default: Home, about: About},
          },
              {
                path: '/signin',
                name: 'signin',
                component: () => import('../components/Signin.vue')
            },
            {
              path: '/admin/articleEdit/:id',
              name: 'articleEdit_id',
              component: () => import('../components/admin/ArticleEdit.vue')
            },
            {
              path: '/articleList',
              name: 'articleList',
              component: () => import('../components/ArticleList.vue')
            },
            {
              path: '/articleDetail',
              name: 'articleDetail',
              component: ArticleDetail
            },
            {
              path: '/admin/aboutEdit',
              name: 'aboutEdit',
              component: AboutEdit
            },
            {
              path: '/project',
              name:'project',
              component: () => import('../components/Project.vue')
            },
            {
              path: '/articleDetail/:id',
              name: 'articleDetail_id',
              component:ArticleDetail
            }
            
         ],
        github:"https://github.com/twqabc",
        twitter:"https://twitter.com/twqabc",
        wechat:"http://localhost:8080/src/assets/images/wechat-twqabc.png",
        linkedin:"https://www.linkedin.com/in/%E4%BC%9F%E5%A5%87-%E7%94%B0-160477201/",
        about: `## Hey, I am Tian Weiqi, a fanatical full-time open sourceror.`
    },
    mutations: {
    }
})