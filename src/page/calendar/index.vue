<template>
  <div class="demo">
    测试

    <timePopup v-show="timeData.timeShow" :popupData="timeData" @handleClose="handleClose" @handleChange="handleChange"></timePopup>

  </div>
</template>

<script>
export default {
  data() {
    return {
      demo:0,
      timeData:{
        state:1,
        timeShow:false,
        starTime:new Date().getTime(),
        endsTime:new Date().getTime(),
      },
    };
  },
  // 组件注册
  components: {},
  // 计算属性
  computed:{},
  // 数据监听
  watch:{},
  created(){},
  methods:{
    handleCalendar(){
      this.timeData.timeShow = true

      console.log(this.timeData)
    },

    
    // 时间组件确定
    handleClose(i) {

      this.timeData.timeShow = false

    },
    // 日历滚动改变事件
    handleChange(i){

    },
  },
  mounted(){}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
