import { createRouter, createWebHistory } from 'vue-router'
import ArticleDetail from './components/ArticleDetail.vue'
import ArticleEdit from './components/admin/ArticleEdit.vue'
import ArticleListroot from './components/admin/ArticleListroot.vue'
import NotFound from "./components/NotFound.vue"
import ArticleUpdate from "./components/admin/ArticleUpdate.vue"
import ArticleSearch from "./components/ArticleSearch.vue"
import Wechat from "./components/Wechat.vue"
import NoAnth from "./components/NoAnth.vue"
import ArticleList from './components/ArticleList.vue'

export const routes = [
  {
    path: '/articleDetail',
    name: 'articleDetail',
    component: ArticleDetail
  },
  {
    path: '/wechat',
    name: 'wechat',
    component: Wechat
  },
  {
    path: '/articleSearch/:keyword',
    name: 'articleSearch_id',
    component: ArticleSearch
  },
  {
    path: '/articleSearch',
    name: 'articleSearch',
    component: ArticleSearch
  },
  {
    path: '/project',
    name:'project',
    component: () => import('./components/Anonymous.vue')
  },
  {
    path: '/',
    name:'home',
    components: { articleList: ArticleList},
  },
  {
    path: '/articleList',
    name: 'articleList',
    components: ArticleList
  },
   {
        path: '/signin',
        name: 'signin',
        component: () => import('./components/Signin.vue')
    },
    {
      path: '/articleDetail/:id',
      name: 'articleDetail_id',
      component:ArticleDetail
    },
    {
      path: '/admin/articleUpdate/:id',
      name: 'Update_id',
      meta: {
        auth: true,
    },
      component: ArticleUpdate
    },
    {
      path: '/admin/articleEdit/:id',
      name: 'articleEdit_id',
      meta: {
        auth: true,
    },
      component: () => import('./components/admin/ArticleEdit.vue')
    },
    {
    path: '/admin/articleEdit',
    name: 'articleEdit',
    meta: {
      auth: true,
  },
    component: ArticleEdit
    },
    {
      path: '/admin/articleListroot',
      name: 'articleListroot',
      meta: {
        auth: true,
    },
      component:ArticleListroot
    },
    {
      path: "/403",
      name: "noAnth",
      component: NoAnth
    },
    {
      path: "/404",
      name: "notFound",
      component: NotFound
    },
    {
      path: '/:catchAll(.*)*',
      redirect: "/404"
    },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active'
})

