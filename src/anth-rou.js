<template>
  <div class="sign-wrap">
    <h1>后台管理</h1>
    <el-input v-model="name" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
    <el-button @click="signup">注册</el-button>
    <el-button type="primary" @click="signin">登录</el-button>
  </div>
</template>

<script>
// const Test = { template: '<div>test</div>' }
import axios from 'axios'
import { defineComponent, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    let name = ref('')
    let password = ref('')
    const signup = function () {

      const Router = useRoute()
      console.log(Router)

      if (name.value.length < 6) {
        alert('用户名不能为空或小于六个字符')
        return
      }
      if (password.value.length < 6) {
        alert('密码不能为空或小于六个字符')
        return
      } else {
        axios
          .post('/api/user/', {
            name: name.value,
            password: password.value
          })

        // console.log(Router.addRoute({
        //   path: '/admin/test',
        //   name: 'test',
        //   component: Test
        // }))

      }
    }
    return reactive({
      signup,
      name,
      password
    })
  }
})
</script>
<style scoped>
.sign-wrap {
  width: 300px;
  margin: 200px auto;
}
#sign_wrap h1 {
  color: #383a42;
  padding: 10px;
}

#sign_wrap div {
  padding-bottom: 20px;
}
</style>
