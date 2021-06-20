<template>
  <div class="container">
    <div class="row ">
      <div class="col-sm-4 col-xs-0"></div>
      <div v-if="status" class="mb-3 col-sm-4 col-xs-12">
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
      <div class="text-center" v-else>
        <h2>已登录</h2>
        <div class="mange">
          <div class="row ">
            <div class="col-sm-4 col-xs-0"></div>
            <div class="mb-3 col-sm-4 col-xs-12">
              <label for="exampleInputEmail1" class="form-label">NowName</label>
              <input class="form-control" v-model="nowname" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">NowPassword</label>
                <input type="password" v-model="nowpassword" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">NewPassword</label>
                <input type="password" v-model="newpassword" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="mb-3">
                <button class="btn signup btn-primary" @click="passwordupdate">修改密码</button>
                <button class="btn signin btn-primary" @click="namedelete">注销账号</button>
                <button class="btn exit btn-primary" @click="exit">退出</button>
              </div>
            </div>
            <div class="col-sm-4 col-xs-0"></div>
          </div>
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
    let status = ref('')
    let nowname = ref('')
    let nowpassword = ref('')
    let newpassword = ref('')

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
        localStorage.setItem("username", name.value)
        status.value = false
        alert("登录成功")
      }
    }
    if (localStorage.getItem("username")) {
      status.value = false
    } else {
      status.value = true
    }
    const exit = () => {
      localStorage.removeItem("username", name.value)
      status.value = true
      alert("退出成功")
    }
    nowname.value = localStorage.getItem("username")
    const passwordupdate = async () => {
      const response11 = await axios.get('/api/user/' + nowname.value + "/" + nowpassword.value)
      if (response11.data.length) {
        if (newpassword.value.length < 6) {
          alert("新密码小于六个字符")
          return
        } else {
          const response22 = await axios.put('/api/user/' + nowname.value + "/" + newpassword.value)
          if (response22.data) {
            alert("密码修改成功,需要重新登录啦")
            localStorage.removeItem("username", name.value)
            status.value = true
          }
        }
      } else {
        alert("now密码输入错误")
      }
    }
    const namedelete = async () => {
      const response111 = await axios.get('/api/user/' + nowname.value + "/" + nowpassword.value)
      if (response111.data.length) {
        await axios.delete('/api/user/' + nowname.value)
        alert("账号删除成功,换个账号重新登录吧")
        localStorage.removeItem("username", name.value)
        status.value = true
      } else {
        alert("now密码输入错误")
      }
    }
    return reactive({
      signup,
      name,
      password,
      signin,
      exit,
      status,
      nowname,
      nowpassword,
      newpassword,
      passwordupdate,
      namedelete
    })
  }
})
</script>
<style scoped>
.signin,
.exit {
  margin-left: 20px;
}
</style>
