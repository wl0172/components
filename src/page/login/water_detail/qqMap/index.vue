<template>
  <div class="Map">
    <div id="container"></div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {};
    },
    watch: {},
    created() {
    },
    mounted() {
      this.initMap();
      alert(1)
      //判断是否支持 获取本地位置
      if (navigator.geolocation) {
        var n = navigator.geolocation.getCurrentPosition(function(res){
            console.log(res); // 需要的坐标地址就在res中
            alert(res)
        });
      } else {
          alert('该浏览器不支持定位');
      }



    },
    methods: {
      initMap() {
        //定义地图中心点坐标
        var center = new TMap.LatLng(39.984120, 116.307484)
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = new TMap.Map(document.getElementById('container'), {
          center: center, //设置地图中心点坐标
          // zoom: 17.2, //设置地图缩放级别
          // pitch: 43.5, //设置俯仰角
          // rotation: 45 //设置地图旋转角度
        });
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Map {
    width: 100%;
    height: 100%;
  }
  #container {
    width: 100%;
    height: 100%;
  }
</style>

