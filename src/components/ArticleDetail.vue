<template>
  <div class="article-content">
    <div class="article title">
      <h1>{{ article.title }}</h1>
    </div>
    <div class="article date">{{ article.date }}</div>
    <div class="article gist">{{ article.gist }}</div>
    <div class="article detail_content" v-html="compiledMarkdown()"></div>
  </div>
</template>
<script>
import marked from 'marked'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    let article = ref(12)
    const route = useRoute()
    console.log(route)
    let id = route.params.id
    console.log(route.params.id)
    axios.get('/api/post/' + id)
      .then(function (response) {
        article.value = response.data[0]
      })
    const compiledMarkdown = () => {
      return marked(article.value.content || '', { sanitize: true })
    }
    return {
      article, compiledMarkdown
    }

  },
}
</script>
<style scoped>
.article-content {
  display: grid;
  align-items: center;
  justify-items: center;
}
.article {
  /* position: absolute; */
  padding-bottom: 20px;
}
</style>
