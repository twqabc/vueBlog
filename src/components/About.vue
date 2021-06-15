<template>
  <!-- <textarea id="markdown_input" v-model="content" @input="update"></textarea> -->
  <div class="content">
    <div id="markdown_display" v-html="compiledMarkdown()"></div>
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

<style scoped>
.content {
  display: grid;
  align-items: center;
  justify-items: center;
  width: 800px;
  /* height: 100%;
  padding: 1px 0 1px 1%; */
}
</style>