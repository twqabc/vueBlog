import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
      if (localStorage.getItem("username")) { 
         next()
      }
      else {
        next({path:"/404"}) //跳到404页面
      }
  }
  else {
      next();
  }
})



createApp(App).use(ElementPlus).use(router).mount('#app')
