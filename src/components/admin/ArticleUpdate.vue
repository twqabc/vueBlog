<template>
  <h2>修改文章</h2>
  <div id="edit_wrap">
    <div id="return_button">
      <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
    </div>
    <div id="edit_title">标题</div>
    <el-input v-model="article.title" placeholder="请输入标题"></el-input>
    <div id="edit_gist">简介</div>
    <el-input type="textarea" class="gist" :rows="5" placeholder="请输入简介" v-model="article.gist">
    </el-input>
    <div id="edit_content_bt">内容 (Markdown编辑器)</div>
    <div id="markdown">
      <textarea id="markdown_input" v-model="article.content" @input="update"></textarea>
      <div id="markdown_display" v-html="compiledMarkdown()"></div>
      <div class="clear"></div>
    </div>
    <div id="save_button">
      <el-button type="primary" @click="saveArticle">保存</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getDate } from "../../utils"

import marked from 'marked'
import _ from 'lodash'
import axios from 'axios'

export default defineComponent({
  setup() {
    let article = ref('')
    const router = useRouter()
    const route = useRoute()
    const reload = inject("reload")
    let id = route.params.id

    axios.get('/api/post/' + id)
      .then(function (response) {
        console.log(response.data[0])
        article.value = response.data[0]
      })

    const compiledMarkdown = function () {
      return marked(article.value.content, { sanitize: true })
    }
    const update = _.debounce(function (e) {
      article.value.content = e.target.value
    }, 300)


    const goBack = () => {
      router.go(-1)
    }

    const saveArticle = async () => {
      if (article.value.title.length === 0) {
        alert("Please enter the title")
        return
      }
      if (article.value.content.length === 0) {
        alert("Please enter the content")
        return
      }
      if (article.value.gist.length === 0) {
        alert("Please enter the gist")
        return
      } else {
        let date = getDate()
        await axios.put('/api/post/' + id, {
          title: article.value.title,
          date: date,
          gist: article.value.gist,
          content: article.value.content
        })
        await router.push('/admin/articleListroot')
        await reload()
      }

    }

    return reactive({
      compiledMarkdown,
      update,
      saveArticle,
      goBack,
      article
    })
  }
})

</script>

<style scoped>
/* .gist {
  height: 0px;
  padding-bottom: 5%;
} */
#edit_wrap {
  padding: 40px;
}
#return_button {
  text-align: left;
  margin-bottom: 40px;
}
#edit_title {
  text-align: left;
  margin-bottom: 20px;
}
#edit_gist {
  text-align: left;
  margin-bottom: 20px;
}
#edit_content_bt {
  text-align: left;
  margin-bottom: 20px;
}
#markdown {
  text-align: left;
  border: 1px solid #bfcbd9;
}
#markdown_input {
  width: 50%;
  display: inline-block;
  height: 0px;
  padding-bottom: 100%;
}
#markdown_display {
  overflow-y: auto;
  display: inline-block;
  width: 50%;
  height: 0px;
  padding-bottom: 100%;
}
#save_button {
  padding: 40px 0;
}
</style>