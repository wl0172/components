<template>
  <div class="demo">
    demo1

    <button @click="button">button</button>

    {{num}}

    <button @click="emit">emit</button>

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

    this.$on('wash_Goods',(arg)=> {
      console.log(arg)

      // moment(new Date()).format('YYYY年MM月DD日 hh时mm分ss秒')
      console.log(moment(new Date()).format('YYYY年MM月DD日 hh时mm分ss秒'))
    })

  },
  methods:{
    // 点击
    button(){
      this.num++
      // 缓存本地数据
      // localStorage.clear();
      // localStorage.setItem("star",1)
      // localStorage.getItem("star")

    },
    emit(){
      this.$emit('wash_Goods',['fish',true,{name:'vue',verison:'2.4'}])
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
