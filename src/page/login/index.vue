<template>
  <div class="login">
    <!-- icon -->
    <div class="login-head">
      <div class="login-icon">
        <img src="./image/LOGO3.png" alt="">
      </div>
    </div>
    <!-- form -->
    <div class="form">
      <div class="form-list" @click="regShow = true">
        <div class="form-list-left">国家/地区</div>
        <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{formAddress}}</div>
      </div>
      <div class="form-list">
        <div class="form-list-left">手机号</div>
        <div><input maxlength="11" type="text" placeholder="请输入手机号" v-model="form.phono"></div>
      </div>
      <div class="form-list">
        <div class="form-list-left">密码</div>
        <div><input type="password" maxlength="20" placeholder="请输入密码" v-model="form.password"></div>
      </div>
      
    </div>
    <!-- 向右拖动 -->
    <div class="drag-right">向右拖动滑块填充拼图</div>
    <!-- 3 -->
    <div class="tab">
      <div>忘记密码</div>
      <div>注册新会员</div>
      <div><router-link to="quickLogin">快速登录</router-link></div>
    </div>
    <!-- 立即登录 -->
    <button class="sign-button">立即登录</button>
    <!-- 点击查看协议 -->
    <div class="seeText" @click="agShow = true">点击查看《合美惠隐私政策》</div>
    <!-- 协议 -->
    <ag class="agShows" v-if="agShow" :s="agShow" @handleClose="handleClose"></ag>
    <!-- 国家/地区 -->
    <reg class="agShows" v-if="regShow" :s="regShow" @handleCloseReg="handleCloseReg"></reg>
  </div>
</template>

<script>
  import {
    Popup
  } from "vant";
  import ag from './agree/agreement.vue'
  import reg from './region.vue'
  export default {
    name: "login",
    components: {
      [Popup.name]: Popup,
      ag,
      reg,
    },
    data() {
      return {
        form: {
          country: '国家地区',
          phono: '',
          password: '',
        },
        formAddress:'中国（+86）',
        agShow:false,
        regShow:false,
      };
    },
    watch: {},
    created() {
      if (localStorage.loginName) {
        this.form.phono = localStorage.loginName.replace(/^(...)(....)/g, "$1 $2 ")
      }
    },
    methods: {
      // 协议
      handleClose(res){
        this.agShow = res
      },
      // 国家/地区
      handleCloseReg(res){
        // console.log(res)
        // this.regShow = res
        if(res.id == -1){
          this.regShow = false
        }else{
          this.formAddress = res.nm + '（+'+res.id+'）'
          this.regShow = false
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login {
    // width: 100%;
    height: 100%;
    background: #ffffff;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    width: calc( 100% - 0.4rem );
    margin: 0 auto;
  }
  .login-head {
    width: 100%;
    height: 3.5rem;
    align-items: center;
    display: flex;
    .login-icon {
      width: 1.2rem;
      height: 1.2rem;
      overflow: hidden;
      margin: 0 auto;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 表单
  .form {
    .form-list{
      display: flex;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 0.01rem solid #eee;
      input{
        border: 0;
        height: 0.9rem;
      }
      .form-list-left{
        width: 1.9rem;
      }
    }
  }
  // 向右拖动
  .drag-right{
    text-align: center;
    margin: 0.6rem auto 0 auto;
  }
  // tab
  .tab{
    display: flex;
    margin: .76rem 0 0 0;
    div{
      flex: 1;
      color: #333;
      text-align: center;
    }
  }
  // button
  .sign-button{
    width: 100%;
    height: 1rem;
    text-align: center;
    color: #fff;
    line-height: 1rem;
    border-radius: .1rem;
    box-sizing: border-box;
    font-size: .32rem;
    margin-top: .86rem;
    font-weight: 700;
    outline: none;
    border: 0;
    background: linear-gradient(90deg,red 0,#ff2e5d 100%);
  }
  .sign-button:active{
    background: linear-gradient(90deg,#ff2e5d 0,red 100%);
  }
  .seeText{
    text-align: center;
    margin-top: .4rem;
  }
  // 协议
  .agShows{
    position: absolute;
    top: 0;
    z-index: 999;
    background: #ffffff;
    // width: 100%;
  }
  a{
    color: #333;
  }
</style>
