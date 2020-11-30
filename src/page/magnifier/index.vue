<template>
  <div class="magnifier">


    <div id="demo" ref="demo">
      <div id="small-box" ref="small-box">
        <div id="mark" ref="mark">1</div>
        <div id="float-box" ref="float-box">2</div>
        <img src="./image/macbook-small.jpg" />
        <!-- <img src="../../assets/image/原型链.png" alt="" style="width: 100%;"> -->
      </div>
      <div id="big-box" ref="big-box">
        <img src="./image/macbook-big.jpg" />
        <!-- <img src="../../assets/image/原型链.png" alt=""> -->
      </div>
    </div>

    



  </div>
</template>

<script>
export default {
  name: "magnifier",
  data() {
    return {
      magnifier:0,
    };
  },
  components: {},
  computed:{},
  watch:{
  },
  created(){},
  methods:{},
  mounted(){
    //页面加载完毕后执行
    // window.onload = function () {

      // console.log(this.$refs)


      var objDemo = this.$refs.demo//document.getElementById("demo");
      var objSmallBox = this.$refs['small-box']//document.getElementById("small-box");
      var objMark = this.$refs.mark//document.getElementById("mark");
      var objFloatBox = this.$refs['float-box']//document.getElementById("float-box");
      var objBigBox = this.$refs['big-box']//document.getElementById("big-box");
      var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

      objMark.onmouseover = function () {
        objFloatBox.style.display = "block"
        objBigBox.style.display = "block"
      }

      objMark.onmouseout = function () {
        objFloatBox.style.display = "none"
        objBigBox.style.display = "none"
      }

      objMark.onmousemove = function (ev) {

        var _event = ev || window.event;  //兼容多个浏览器的event参数模式

        var left = _event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
        var top = _event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

        if (left < 0) {
            left = 0;
        } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
            left = objMark.offsetWidth - objFloatBox.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
            top = objMark.offsetHeight - objFloatBox.offsetHeight;

        }

        objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
        objFloatBox.style.top = top + "px";

        var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

        objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
        objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
      }
  // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#demo {
  display: block;
  width: 400px;
  height: 255px;
  margin: 50px;
  position: relative;
  border: 1px solid #ccc;
}

#small-box {
  position: relative;
  z-index: 1;
}

#float-box {
  display: none;
  width: 160px;
  height: 120px;
  position: absolute;
  background: #ffffcc;
  border: 1px solid #ccc;
  filter: alpha(opacity=50);
  opacity: 0.5;
}

#mark {
  position: absolute;
  display: block;
  width: 400px;
  height: 255px;
  background-color: #fff;
  filter: alpha(opacity=0);
  opacity: 0;
  z-index: 10;
}

#big-box {
  display: none;
  position: absolute;
  top: 0;
  left: 460px;
  width: 400px;
  height: 300px;
  overflow: hidden;
  border: 1px solid #ccc;
  z-index: 1;
}
#big-box img {
  position: absolute;
  z-index: 5
}
</style>
