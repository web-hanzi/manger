<template>
    <div>
      <div class="ms-login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <span class="aaa">用户名:</span>
            <div class="bbb"><el-input v-model="ruleForm.username" placeholder="用户名"></el-input></div>
          </el-form-item>
          <el-form-item prop="password">
            <span class="aaa">密码:</span>
            <div class="bbb">
              <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </div>
          </el-form-item>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <br>
          <br>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
      name: "cookie-log",
      data() {
        return {
          ruleForm:{
            username:'',
            password:''
          },
          rules:{},
          checked:''
        }
      },
      mounted() {
        this.getCookie();
      },
      methods: {
        submitForm(formName) {
          //alert(111)
          const self = this;
          //判断复选框是否被勾选 勾选则调用配置cookie方法
          if (self.checked == true) {
            console.log("checked == true");
            //传入账号名，密码，和保存天数3个参数
            self.setCookie(self.ruleForm.username, self.ruleForm.password, 7);
          } else {
            console.log("清空Cookie");
            //清空Cookie
            self.clearCookie();
          }

          //与后端请求代码，本功能不需要与后台交互所以省略

          console.log("登陆成功");

        },
        //设置cookie
        setCookie(c_name, c_pwd, exdays) {
          var exdate = new Date(); //获取时间
          //setTime() 可以向1970年添加毫秒数或者减少毫秒数
          //getTime（）可以或得当前距离1970年的毫秒数
          exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
          //字符串拼接cookie
          window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
          window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        },
        //读取cookie
        getCookie: function () {
          if (document.cookie.length > 0) {
            var arr = document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
            //console.log(arr)
            for (var i = 0; i < arr.length; i++) {
              var arr2 = arr[i].split('='); //再次切割
              //console.log(arr2)
              //判断查找相对应的值
              if (arr2[0] == 'userName') {
                this.ruleForm.username = arr2[1]; //保存到保存数据的地方
              } else if (arr2[0] == 'userPwd') {
                this.ruleForm.password = arr2[1];
              }
            }
          }
        },
        //清除cookie
        clearCookie: function () {
          this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
        }
      }
    }
</script>

<style scoped>
.ms-login{
  margin: auto 10px;
}
  .aaa{
    width: 18%;
    float: left;
  }
  .bbb{
    width: 82%;
    float: right;
  }
</style>
