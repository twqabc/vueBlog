<template>
  <!-- <textarea id="markdown_input" v-model="content" @input="update"></textarea> -->
  <div class="con">
    <div class="container ">
      <div class="row ">
        <div class="col-sm-1 col-xs-1"></div>
        <div class="col-sm-10 col-xs-10 text-center " v-html="compiledMarkdown()"></div>
        <div class="col-sm-1 col-xs-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import store from '../store'
import marked from 'marked'

export default defineComponent({
  setup() {
    const compiledMarkdown = function () {
      return marked(store.state.about || '', { sanitize: true })
    }
    return ({
      compiledMarkdown,
    })
  }
})

</script>

<style >
</style>