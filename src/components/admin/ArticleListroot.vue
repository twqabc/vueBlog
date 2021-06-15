<template>
  <div class="article">
    <h1 class="blog-h1">Blog</h1>
    <div class="nav-item" v-for="item in articleList" v-bind:key="item">
      <router-link class="nav-item" :to="'/articleDetail/' + item._id">
        <div id="article-title">
          {{ item.title }}
        </div>
        <div id="article-date">
          {{ item.date }}
        </div>
      </router-link>
      <div @click="articleEdit(item._id)" class="article_button edit">修改</div>
      <div @click="deleteArticle(item._id)" class="article_button delete">删除</div>
      <div class="blank"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { onMounted, defineComponent, reactive, ref, inject } from 'vue'

export default defineComponent({
  setup() {

    const articleList = ref("")
    const reload = inject("reload")
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
    const deleteArticle = (id) => {
      axios
        .delete('/api/post/' + id)
        .then(response => {
          if (response.status === 204) {
            alert("delete article success")
            reload()
          }
        })
    }
    return reactive({
      stt,
      articleList,
      deleteArticle
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
  color: grey;
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
.article_button {
  display: inline-block;
  padding: 3px 12px;
  border: 1px solid #222;
  color: #222;
  font-size: 14px;
  cursor: pointer;
}
</style>