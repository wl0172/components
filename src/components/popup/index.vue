<template>
  <div class="popup">
    
    <!-- 数组展示图片 -->
    <div v-if="img.length">
      <button @click="handlePopup(),popupShow = true">我是popup</button>
      <div class="popup-conter" v-if="popupShow" @click="popupShow = false">
        <div class="popup-conter-margin">
          <div class="popuo-image">
            <img src="@/assets/image/原型链.png" alt="">
          </div>
        </div>
      </div>
    </div>


    <!--  -->
    <div v-if="str">
      <div>{{msg}}</div>
    </div>




  </div>
</template>

<script>
export default {
  data () {
    return {
      popupShow:false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:{
    img:{
      type:Array,
      default:[],
    },
    str:{
      type:String,
      default:'',
    }
  },
  created(){
    // console.log(this.img)
    // console.log(this.str)
  },
  methods:{
    handlePopup(){
      this.$parent.msg = 'this.$parent.msg'
      console.log(this.$parent)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.popup-conter{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: #66666666;
  .popup-conter-margin{
    width: 50%;
    height: 50%;
    margin: 0 auto;
    position: relative;
    top: 25%;
    text-align: center;
  }
  .popuo-image{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
