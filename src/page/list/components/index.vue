<template>
  <div class="HelloWorld">
    我是子组件
<!-- 
    <slot></slot>
    <slot name="header"></slot>
    <slot name="footer"></slot> -->

    <!-- <img :src="buildImagePath(userInformation.headImg,'PD750') || ''" :onerror="imgSrc" /> -->

    <div ><span>测试(自定义指令全局-v-money)：</span><span v-money>{{money}}</span></div>
    <div v-moneyChange>{{money}}</div>
    <br>
    <button @click="handleButton_mapActions">按钮操作mapActions Vuex:{{aaaa}}</button>

    <button @click="handleButton">父传过来的值：{{demos}}</button>



  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      money: '1',
      // imgSrc: 'this.src="' + require('./img/touxiang.png') + '"',
    };
  },
  // 子组件接受传参
  props:{
    demos:Number,
    
  },
  // 局部指令
  directives:{
    // 指令的定义
    'moneyChange':{
      // bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      bind(el,binding){},
      // inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
      inserted(el,binding){
        // console.log(el,binding)
        el.innerHTML = el.innerHTML + '0'
      },
      // update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
      update(el,binding){},
    }
  },
  computed:{
    ...mapGetters({
      aaaa:'getChangedNum'
    }),
  },
  watch:{
    'demos':function(i,ii){
      if(i == 5){
        this.$emit("getValue")
      }
    }
  },

  beforeCreate: function() {
    // console.log("BeforeCreate----1");
  },
  created: function() {
    // debugger

    // console.log("Created----2");
    // this.$options.filters['returnCountDown_demo'](1599040076077)//使用过滤器中的方法


    // 防抖
    // function input(value) {
    //   console.log(`输入的内容${value}`)
    // }
    // const ipt = document.getElementById('input')

    // function debounce(fun,delay){
    //   let timer ;
    //   return function(args){
    //       const that = this
    //       clearTimeout(timer)
    //       timer = setTimeout(function(){
    //           fun.call(that,args)
    //       },delay)
    //     }
    //   }
    // const debounceInput = debounce(input,500)
    // ipt.addEventListener("keyup",function(e){
    //   debounceInput(e.target.value)
    // })


  },
  beforeMount: function() {
    // debugger
    // console.log("BeforeMount----3");
  },
  mounted: function() {
    // debugger
    // console.log("Mounted----4");
  },
  beforeUpdate: function() {
    // debugger
    // console.log("BeforeUpdate----5");
  },
  updated: function() {
    // debugger
    // console.log("Updated----6");
  },
  beforeDestroy: function() {
    // debugger
    // console.log("BeforeDestroy----7");
  },
  destroyed: function() {
    // debugger
    // console.log("Destroyed----8");
  },
  methods:{
    
    // vuex-mapActions数字++
    handleButton_mapActions(){
      this.$store.commit('newNum',10)
    },
    handleButton(e){
      this.$emit("getValue")
    }
  }
};
</script>

<style lang="scss" scoped>
.HelloWorld{
  background: red;
  width: 100%;
  height: 100%;
}
</style>
