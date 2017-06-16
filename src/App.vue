<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import '../static/css/style.css'
export default {
  name: 'app'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background: #007ec0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
