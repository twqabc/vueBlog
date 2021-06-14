<template>
<div class="article">
       <h1 class="blog-h1">Blog</h1>
     <router-link class="nav-item" v-for="item in articleList" v-bind:key="item" :to="'/articleDetail/' + item._id">
      <div id="article-title" >
     {{ item.title }}
      </div>
     <div id="article-date">
   {{ item.date }}
     </div>
     <div class="blank"></div>
           </router-link>
           </div>
</template>
<script>
import axios from 'axios'
import { onMounted, defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup () {
    const articleList = ref("")
    const stt = onMounted(() => {
      axios
       .get('/api/post')
       .then(response => {
         articleList.value = response.data
       })
       .catch(function (error) {
       console.log(error);
       });
    })
    return reactive ({
      stt,
      articleList
    })
  }
})
</script>
<style scoped>
 .blog-h1 {
   margin-bottom: 20px;
 }
 .article {
   display: grid;
   align-items: center;
   justify-items: center;
 }
 .nav-item {
   color:grey;
   text-decoration: none;
 }
 #article-title {
   font-size: 30px;
 }
 #article-date {
   font-size: 12px;
 }
 .nav-item:hover {
   color: black;
 }
  * {
    font-style: red;
  }
  .blank {
    height: 20px;
  }
  .article-list {
    color: grey;
  }
  .article-list:hover {
    color: black;
  }
</style>