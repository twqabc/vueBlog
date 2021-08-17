<template>
    <div class="containerr">
      <Bar />
      <router-view name="articleList" />
      <router-view v-if="isRouterAlive" />
    </div>
     <div class="fo"><Footer /></div>
</template>

<script>

import Bar from './components/Bar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Bar,
    Footer
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}

</script>

<style>

.containerr {
     max-width: 90%;
     min-height: 100vh;
    margin: 0 auto -4em;
}
.fo {
 height: 50px;
 height: 4em;
}
</style>
