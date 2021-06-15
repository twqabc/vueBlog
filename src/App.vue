<template>
  <div>
    <div class="content">
      <Bar />
      <Footer />
      <div class="about">
        <router-view name="about"></router-view>
      </div>
      <router-view />

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
  }
}
</script>

<style>
.about {
  padding-top: 30px;
  display: grid;
  align-items: center;
  justify-items: center;
}
#content {
  width: 800px;
  float: left;
  background: white;
}
</style>
