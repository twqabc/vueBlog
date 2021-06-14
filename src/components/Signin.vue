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
import About from '../components/About.vue'
import store from '../store'
export default {
    name: 'signin',
    data() {
        return {
            name: '',
            password: '',
            hasName: false,
        }
    },
    methods: {     
        signup: function(){//为什么箭头函数不行
        if (this.name.length < 6) {
          this.$message.error('用户名不能为空或小于六个字符')
          return
        }
        if (this.password.length < 6) {
          this.$message.error('密码不能为空或小于六个字符')
          return
        } else {
          let obj = {
            name: this.name,
            password: this.password
          }
        console.log("sign success" + obj)
        store.state.routes.push(  {
              path: '/about',
              name:'about',
              component: About
            },)
            console.log(store.state.routes[12])
        }
        

        }
    },
    setup (){
    console.log(store.state.ruotes)
    }
}
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
