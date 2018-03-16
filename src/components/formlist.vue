<template>
    <div>
      <h3>注册信息</h3>
      <form action="">
      <mt-field label="姓名：" placeholder="请输入姓名" ></mt-field>
      <mt-field label="身份证号：" placeholder="请输入身份证号" type="email" ></mt-field>
      <div class="tel">
        <mt-field label="电话：" placeholder="请输入电话" type="password" ></mt-field>
        <button class="fasong">发送</button>
      </div>
      <mt-field label="验证码：" placeholder="请输入验证码" type="tel"></mt-field>
      <mt-button type="primary">注册</mt-button>
      </form>
    </div>
</template>

<script>
    export default {
        name: "formlist"
    }
</script>

<style >
  .mint-cell-title{
    text-align: right;
    font-size: 14px;
  }
  .mint-cell-wrapper{
    padding: 0;
    margin: auto 10px;
  }
  .mint-cell-wrapper:last-of-type{
    border-bottom: 1px solid #999;
  }
input::-webkit-input-placeholder { /* WebKit browsers*/
  　　color: #cccccc;font-size:12px;}
input:-moz-placeholder {  /* Mozilla Firefox 4 to 18*/
  　　color:#cccccc;font-size:12px;}
input::-moz-placeholder {  /* Mozilla Firefox 19+*/
  　　color:#cccccc;font-size:12px;}
input:-ms-input-placeholder { /* Internet Explorer 10+*/
  　　color:#cccccc;font-size:12px;}
  .fasong{
    position: absolute;
    font-size: 12px;
    z-index: 999;
    top: 14px;
    right: 12px;
  }
  .tel{
    position: relative;
  }
  .mint-button-text{
    clear: both;
    font-size: 14px;
  }
</style>
