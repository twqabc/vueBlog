<template>
  <div id="edit_wrap">
     <div id="return_button">
        <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
      </div>
       <div id="edit_title">标题</div>
       <el-input v-model="title" placeholder="请输入标题"></el-input>
         <div id="edit_gist">简介</div>
      <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入简介"
          v-model="gist">
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
import { defineComponent,ref,reactive } from 'vue'
import { useRouter } from 'vue-router'

import marked from 'marked'
import _ from 'lodash'
import axios from 'axios'

export default defineComponent({
 setup (){
    let title = ref('')
    let gist = ref('')
    let content = ref('')
    
    const compiledMarkdown = function () {
        return marked(content.value, {sanitize: true})//this.content???????????????
      }
    const update =_.debounce(function (e) {
         content.value = e.target.value
      }, 300)
      const router = useRouter()
      console.log(router)
      const goBack = () => {
        router.go(-1)
      }
    const saveArticle = () => {
            if(title.value.length === 0){
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
          axios.post('/api/post',{
            title: title.value,
            date: date,
            gist: gist.value,
            content: content.value
          })
          .then(function (response) {
           console.log(response);
           router.push('/admin/articleList')
  })       
        }

    }
    const getDate = () => {
            let mydate, y, m, d, hh, mm, ss;
            mydate = new Date()
            y = mydate.getFullYear()
            m = mydate.getMonth()
            d = mydate.getDate()
            hh = mydate.getHours()
            mm = mydate.getMinutes()
            ss = mydate.getSeconds()
            if (m < 10) m = '0' + m
            if (d < 10) d = '0' + d
            if (hh < 10) hh = '0' + hh
            if (mm < 10) mm = '0' + mm
            if (ss < 10) ss = '0' + ss
            return mydate = y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
          }
     
   return reactive({
     title,
     gist,
     content,
     compiledMarkdown,
     update,
     saveArticle,
     getDate,
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
  width:49%;
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