<template>
  <div class="login">

    <!-- a:{{a}}
    </br>
    b:{{b}}

    <button @click="handleAdd">++</button> -->
    
    </br>


    <div>用户:{{getUserInfoL.name}}</div>

    <div>
      <div>用户登录</div>
      <div><input type="text" v-model="userLogin.userName"></div>
      <div><input type="text" v-model="userLogin.userPassword"></div>
      <div><button @click="handleUserLogin">登录</button></div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      login:0,
      userLogin:{
        userName:'',
        userPassword:'',
      },
      a:0,
      b:100,
    };
  },
  computed:{
    // vuex数据
    ...mapGetters({
      getUserInfoL:'getUserInfoL'
    }),
  },
  watch:{
    "a":function(n){
      this.b--
    },
    "b":function(n){
      setTimeout(()=>{//异步改变数据，数据双向
        this.a++
      },1000)
    },
  },
  created(){},
  methods:{
    ...mapActions({
      _login:'_login'
    }),
    handleAdd(){
      console.log(this.a)
      this.a++
    },
    // 登录
    handleUserLogin(){
      // console.log(this.userLogin)
      // console.log(this.$store)
      if(this.userLogin.userName && this.userLogin.userPassword){
        this._login().then(res=>{
          // console.log('登录成功')
          // console.log(this.getUserInfoL)

          // this.$store.state.userLogin.name = this.userLogin.userName
          localStorage.setItem('userName', this.userLogin.userName);
          this.$router.push({ path: '/' });

        })
      }else{
        if(!this.userLogin.userName){
          console.log('请输入账号')
          return
        }
        if(!this.userLogin.userPassword){
          console.log('请输入密码')
        }
      }
      // this.$store.commit('')
      // this.$store.dispatch("")
    },
    
  },
  mounted(){}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
