<template>
  <div class="index">

    <button @click="handleTo">父按钮-传给子组件的值{{demo}}</button>
    <br>
    ----------分割线----------↑
    <br>
    <HelloWorld ref="aaa" :demos="demo" @getValue="getValuess"></HelloWorld>
    ----------分割线----------
    <br>

    <div><button @click="handleDemo">测试</button>{{abcd}}</div>

    <!-- class绑定 -->
    <div>
      <div :class="indexs == index?'a':''" @click="handleClass(index)" v-for="(item,index) in 3" :key="item">1</div>
    </div>
      
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import HelloWorld from "./components/index";
var aa = 1
export default {
  components: {
    HelloWorld
  },
  name: "index",
  data() {
    return {
      demo: 1,
      abcd:"123456789",
      a:1,
      indexs:0
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
  },
  updated(){
console.log(1)
  },
  mounted(){
    // console.log(1)
  },
  methods: {
    handleClass(index){
      this.indexs = index
    },
    handleTo() {
      // this.$router.push("/demo");
      this.demo = ++this.demo
      console.log(this.$refs)
      this.$nextTick(()=>{
        
      })
    },
    getValuess(){
      this.demo = 0
    },
    handleDemo(){
      this.a =!this.a
    }

  }
};
</script>
