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

import axios from 'axios'
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    let name = ref('')
    let password = ref('')

    const signup = async () => {//箭头函数
      if (name.value.length < 6) {
        alert('用户名不能为空或小于六个字符')
        return
      }
      if (password.value.length < 6) {
        alert('密码不能为空或小于六个字符')
        return
      }
      const response = await axios.get('/api/user/' + name.value)
      if (response.data.length) {
        alert("此用户已抢先注册了哦")
        return
      }
      else {
        axios.post('/api/user/', {
          name: name.value,
          password: password.value
        })
          .then(() => {
            alert("注册成功")
          })
      }
    }
    const signin = async () => {
      const response1 = await axios.get('api/user/' + name.value)
      if (!response1.data.length) {
        alert("用户名不存在")
        return
      }
      const response2 = await axios.get('/api/user/' + name.value + "/" + password.value)
      if (!response2.data.length) {
        alert("你是不是忘了密码呀")
        return
      }
      const response3 = await axios.get('/api/user/' + name.value + "/" + password.value)
      if (response3.data.length) {
        alert("登录成功")
      }
    }
    return reactive({
      signup,
      name,
      password,
      signin
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
