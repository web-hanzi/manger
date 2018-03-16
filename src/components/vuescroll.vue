<template>
    <div id="box" ref="cont">
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <button v-show="showbtn" @click="menu">点击获取高度</button>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
      <h1>11111111</h1>
    </div>
</template>

<script>
    export default {
      name: "vuescroll",
      data() {
        return {
          showbtn:false,
          scroll:''
        }
      },
      methods: {
        // handleScroll () {
        //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //   console.log(scrollTop)
        // },
        menu() {
          var hhhh = this.$refs.cont.scrollTop //  声明ref=‘cont’ 用this.$refs.cont来获取dom节点
          console.log(hhhh)
          var self = this
          if (hhhh > 100) {
            //console.log(this.showbtn)
            setTimeout(function () {
              self.$refs.cont.scrollTop = 0
            }, 2000)
          }
        }
      },
      computed:{
        showOrif(){
          if(this.$refs.cont.scrollTop>100){
            this.showbtn = true
          }else{
            this.showbtn = false
          }
        }

      },
      mounted() {
        window.addEventListener('scroll', this.menu)
      }
    }
</script>

<style scoped>
  #box{
    height: 1000px;
    width: 100%;
    border: 1px solid red;
    overflow: scroll;
  }

</style>
