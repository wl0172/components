<template>
  <div class="buysDetail">

    <!-- 导航栏 -->
    <van-nav-bar :fixed="true" title="套餐详情" left-arrow @click-left="onClickLeft"></van-nav-bar>

    <!-- 轮播图 -->
    <div style="padding: 0.88rem 0 0 0;">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../image/clear@2x.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../image/fenzu@2x.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../image/kuangquanshui@2x.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../image/yigui@2x.png" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 详情信息 -->
    <div class="buysDetail-detail">
      <div class="buysDetail-detail-title">
        <span style="font-size:0.32rem;">￥</span>
        <span style="font-size:0.48rem;">3500</span>
        <span style="text-decoration: line-through;font-size:0.2rem;">￥8500</span>
      </div>
      <div class="buysDetail-detail-text1">
        生命灵性天然含钒矿泉水生命灵性天然含钒矿泉水
      </div>
      <div class="buysDetail-detail-text2">
        天赐有机，唯爱有你，生命灵性天然含钒矿泉水，优质生活伴你每天天赐有机，唯爱有你，生命灵性天然含钒矿泉水，优质生活伴你每天
      </div>
    </div>

    <!-- 地址 -->
    <div class="buysDetail-address">
      <div class="buysDetail-address-icon">
        <img src="../image/bianji@2x.png" alt="">
      </div>
      <div class="buysDetail-address-text">樟江东路格林豪泰东门往东正步走10步北走北走5步丰巢旁</div>
      <div class="buysDetail-address-icon" style="bottom: 0;margin-left: 0.2rem;">
        <img src="../image/right-icon.png" alt="">
      </div>
    </div>

    <!-- 类型 -->
    <div class="buysDetail-type">

      <div class="buysDetail-type-1">
        <div class="buysDetail-type-1-title">类型</div>
        <div>
          <div class="buysDetail-type-1-list" :class="[activeClass == i?'active':'']" v-for="(item,i) in [1,2]" @click="handleTypeClick(1,i)">天热1111</div>
        </div>
      </div>

      <div class="buysDetail-type-1">
        <div class="buysDetail-type-1-title">套餐</div>
        <div>
          <div class="buysDetail-type-1-list" :class="[activeClassTo == i?'active':'']" v-for="(item,i) in [1,2]" @click="handleTypeClick(2,i)">天热1111</div>
        </div>
      </div>

    </div>

    <!-- 立即购买按钮 -->
    <button class="buysButton" @click="handleBuysButton">立即购买</button>


  </div>
</template>

<script>
  import { NavBar,Popup,Notify,Swipe, SwipeItem } from "vant";

  export default {
    name: "buysDetail",
    components: {
      [NavBar.name]: NavBar,
      [Popup.name]: Popup,
      [Notify.name]:Notify,
      [Swipe.name]: Swipe,
      [SwipeItem.name]:SwipeItem,
    },
    data() {
      return {
        activeClass:0,
        activeClassTo:0,
      };
    },
    watch: {
      
    },
    created() {
      
    },
    methods: {
      // 返回上一页
      onClickLeft(){
        window.history.back(-1);
      },
      // 类型-套餐点击
      handleTypeClick(num,i){
        if(num == 1){
          this.activeClass = i
        }
        if(num == 2){
          this.activeClassTo = i
        }
      },
      // 立即购买
      handleBuysButton(){
        Notify({ type: 'primary', message: '立即购买' });
      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .van-nav-bar .van-icon{
    color: #333333;
  }
  .van-swipe{
    height: 7.5rem;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
    img{
      width: 100%;
      height: 100%;
    }
  }
  // 主体
  .buysDetail{
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #F5F5F5;
    .buysDetail-detail{
      padding: 0.3rem;
      background: #ffffff;
      margin: 0 0 0.2rem 0;
      .buysDetail-detail-title{
        font-weight:400;
        color:rgba(243,52,74,1);
        display: flex;
        align-items: center;
        span{
          display: block;
        }
      }
      .buysDetail-detail-text1{
        font-size:0.32rem;
        font-weight:600;
        color:rgba(51,51,51,1);
      }
      .buysDetail-detail-text2{
        font-size:0.28rem;
        font-weight:400;
        color:rgba(102,102,102,1);
      }
    }
    .buysDetail-address{
      display: flex;
      align-items: center;
      padding: 0.3rem;
      background: #ffffff;
      margin: 0 0 0.2rem 0;
      .buysDetail-address-icon{
        width: 0.4rem;
        height: 0.4rem;
        overflow: hidden;
        display: flex;
        margin: 0 0.26rem 0 0;
        position: relative;
        bottom: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .buysDetail-address-text{
        width: 5.8rem;
        font-size:0.32rem;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        word-break: break-all;

        letter-spacing: 0;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;  /*要显示的行数*/
        -webkit-box-orient: vertical;

        line-height: 1.5;
      }
    }
    .buysDetail-type{
      padding: 0.3rem;
      background: #ffffff;
      .buysDetail-type-1{
        .buysDetail-type-1-title{
          font-size:0.32rem;
          font-weight:600;
          color:rgba(51,51,51,1);
          margin: 0 0 0.2rem 0;
        }
      }
      .buysDetail-type-1-list{
        font-size:0.28rem;
        // height: 0.6rem;
        line-height: 0.6rem;
        color: #333333;
        border-radius:0.3rem;
        background:rgba(245,245,245,1);
        text-align: center;
        width: max-content;
        width: fit-content;
        margin: 0 0 0.2rem 0;
        padding: 0 0.3rem;
      }
      
    }
    .buysButton{
      width: 100%;
      outline: none;
      border: 0;
      height:1rem;
      background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,72,113,1) 100%);


      font-size:0.28rem;
      font-weight:600;
      color:rgba(255,255,255,1);
    }
  }
  .active{
    color: #ffffff!important;
    background: red!important;
  }
</style>

