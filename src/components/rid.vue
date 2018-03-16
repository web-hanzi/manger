<template>
    <div>
        <router-link tag="li" :to="{path:'/yuhan',query:{id:item.id}}" v-for="item in arr">
          {{item.title}}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "rid",
      data (){
          return {
            arr:[
              {id:1,title:'余汉'},
              {id:2,title:'熊泽东'}
            ]
          }
      },
    }
</script>

<style scoped>
li{
  list-style: none;
}
</style>
