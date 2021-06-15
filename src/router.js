import { createRouter, createWebHistory } from 'vue-router'
import ArticleDetail from './components/ArticleDetail.vue'
import About from './components/About.vue'
import Home from './Home.vue'
import ArticleEdit from './components/admin/ArticleEdit.vue'
import AboutEdit from './components/admin/AboutEdit.vue'
import ArticleListroot from './components/admin/ArticleListroot.vue'

const routes = [
  {
    path: '/articleDetail',
    name: 'articleDetail',
    component: ArticleDetail
  },
  {
    path: '/project',
    name:'project',
    component: () => import('./components/Project.vue')
  },
  {
    path: '/',
    name:'home',
    components: {default: Home, about: About},
  },
  {
    path: '/articleList',
    name: 'articleList',
    component: () => import('./components/ArticleList.vue')
  },
   {
        path: '/signin',
        name: 'signin',
        component: () => import('./components/Signin.vue')
    },
    {
      path: '/about',
      name:'about',
      component: About
    },
    {
      path: '/articleDetail/:id',
      name: 'articleDetail_id',
      component:ArticleDetail
    },
    {
      path: '/admin/articleEdit/:id',
      name: 'articleEdit_id',
      component: () => import('./components/admin/ArticleEdit.vue')
    },
    {
    path: '/admin/articleEdit',
    name: 'articleEdit',
    component: ArticleEdit
    },
    {
      path: '/admin/aboutEdit',
      name: 'aboutEdit',
      component: AboutEdit
    },
    {
      path: '/admin/articleListroot',
      name: 'articleListroot',
      component:ArticleListroot
    }
    
 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router