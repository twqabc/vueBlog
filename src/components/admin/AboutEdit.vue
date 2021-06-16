<template>
  <div id="edit_wrap">
    <div id="return_button">
      <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
    </div>
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
import store from '../../store'
import marked from 'marked'
import _ from 'lodash'


export default defineComponent({
  setup() {
    let content = ref('')
    const compiledMarkdown = function () {
      return marked(content.value, { sanitize: true })
    }
    const update = _.debounce(function (e) {
      content.value = e.target.value
    }, 300)
    const router = useRouter()
    console.log(router)
    const goBack = () => {
      router.go(-1)
    }
    const saveArticle = () => {
      if (content.value.length === 0) {
        alert("Please enter the content")
        return
      }
      else {
        store.state.about = content.value
      }
    }
    return reactive({
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
  height: 800px;
}
#markdown_input {
  width: 49%;
  display: inline-block;
  height: 100%;
}
#markdown_display {
  overflow: auto;
  display: inline-block;
  width: 48%;
  height: 100%;
  padding: 1px 0 1px 1%;
}
#save_button {
  padding: 40px 0;
}
</style>