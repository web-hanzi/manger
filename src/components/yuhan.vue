<template>
    <div>
      <h1>获取参数</h1>
      <button @click="fn">获取参数</button>
    </div>
</template>

<script>
    export default {
        name: "yuhan",
      methods:{
          fn() {
            let id=this.$route.query.id
            console.log(id)
          }
      }
    }
</script>

<style scoped>

</style>
