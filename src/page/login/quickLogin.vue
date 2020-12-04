<template>
  <div class="quickLogin">

    <van-nav-bar title="快速登录" left-arrow @click-left="onClickLeft"/>

    <!-- form -->
    <div class="form">
      <div class="form-list" @click="regShow = true">
        <div class="form-list-left">国家/地区</div>
        <div>{{formAddress}}</div>
      </div>
      <div class="form-list">
        <div class="form-list-left">手机号</div>
        <div><input maxlength="11" type="text" placeholder="请输入手机号" v-model="form.phono"></div>
      </div>
      <div class="form-list" style="justify-content: space-between;">
        <div><input type="text" maxlength="4" placeholder="请输入验证码" v-model="form.password"></div>
        <div @click="handleCode" class="form-list-left" style="width: auto;">{{getCodeNum}}<span v-if="Number(getCodeNum)">秒后重新获取</span></div>
      </div>
      
    </div>
    <!-- 点击查看协议 -->
    <div class="seeText">
      <van-checkbox v-model="checked" shape="square">
        <span class="xieyi">我同意并阅读<span>《会员注册协议》</span>和<span @click="agShow = true">《隐私政策》</span></span>
      </van-checkbox>
    </div>
    <div class="agreement-hint">
    	<p>提示：未注册过的手机号登录时将自动注册</p>
    </div>
    <!-- 立即登录 -->
    <button class="sign-button" @click.stop="handleLogin">验证并登陆</button>
    <!-- 会员注册协议 -->
    <!-- <ag class="agShows" v-if="agShow" :s="agShow" @handleClose="handleClose"></ag> -->
    <!-- 隐私政策 -->
    <ag class="agShows" v-if="agShow" :s="agShow" @handleClose="handleClose"></ag>
    <!-- 国家/地区 -->
    <reg class="agShows" v-if="regShow" :s="regShow" @handleCloseReg="handleCloseReg"></reg>
    
  </div>
</template>

<script>
  import {
    Popup,
    Checkbox
  } from "vant";
  import ag from './agree/agreement.vue'
  import reg from './region.vue'
  export default {
    components: {
      [Popup.name]: Popup,
      [Checkbox.name]:Checkbox,
      ag,
      reg
    },
    data() {
      return {
        checked: true,
        form: {
          country: '国家地区',
          phono: '',
          password: '',
        },
        agShow:false,
        regShow:false,
        formAddress:'中国（+86）',
        getCodeNum:'获取验证码',
        countState:true,
      };
    },
    watch: {},
    created() {
      if (localStorage.loginName) {
        this.form.phono = localStorage.loginName.replace(/^(...)(....)/g, "$1 $2 ")
      }
    },
    methods: {
      onClickLeft(){
        history.back()
      },
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
      },
      handleCode(){
        if(this.countState){
          this.countState = false
          this.getCodeNum = 3
          var timer = setInterval(() => {
            if (this.getCodeNum > 0) {
              this.getCodeNum--;
              if(this.getCodeNum == 0){
                this.countState = true
                this.getCodeNum = '获取验证码'
                clearTimeout(timer);
              }
            } else {
              this.countState = true
              this.getCodeNum = '获取验证码'
              clearTimeout(timer);
            }
          }, 1000);
        }
        
      },
      handleLogin(){
        console.log(this.form)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .quickLogin {
    // width: 100%;
    height: 100%;
    background: #ffffff;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    .van-checkbox{
      display: flex;
      font-size: .3rem;
      .xieyi{
        position: relative;
        top: 2px;
      }
    }
  }
  // 表单
  .form {
    padding: 1.02rem 0.2rem 0 0.2rem;
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
  }
  a{
    color: #333;
  }
</style>
