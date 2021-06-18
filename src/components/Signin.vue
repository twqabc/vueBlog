<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 col-xs-0"></div>
      <div class="mb-3 col-sm-4 col-xs-12">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input class="form-control" v-model="name" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
        </div>

        <div class="mb-3">
          <button class="btn signup btn-primary" @click="signup">注册</button>
          <button class="btn signin btn-primary" @click="signin">登录</button>

        </div>

      </div>
      <div class="col-sm-4 col-xs-0"></div>
    </div>
  </div>
</template>

<script>
// import { login } from "../api"
import axios from 'axios'
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    let name = ref('')
    let password = ref('')

    const signup = async () => {//箭头函数
      // let data = await login(name.value)
      // localStorage.setItem("lastname", "smith")
      // console.log(data.data.data)

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
        localStorage.setItem("username", name.value)
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
.signin {
  margin-left: 20px;
}
</style>
