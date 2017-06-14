<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0
}

body {
  background: #007ec0;
  // background: rgba( 237, 234 ,234, .7);
}

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
// }
</style>
