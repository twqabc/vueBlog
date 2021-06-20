<template>
  <!-- <textarea id="markdown_input" v-model="content" @input="update"></textarea> -->

  <div class="container ">
    <div class="row">
      <div class="col-sm-2 col-xs-2"></div>
      <div class="col-sm-9 col-xs-9  " v-html="compiledMarkdown()"></div>
      <div class="col-sm-1 col-xs-1"></div>
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
      return marked(store.state.about)
    }
    return ({
      compiledMarkdown,
    })
  }
})

</script>

<style >
</style>