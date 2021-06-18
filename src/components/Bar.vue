<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">TwqAbc</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/articleList">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/project">Project</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signIn">Signin</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Manage
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="dropdown-item">
                <router-link class="nav-link" to="/admin/articleEdit">write_art</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="nav-link" to="/admin/aboutEdit">write_abt</router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="nav-link" to="/admin/articleListroot">art_list</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="store.state.github" target="_blank"><i class="ri-github-line"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="store.state.twitter" target="_blank"><i class="ri-twitter-line"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="store.state.wechat" target="_blank"><i class="ri-wechat-2-line"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
<script>
import store from '../store'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    return reactive({
      store,
    })
  }
})
</script>
<style scoped>
.content {
  padding-top: 10px;
}
@import url("https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css");
</style>