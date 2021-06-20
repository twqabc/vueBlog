<template>
  <div class="container">
    <div class="noanth">
      <h1 class="">管理页面需要您登录哦</h1>
      <el-button icon="arrow-left" size="small" @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from "vue-router"

export default defineComponent({
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }
    return {
      goBack
    }
  },
})
</script>

<style scoped>
.container {
  height: 90vh;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
