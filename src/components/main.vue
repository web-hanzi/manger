<template>
  <div>
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
    <h1>11111111</h1>
    <h1>11111111</h1>
    <transition name='slide-fade'>
      <div class='page-component-up' v-show='isShow' @click='getTop' ref="cont">
        <button>点我</button>
      </div>
    </transition>
  </div>

</template>
<script>
  export default {
    name: 'BackTop',  // 这个是export出去的组件名，我定义为BackTop
    data() {
      return {
        isShow: true,
        scroll: ''
      }
    },
    methods: {
      showIcon() {
        //  根据scrollTop的值来判断是否显示返回顶部的icon
        if (this.$refs.cont.scrollTop > 100) {
          console.log(this.target.scrollTop)
          this.isShow = true
        } else if (this.$refs.cont.scrollTop < 100) {
          this.isShow = false
        }
      },
      getTop() {
// 点击icon之后自动返回顶部的函数
//         let timer = setInterval(() => {
//           let top = this.$refs.cont.scrollTop
//
//           let speed = Math.ceil(top / 5)
//           this.$refs.cont.scrollTop = top - speed
//           if (top === 0) {
//             clearInterval(timer)
//           }
//         }, 20)
//       }
        this.$refs.cont.scrollTop = 0
      },
      mounted() {
        // 通过这个target来判断当前的滚动监听对象是谁
        // if (this.$refs.cont) {
        //   this.target = this.$refs.cont
        //   //console.log(this.target)
        // } else {
        //   this.target = document.body
        // }
        this.$refs.cont.addEventListener('scroll', this.showIcon)
      },
      beforeDestroy() {
        //  组件销毁的时候，需要删除scroll的监听事件。
        this.$refs.cont.removeEventListener('scroll', this.showIcon)
      }
    }
  }
</script>



<style>
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.3, 0.8, 1.0);
    opacity: 0;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active 在低于 2.1.8 版本中 */ {
    transform: translateY(-20px);
    opacity: 0;
  }
  .page-component-up {
    background-color: #4eb1fb;
    position: fixed;
    right: 3rem;
    bottom: 12rem;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    opacity: .4;
    transition: .3s;
    text-align: center;
    z-index: 999;
  }
  .tri {
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #dfe6ec;
    text-align: center;
  }
  .hover {
    background-color: red;
  }
</style>

