<template>
  <div class="songlist">
    <ul>
      <li v-for="item in movieArr">
        <span class="filename">{{item.filename}}</span>
        <span class="addtime">{{item.addtime}}</span>
      </li>
    </ul>
    <p><button @click="fn">渲染一</button></p>
    <h2 class="douban-title">{{doubanArr.title}}</h2>
    <ul class="douban" v-for="item in doubanArr.subjects">
      <li >
        {{item.title}}<br>
        <img :src="item.images.large" alt=""><br>
        {{item.year}}
        </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "kuayu",
      data () {
        return {
          movieArr : [],
          doubanArr:{}
        }
      },
       created:function (){
         this.$http.jsonp('https://api.douban.com//v2/movie/in_theaters')
           .then(res => {
             console.log(res.data)
             this.doubanArr = res.data
           })
         //https://zhidao.baidu.com/notice/get/unreadcount?iswap=1
         //http://m.kugou.com/rank/info/?rankid=23784&page=1&json=true&callback=_jsonpapygw1stlrw
         // this.$http.jsonp('http://m.kugou.com/rank/info/rankid=23784&page=1&json=true')
         //   .then(res => {
         //     console.log(res.data)
         //   })

       },

      methods: {
        fn () {
          console.log(111)
          this.$axios.post('/api/rank/info/?rankid=23784&page=1&json=true')
            .then((response) => {
              console.log(response.data.songs.list)
              // 这里要强调一下这个this 箭头函数指的是它的父级也就是vue实例  然后不用箭头函数的话
              // this是一个undefined 无法.movieArr来给他赋值
              // 这里要注意一下 我被坑了半天 希望小伙伴不要被坑
              this.movieArr = response.data.songs.list
            })
            .catch((err)=>{
              console.log(err)
            })
        },
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .songlist ul li{
    font-size: 24px;
  }
  .songlist ul li .filename{
    display: inline-block;
    width: 48.5%;
    text-align: left;
  }
  .songlist ul li .addtime{
    display: inline-block;
    width: 50%;
    text-align: right;
  }
  .douban{
    width: 100%;
    font-size: 24px;
  }
  .douban li {
    float: left;
    width: 50%;
    margin: 20px 0;
    list-style: none;
  }
  .douban li img{
    width: 80%;
  }
</style>
