<template>
  <div id="edit_wrap">
    <div id="return_button">
      <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
    </div>
    <div id="edit_title">标题</div>
    <el-input v-model="title" placeholder="请输入标题"></el-input>
    <div id="edit_gist">简介</div>
    <el-input type="textarea" class="gist" :rows="5" placeholder="请输入简介" v-model="gist">
    </el-input>
    <div id="edit_content_bt">内容 (Markdown编辑器)</div>
    <div id="markdown">
      <textarea id="markdown_input" v-model="content" @input="update"></textarea>
      <div id="markdown_display" v-html="compiledMarkdown()"></div>
      <div class="clear"></div>
    </div>
    <div id="save_button">
      <el-button type="primary" @click="saveArticle">保存</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getDate } from "../../utils"

import marked from 'marked'
import _ from 'lodash'
import axios from 'axios'

export default defineComponent({
  setup() {
    let title = ref('')
    let gist = ref('')
    let content = ref('')
    const router = useRouter()

    const compiledMarkdown = function () {
      return marked(content.value, { sanitize: true })//this.content???????????????
    }

    const update = _.debounce(function (e) {
      content.value = e.target.value
    }, 300)

    const goBack = () => {
      router.go(-1)
    }

    const saveArticle = () => {
      if (title.value.length === 0) {
        alert("Please enter the title")
        return
      }
      if (content.value.length === 0) {
        alert("Please enter the content")
        return
      }
      if (gist.value.length === 0) {
        alert("Please enter the gist")
        return
      } else {
        let date = getDate()
        axios.post('/api/post', {
          title: title.value,
          date: date,
          gist: gist.value,
          content: content.value
        })
          .then(function () {
            router.push('/admin/articleListroot')
          })
        alert("writer article success")
      }
    }

    return reactive({
      title,
      gist,
      content,
      compiledMarkdown,
      update,
      saveArticle,
      goBack
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
  overflow: auto;
  display: inline-block;
  width: 50%;
  height: 0px;
  padding-bottom: 100%;
}
#save_button {
  padding: 40px 0;
}
</style>