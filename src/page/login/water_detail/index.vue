<template>
  <div class="waterDetail">

    <!-- 导航栏 -->
    <van-nav-bar :fixed="true" title="水柜详情"></van-nav-bar>

    <!-- 详情信息 -->
    <div class="detail">
      <div class="detail-list">
        <div class="detail-icon"><img src="./image/bianji@2x.png" alt=""></div>
        <div class="detail-address-text">樟江东路格林豪泰东门往东正步走10步往北走5步丰巢旁</div>
      </div>
      <div class="detail-list detail-address">
        <div class="detail-icon"><img src="./image/定位(2)@2x.png" alt=""></div>
        <div class="detail-address-text">距您4.5km&#8195;&#8194;|&#8195;&#8194;张江科技领袖之都西区</div>
      </div>
      <div class="detail-list detail-address">
        <div class="detail-address-type">
          <div class="detail-icon"><img src="./image/fenzu@2x.png" alt=""></div>
          <div class="detail-address-text">冲泡型10</div>
        </div>
        <div class="detail-address-type">
          <div class="detail-icon"><img src="./image/kuangquanshui@2x.png" alt=""></div>
          <div class="detail-address-text">冲泡型10</div>
        </div>
        <div class="detail-address-type">
          <div class="detail-icon"><img src="./image/bianji@2x.png" alt=""></div>
          <div class="detail-address-text">冲泡型10</div>
        </div>
      </div>



    </div>

    <!-- 商品title -->
    <div class="goods-title">
      <div class="goods-title-icon"></div>
      <div class="goods-title-text">商品</div>
    </div>

    <!-- 商品列表 -->
    <div style="margin: 0 0 1.6rem 0;">
      <div class="goods-list" v-for="(item,i) in goodsData" @click="handleGoodsList">
        <div class="goods-list-img"><img src="./image/yigui@2x.png" alt=""></div>
        <div class="goods-list-right">
          <div class="goods-list-right-title">{{goodsTitle}}</div>
          <div class="goods-list-right-money">
            <div>
              <span style="font-size:12px;">￥</span>
              <span class="goods-list-right-money-text">1230<span style="font-size: 0.25rem;">&#32;/袋(5L)</span></span>
            </div>
            <div class="goods-list-right-money-button" @click.stop="handleBuys(item)">立即购买</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 立即购买弹窗 -->
    <van-popup v-model="showPopup" position="bottom" :style="{ height: heightPopup }">

      <div class="popup-cont">
        <div class="popup-close"><img src="./image/clear@2x.png" alt="" @click="showPopup=false"></div>
        <div class="popup-cont-top">
          <div class="popup-cont-top-img"><img src="./image/bianji@2x.png" alt=""></div>
          <div class="popup-cont-top-right">
            <div class="popup-cont-top-right-money">
              <span style="font-size:0.2rem">￥</span>
              <span style="font-size:0.34rem;position: relative;right: 14px;">12300<span style="color:#333333;font-size:0.3rem;">&#32;/袋（5L)</span></span>
            </div>
            <div class="popup-cont-top-right-title">当前水柜库存 21</div>
          </div>
        </div>

        <div style="height: calc( 100% - 3.9rem );overflow: auto;">
          <div class="popup-cont-type">
            <div class="popup-cont-type-title">类型</div>
            <div class="popup-cont-type-list">
              <div class="popup-cont-type-list-red" :class="[activeClass == i?'active':'']" v-for="(item,i) in [1,2]" @click="handleTypeClick(1,i)">天热1111</div>
            </div>
          </div>
          <div class="popup-cont-type">
            <div class="popup-cont-type-title">套餐</div>
            <div class="popup-cont-type-list">
              <div class="popup-cont-type-list-red" :class="[activeClassTo == k?'active':'']" v-for="(item,k) in [1,2,3,4]" @click="handleTypeClick(2,k)">天热1111</div>
            </div>
          </div>
        </div>

        <button class="popup-buy-button" @click="handleDetailBuys">购买</button>
      </div>
      
    </van-popup>

















    <!-- 按钮-马杀鸡 -->
    <div class="div-button1" v-if="goodsData.length > 4" @click="handleNavigation"><button>导航到水柜</button></div>


  </div>
</template>

<script>
  import api from "@/api";

  import { NavBar,Popup,Notify } from "vant";

  export default {
    name: "waterDetail",
    components: {
      [NavBar.name]: NavBar,
      [Popup.name]: Popup,
      [Notify.name]:Notify,
    },
    data() {
      return {
        goodsDataItem:'',
        goodsData:[1,2,3,4,5,6],
        showPopup:false,
        heightPopup:'90%',
        activeClass:0,
        activeClassTo:0,



        goodsTitle:'11111111111111111111111111111111111111111111',
      };
    },
    watch: {
      'goodsDataItem':function(val){
        // console.log(val)
        if(val == 1){
          this.heightPopup = '90%'
        }
        if(val == 2){
          this.heightPopup = '70%'
        }
      }
    },
    created() {

      // ?latitude=1&longitude=2&deviceNo=3&channel=scanCodeOffline

      console.log(this.$route.query.latitude)
      console.log(this.$route.query.longitude)
      console.log(this.$route.query.deviceNo)
      console.log(this.$route.query.channel)

      let a = {
        latitude:1,
        longitude:2,
        deviceNo:3,
        channel:'buyOnline'
      }

      // this.handleGetTankDetail(a)

      
    },
    methods: {
      handleGoodsList(){
        this.$router.push("waterTank_buysDetail");
      },
      // 立即购买
      handleBuys(item){
        // console.log(item)
        this.goodsDataItem = item
        this.showPopup = true
      },
      // 弹窗-类型点击
      handleTypeClick(num,i){
        if(num == 1){
          this.activeClass = i
        }
        if(num == 2){
          this.activeClassTo = i
        }
      },
      // 导航到水柜,
      handleNavigation(){
        // Notify({ type: 'primary', message: '导航你麻痹啊' });
        window.location.href = 'https://m.amap.com/navigation/carmap/saddr=121.671645%2C31.144864%2C&daddr=121.948179%2C30.904723%2C'
      },
      // 弹窗购买-跳转
      handleDetailBuys(){
        this.$router.push("waterTank_buysDetail");
      },
      // 获取-水柜详情
      async handleGetTankDetail(param){

        let data = await api.post2("/tank-api/m/device/detail?sid="+window.localStorage.getItem("sid"),param)
        if(data.state == 1){
          console.log(data)
        }else{
          Notify('获取详情失败');
        }

      },
      
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .van-nav-bar .van-icon{
    color: #333333;
  }
  .van-popup{
    border-radius: 0.2rem 0.2rem 0 0;
  }
  .waterDetail{
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #F5F5F5;
    .detail{
      width: 7.1rem;
      background: #ffffff;
      border-radius: 0.1rem;
      margin: 1.2rem auto 0.2rem auto;
      padding: 0 0 0.2rem 0;
      .detail-list{
        display: flex;
        padding: 0.26rem 0.2rem 0 0.3rem;
        .detail-icon{
          width: 0.4rem;
          height: 0.4rem;
          overflow: hidden;
          display: flex;
          margin: 2px 0.2rem 0 0;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .detail-address-text{
          width:5.96rem;
          font-size:0.32rem;
          font-weight:600;
          color:rgba(51,51,51,1);
          line-height:0.44rem;
          word-break: break-all;

          letter-spacing: 0;
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;  /*要显示的行数*/
          -webkit-box-orient: vertical;
        }
      }
      .detail-address{
        padding: 0.1rem 0.2rem 0.1rem 0.3rem;
        .detail-address-text{
          color: #333333;
          font-weight: 400;
          font-size:0.28rem;
        }
        .detail-address-type{
          flex: 1;
          display: flex;
          .detail-address-text{
            color: #333333;
            font-weight: 400;
            font-size: 0.28rem;
            width: auto;
          }
        }
      }
    }
    .goods-title{
      display: flex;
      font-size:0.36rem;
      
      font-weight:400;
      color:rgba(51,51,51,1);
      align-items: center;
      width: 7.1rem;
      margin: 0.2rem auto;
      .goods-title-icon{
        width: 0.14rem;
        height: 0.4rem;
        background: #4B86E6;
        margin: 0 0.2rem 0 0;
      }
    }
    .goods-list{
      width: 7.1rem;
      background: #ffffff;
      border-radius:0.1rem;
      margin: 0.2rem auto;
      padding: 0.3rem 0;
      display: flex;
      .goods-list-img{
        width: 1.6rem;
        height: 1.6rem;
        overflow: hidden;
        background: #F5F5F5;
        margin: 0 0.3rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .goods-list-right{
        .goods-list-right-title{
          width: 4.68rem;
          height: 0.88rem;
          font-size: 0.32rem;
          font-family: PingFangSC-Semibold,PingFang SC;
          font-weight: 600;
          color: #333;
          margin: 0 0 0.26rem 0;
          word-break: break-all;
          line-height: 0.4rem;

          letter-spacing: 0;
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;  /*要显示的行数*/
          -webkit-box-orient: vertical;
        }
        .goods-list-right-money{
          font-size:0.34rem;
          font-weight:600;
          color:rgba(243,52,74,1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .goods-list-right-money-text{
            position: relative;
            right: 5px;
          }
          .goods-list-right-money-button{
            width: 1.4rem;
            height: 0.5rem;
            line-height: 0.5rem;
            color: #ffffff;
            text-align: center;
            font-size: 0.26rem;
            background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,46,93,1) 100%);
            border-radius:0.28rem;
            border:0.02rem solid rgba(227,20,54,1);
          }
        }
      }
    }
    .div-button1{
      position: sticky;
      bottom: 0.4rem;
      text-align: center;
      line-height: 0;
      width: 100%;
      position: fixed;
      button{
        outline: none;
        border: 0;
        font-size:0.32rem;
        color: #ffffff;

        width:6.9rem;
        height:1rem;
        background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,46,93,1) 100%);
        border-radius:0.5rem;
      }
    }
  }
  .popup-cont{
    height: calc( 100% - 0.4rem );
    padding: 0.2rem;
    overflow: hidden;
    .popup-close{
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      display: flex;
      justify-content: flex-end;
      margin: 0 0 0.36rem 0;
      img{
        width: 0.5rem;
        height: 0.5rem;
        overflow: hidden;
      }
    }
    .popup-cont-top{
      display: flex;
      margin: 0 0 0.6rem 0;
      .popup-cont-top-img{
        width: 1.6rem;
        height: 1.6rem;
        overflow: hidden;
        display: flex;
        margin: 0 0.34rem 0 0;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .popup-cont-top-right{
        padding: 0.32rem 0 0 0;
        .popup-cont-top-right-money{
          line-height: 0;
          color:rgba(243,52,74,1);
        }
        .popup-cont-top-right-title{
          color: #333333;
          font-size: 0.28rem;
          height: 0.4rem;
          line-height: 0.4rem;
          margin: 0.4rem 0 0 0;
        }
      }
      
    }
    .popup-cont-type{
      .popup-cont-type-title{
        width:0.64rem;
        height:0.44rem;
        font-size:0.32rem;
        font-weight:600;
        color:rgba(51,51,51,1);
        line-height:0.44rem;
        margin: 0 0 0.2rem 0;
      }
      .popup-cont-type-list{
        font-size: 0.28rem;
       .popup-cont-type-list-red{
          // height: 0.6rem;
          line-height: 0.6rem;
          color: #333333;
          border-radius:0.3rem;
          background:rgba(245,245,245,1);
          text-align: center;
          // width: max-content;
          width: fit-content;
          margin: 0 0 0.2rem 0;
          padding: 0 0.3rem;
       } 
      }
    }
    .popup-buy-button{
      outline: none;
      border: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height:1rem;
      font-size:0.28rem;
      color: #ffffff;
      background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,72,113,1) 100%);
    }
  }
.active{
  color: #ffffff!important;
  background: red!important;
}
</style>

