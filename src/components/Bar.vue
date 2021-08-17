<template>
<nav>
 <ul>
        <li>    <router-link class="nav-link" to="/">Blog</router-link></li>

        <li>    <router-link class="nav-link" to="/project">Anonymous</router-link></li>

        <li>   <router-link class="nav-link" to="/signIn">Signin</router-link></li>

          <li>      <router-link class="nav-link" to="/admin/articleEdit">write_art</router-link></li>

           <li>     <router-link class="nav-link" to="/admin/articleListroot">art_list</router-link></li>

         <li>   <a class="nav-link" :href="store.state.github" target="_blank"><i class="ri-github-line"></i></a></li>

         <li>   <a class="nav-link" :href="store.state.twitter" target="_blank"><i class="ri-twitter-line"></i></a></li>

       <li>     <router-link class="nav-link" to="/wechat"><i class="ri-wechat-2-line"></i></router-link></li>

        <li>  <input placeholder="Search" v-model="keyword" aria-label="Search"></li>
        <li>  <button  @click="search">Search</button></li>
</ul>
  </nav>

</template>
<script>
import store from '../store'
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from "vue-router"

export default defineComponent({
  setup() {
    let keyword = ref('')
    const router = useRouter()

    const search = () => {
      console.log(keyword.value)
      router.push("/articleSearch/" + keyword.value)
    }

    return reactive({
      store,
      keyword,
      search
    })
  }
})
</script>
<style scoped>
li {
  display: inline-block;
  color: black;
}
a {
  color: rgb(17, 16, 16);
}
@import url("https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css");
</style>