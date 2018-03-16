<template>
    <div>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <h1>111111</h1>
      <div class="position"></div>
    </div>
</template>

<script>

  export  default {
    name:'fanhuitop',
      mounted(){
        $(function(){
          $(window).scroll(function(){
            if($(window).scrollTop()>10){
              $(".position").fadeIn(1000/60)
            }else{
              $(".position").fadeOut(1000/60)
            }
          });
          $(".position").click(function(){
            $("body,html").animate({scrollTop:0},1000/60)
            return false
          })
        })
      }
  }
</script>

<style scoped>
.position{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: fixed;
  bottom:30px;
  right:30px;
  cursor: pointer;
  background-color: black;
  display: none;
}
</style>
