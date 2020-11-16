<template>
  <div class="index">

    <button @click="handleTo">父按钮-{{demo}}</button>

    <br>
    ----------分割线----------
    <br>
    <HelloWorld ref="aaa" :demos="demo" @getValue="getValuess"></HelloWorld>
    <br>
    ----------分割线----------
    <br>

    <div>测试{{abcd}}</div>
      
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import HelloWorld from "./components/index";
export default {
  components: {
    HelloWorld
  },
  name: "index",
  data() {
    return {
      demo: 1,
      abcd:null,
    };
  },
  // 计算
  watch: {},
  // 计算
  computed: {},
  created(){
    
    // 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
    // this.$nextTick(()=>{
    //   document.getElementsByClassName('index')[0].innerText = 1
    // })
    setTimeout(() => {
     console.log('created')
     this.abcd = 'created'
    },2000);
  },
  mounted(){
    setTimeout(() => {
     console.log('mounted')
     this.abcd = 'mounted'
    },5000);
  },
  methods: {
    handleTo() {
      // this.$router.push("/demo");
      this.demo = ++this.demo

      console.log(this.$refs)

      this.$nextTick(()=>{
        
      })
    },
    getValuess(){
      this.demo = 0
    }

  }
};
</script>
