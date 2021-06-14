<template>
        <!-- <textarea id="markdown_input" v-model="content" @input="update"></textarea> -->
        <div id="markdown_display" v-html="compiledMarkdown()"></div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store'
import marked from 'marked'

export default defineComponent({
 setup (){
    const compiledMarkdown = function () {
       return marked(store.state.about || '', {sanitize: true})
      }
   return ({
     compiledMarkdown,
   })
 }
})

</script>

<style scoped>
#markdown_display {
    display: grid;
    align-items: center;
    justify-items: center;
    float: right;
    width: 48%;
    height: 100%;
    padding: 1px 0 1px 1%;
}
</style>