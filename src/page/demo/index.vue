<template>
  <div class="demo">
    demo1

    <button @click="button">button</button>

    {{num}}
  </div>
</template>

<script>
import { getDate } from '../../util/index.js'
export default {
  name: "demo",
  data() {
    return {
      num:0,
    };
  },
  watch:{
  },
  created(){

    

  },
  methods:{
    // 点击
    button(){
      this.num++
      // 缓存本地数据
      // localStorage.clear();
      // localStorage.setItem("star",1)
      // localStorage.getItem("star")

    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
