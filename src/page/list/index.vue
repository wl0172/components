<template>
  <div class="index">

    <button @click="handleTo">父按钮-{{demo}}</button>

    <br>
    ----------分割线----------
    <br>
    <span>子组件</span><HelloWorld :demos="demo" @getValue="getValuess"></HelloWorld>
    <br>
    ----------分割线----------
    <br>

      
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
    };
  },
  // 计算
  watch: {},
  // 计算
  computed: {
    
  },
  methods: {
    handleTo() {
      // this.$router.push("/demo");
      this.demo = ++this.demo
    },
    getValuess(){
      console.log(1)
      this.demo = 0
    }

  }
};
</script>
