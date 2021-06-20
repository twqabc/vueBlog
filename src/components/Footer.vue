<template>
  <div class="fcontainer">
    <p>
      博客已萌萌哒运行 {{ longTime }}
    </p>
    <p>
      © 2021<a href="#">Mango Ya</a>. 由 <a href="https://cn.vuejs.org/" target="_blank">Vue</a> 强力驱动. Theme By <a href="http://weiqi.icu/" target="_blank">wieqi.icu</a>. 京ICP备17071595号-1.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longTime: ''
    }
  },
  methods: { //事件处理器
    runTime: function () {//运行倒计时
      var that = this;
      var oldTime = new Date('2016/06/01 00:00:00');
      setInterval(function () {
        var nowTime = new Date();
        var longTime = nowTime - oldTime;
        var days = parseInt(longTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
        var hours = parseInt(longTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
        var minutes = parseInt(longTime / 1000 / 60 % 60, 10);//计算剩余的分钟
        var seconds = parseInt(longTime / 1000 % 60, 10);//计算剩余的秒数
        that.longTime = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
      }, 1000)
    }
  },
  created() { //生命周期函数
    var that = this;
    that.runTime();
  }
}

</script>

<style >
.fcontainer {
  color: #888;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  width: 100%;
  min-height: 50px;
  position: fixed;
  bottom: 15px;
}
</style>
