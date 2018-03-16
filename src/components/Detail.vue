<template>
  <div class="detail">
    <h4>车辆编号：{{$route.params.id}}</h4>
    <h4>故障信息：{{$route.params.detail}}</h4>

    <mt-checklist
      title=""
      v-model="method"
      :options="['更换二维码', '更换轮台', '更换其他配件']">
    </mt-checklist>
    <mt-button type="primary" size="large" @click="repairDone">维修完成</mt-button>
    <mt-button type="default" size="large" @click="backDone">返回</mt-button>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      method:[]
    }
  },
  methods:{
    repairDone () {
      let id=this.$route.params.id; //从路由参数中取到id 在index.js页面中
      let method = this.method;
      fetch(`/api/repair?id=${id}&method=${method}`)
        .then((res)=>{
          return res.json()
        }).then((json)=>{
          console.log(json.message)
        alert(json.message)
      })
    },
    backDone () {
        this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .mint-checklist{
    text-align: left;
  }
  .mint-button--large{
    width: 90%;
    margin:10px auto;
  }
  .detail{
    text-align: left;
    background: url("../assets/bg.jpg") no-repeat center;
    background-size: 100%;
  }
  .detail h4{
    padding-left: 20px;
  }
</style>
