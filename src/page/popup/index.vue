<template>
  <div class="popups">
    <popup :img="arrImg" :str="strIng"></popup>
    <button @click="handleButton" ref="buttonA" id="bu">我是父button{{msg}}</button>

    <div @click="handleUl">
      <div class="popupHover" v-for="(item,index) in 5" :data-index="index">{{index}}</div>
    </div>

    <!-- 边框0.5px -->
    <div class="example">0.5px边框</div>
    <!-- 发光盒子 -->
    <div class="txt">欢迎来到Lpyexplore的编程小屋！</div>
    <!-- 盒子缺角动画 -->
    <div class="folding">折叠动画</div>
  </div>
</template>

<script>
import popup from "../../components/popup/index";
export default {
  name: "popups",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arrImg: [1, 2],
      strIng: "1"
    };
  },
  components: {
    popup
  },
  created() {},
  methods: {
    // 父子组件传值
    handleButton() {
      this.$children[0].msg = "this.$children[0].msg";
      // console.log(this.$children[0]);

      // console.log(this.$refs.buttonA.getBoundingClientRect());
    },
    // vue事件委托
    handleUl(ev){
      // console.log(ev)
      let target = ev.target || ev.srcElement;// dom对象
      let index = target.getAttribute('data-index');// 下标

//       console.log(index)
//       if(target.nodeName.toLowerCase() == 'li'){
//         console.log(target.innerHTML);
// 　　　}
    },




  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.popup-conter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: #66666666;
  .popup-conter-margin {
    width: 50%;
    height: 50%;
    margin: 0 auto;
    position: relative;
    top: 25%;
    text-align: center;
    background: red;
  }
}
// 边框0.5px
.example {
  // display: inline-block;
  margin: 10px;
  position: relative;
  width: 100px;
  height: 100px;
}
.example::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  transform: scale(0.5);
  top: -50%;
  left: -50%;
}
// 发光盒子
@keyframes animated-border {
  0% {
    box-shadow: 0 0 0 0 rgba(154, 154, 154, 0.5);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(154, 154, 154, 0);
  }
}
.txt {
  width: 300px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  padding: 15px 20px;
  border: 2px solid red;
  border-radius: 10px;
  animation: animated-border 1.5s infinite;
}
// 盒子缺角动画
@keyframes folding {
  0% {
    transform: rotate3d(1, 1, 0, 180deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  10% {
    transform: rotate3d(1, 1, 0, 160deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  20% {
    transform: rotate3d(1, 1, 0, 140deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  30% {
    transform: rotate3d(1, 1, 0, 120deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  40% {
    transform: rotate3d(1, 1, 0, 100deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  50% {
    transform: rotate3d(1, 1, 0, 80deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  60% {
    transform: rotate3d(1, 1, 0, 60deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  70% {
    transform: rotate3d(1, 1, 0, 40deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  90% {
    transform: rotate3d(1, 1, 0, 20deg);
    box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
  }

  100% {
    transform: rotate3d(1, 1, 0, 0deg);
    box-shadow: 0 0 0 0;
  }
}
.folding {
  // margin: 0 auto;
  position: relative;
  width: 200px;
  height: 80px;
  border-radius: 10px;
  color: #fff;
  line-height: 80px;
  text-align: center;
  background: linear-gradient(-135deg, transparent 1.5em, #58a 0);
  cursor: pointer;
}
.folding:hover:before {
  transform: rotate3d(1, 1, 0, 0deg);
  animation: folding 0.5s ease;
  box-shadow: 0 0 0 0;
  border-bottom-left-radius: inherit;
}
.folding::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(to left bottom, #58a 50%, transparent 50%) 100% 0
    no-repeat;
  width: 2.12134em;
  height: 2.12134em;
  transform: rotate3d(1, 1, 0, 180deg);
  transform-origin: bottom right;
  border-top-right-radius: inherit;
  box-shadow: 0.05em -0.05em 0.1em rgba(0, 0, 0, 0.15);
}
// 事件循环-hover
.popupHover:hover{
  background: red
}
</style>
