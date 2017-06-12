<template>
  <div class="resgist-box wh">
    <div class="resgist-bg">
      fdfd
    </div>
  </div>
</template>

<script>
export default {
  // name: 'hello',
  // data () {
  //   return {
  //     // msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<style lang="scss">
$bg: #007ec0;
.wh {
  width: 100%;
  height: 100vh;
}

.resgist-box {
  position: relative;
  background: url(../../static/assets/regist-bg.png) center 0 no-repeat;
  background-size: cover;
}

.resgist-bg {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 360px;
  border-radius: 5px; 
  padding: 20px;
  background: #0558b3;
  margin-top: 50px;
  margin-left: -180px;
}
</style>

