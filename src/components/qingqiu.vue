<template>
    <div>
      <button @click="fn">axios请求</button>
    </div>
</template>

<script>
  import  axios from 'axios'
    export default {
        name: "qingqiu",
      methods:{
          fn() {
            axios.get('userlist.json')
              .then(res=>{
              console.log(res.data)
            }).catch((res=>{

            }))
          }
      }
    }
</script>

<style scoped>

</style>
