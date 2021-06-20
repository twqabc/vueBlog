<template>
  <div class="container">
    <h2>匿名悄悄话</h2>
    <form>
      <div class="form-group">
        <label for="name">say content</label>
        <textarea class="form-control" rows="3" v-model="saycontent" placeholder="尽情吐槽"></textarea>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox"> 是否仅仅显示24小时
        </label>
      </div>
      <button @click="spit" class="btn btn-primary">发送</button>
    </form>
    <div class="row">
      <div class="col-1">
      </div>
      <div class="col-8">
        <div class="nav-item" v-for="item in anonymouslist" v-bind:key="item">
          <div id="content">
            {{ item.content }}
          </div>
          <div class="date">{{ item.date }}</div>
          <div class="blank"></div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <h3>共{{anonymouslist.length }}条悄悄话</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { onMounted, defineComponent, reactive, ref } from 'vue'
import { getDate } from "../utils"

export default defineComponent({
  setup() {
    const anonymouslist = ref("")
    let saycontent = ref('')

    const postlistget = onMounted(() => {
      axios
        .get('/api/anonymous/')
        .then(response => {
          anonymouslist.value = response.data
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    const spit = () => {
      let nowdate = getDate()
      axios
        .post("api/anonymous/", {
          content: saycontent.value,
          date: nowdate
        })
    }
    return reactive({
      postlistget,
      anonymouslist,
      saycontent,
      spit
    })
  }
})
</script>
<style scoped>
.blank {
  height: 20px;
  width: 80%;
  border-bottom: 1px gray dashed;
}
.date {
  font-size: 12px;
}
#content {
  overflow: auto;
}
</style>