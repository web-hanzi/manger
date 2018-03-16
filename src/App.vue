<template>
  <div id="app">
    <h1>共享后台管理</h1>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$router.push('/formdata')
  }
}
</script>

<style>
html, body {
  height: 100%;
}
html, body, h1 {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 41.2rem;
  margin: 0 auto;
}
h1 {
  height: 45px;
  line-height: 45px;
  font-size: 24px;
}
.content {
  flex: 1;
}
</style>
