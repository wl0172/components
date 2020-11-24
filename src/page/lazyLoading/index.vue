<template>
  <div class="lazyLoading">

    <div class="image-list">
      <img v-for="(item,index) in 10" :key="item" class="image-item" src="../../assets/image/原型链.png" lazyload="true" data-original="../../assets/image/原型链.png"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "lazyLoading",
  data() {
    return {
      lazyLoading:0,
    };
  },
  computed:{},
  watch:{},
  created(){
    const screenHeight = document.documentElement.clientHeight
    function lazyload() {
      // 获取img标签含有设置data-orignal、lazyload的属性
      var elements = document.querySelectorAll('img[data-original][lazyload]')

      Array.prototype.forEach.call(elements, function (item, index)  {
        var top
        var bottom
        if (item.dataset.original === '') {
          return
        }
        top = item.getBoundingClientRect().top
        bottom = item.getBoundingClientRect().bottom
        // 判断图片是否在可视界面
        if (bottom >= 0 && top < screenHeight) {
          !function () {
            var img = new Image()
            img.src = item.dataset.original
            img.onload = function () {
              item.src = img.src
            }
            item.removeAttribute('data-original')
            item.removeAttribute('lazyload')
          }()
        }
      })
    }

    lazyload()

    document.addEventListener('scroll', lazyload)
  },
  methods:{},
  mounted(){}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-item{
  width: 40%;
  margin-right: 5%;
  height: 400px;
  display: inline-block;
  background-color: grey;
}
.image-list{
  margin-left: 5%;
}
</style>
