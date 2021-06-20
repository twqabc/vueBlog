<template>
  <div>
    <div class="container">
      <Bar />
      <Footer />
      <router-view name="about" />
      <router-view v-if="isRouterAlive" />
    </div>
  </div>
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
/* .about {
  padding-top: 30px;
  display: grid;
  align-items: center;
  justify-items: center;
} */
</style>
