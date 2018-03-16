<template>
    <div>
      <!--<form action="" @submit.prevent="submit" >-->
        <!--<p>用户名：<input type="text" v-model="Username" placeholder="用户名"></p>-->
        <!--<p>密码：<input type="password" v-model="Userpwd" placeholder="密码"></p>-->
        <!--<input type="submit" value="提交">-->
      <!--</form>-->
      <input type="button" @click="send" value="post请求">
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "formdata",
      data() {
          return {
            // Username:'',
            // Userpwd:'',
            Users:{
              name:'yuhan',
              age:22
            }
          }
      },
      methods:{
        submit (){
          // console.log(111)
          // axios({
          //   method:'get',
          //   url:'http://localhost:8080',
          //   data:{name:this.Username, pwd:this.Userpwd}
          // }).then((res)=>{
          //   console.log(res)
          // })
          //   .catch((err)=>{
          //     console.log(err)
          //   })


          // axios.get('http://localhost:8080',{
          //   params:{
          //     name:this.Username,
          //     pwd:this.Userpwd
          //   }
          // }).then((res)=>{
          //   console.log(res)
          // }).catch((res)=>{
          //
          // })

          //post传参 发送的数据格式不一样 不是常见的fromdata 要以键值对的方式传入
          // let Name =this.Username;
          // let mima = this.Userpwd

          //axios.post('http://localhost:8080','name='+Name+'&pwd='+mima+'')
          axios.post('http://localhost:8080','name=yuhan&pwd=11111')
            .then((res)=>{
            console.log(res)
          })
            .catch((err)=>{
              console.log(err)
            })
        },
        send (){
          axios.post('http://localhost:8080',this.Users,{
            transformRequest:[
              function(data){
                let params='';
                for(let index in data){
                  params+=index+'='+data[index]+'&'
                }
                return params
              }
            ]
          })
            .then((res)=>{
              console.log(res)
            })
            .catch((err)=>{
              console.log(err)
            })
        }
      }
    }
</script>

<style scoped>

</style>
