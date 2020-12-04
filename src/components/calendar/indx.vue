<template>
  <div class="ljw-popup">

    <van-popup v-bind:class="{ 'timePopup': state == 0 , 'timePopupB' : state == 1 }" v-model="timePopupShow" @click-overlay="cancel">
      <div class="time-tab" v-if="state == 1">
        <div class="time-tab-title" :class="{'time-tab-title-bg':timeTab==0}" @click="chooseTime('star')">
          <p class="time-tab-titleText">开始时间</p>
          <p class="time-tab-titleTime">{{starTime}}</p>
        </div>
        <div class="time-tab-title" :class="{'time-tab-title-bg':timeTab==1}" @click="chooseTime('end')">
          <p class="time-tab-titleText">结束时间</p>
          <p class="time-tab-titleTime">{{endTime}}</p>
        </div>
      </div>
      <van-datetime-picker
        v-if="state == 0"
        type="year-month"
        :show-toolbar="false"
        v-model="currentDate0"
      />
      <van-datetime-picker
        v-if="state == 1"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :show-toolbar="false"
        v-model="currentDate"
        :formatter="formatter"
        @change="changeTime"
      />
      <div class="popupButton">
        <div class="popupButtonNo" @click="cancel">取消</div>
        <div class="popupButtonOk" @click="Determine">确定</div>
      </div>
    </van-popup>

  </div>
</template>

<script>
  import { DatetimePicker,Popup } from 'vant';
  export default {
    components: {
      [DatetimePicker.name]: DatetimePicker,
      [Popup.name]: Popup
    },
    watch:{
      "popupData.timeShow":function(val,old){
        this.timePopupShow = val
        this.state = this.popupData.state
      },
    },
    data() {
      return {
        state:'',
        timeTab:1,
        minDate: new Date((new Date()).getTime()-(365 / 2 * 24 * 3600 * 1000)),
        maxDate: new Date(),
        timePopupShow:false,
        currentDate: '',
        currentDate0: new Date(),
        starTime:null,
        endTime:null
      };
    },
    props: {
      popupData: {
        type: Object,
        // 传过来的数据格式
        timeData:{
          state:0,
          timeShow:false
        }
      }
    },
    created() {
      this.maxDate = new Date(this.popupData.endsTime)
      this.starTime = this.popupData.starTime
      this.endTime = this.popupData.endsTime
      this.currentDate = this.minDate
    },
    methods: {
      // 取消
      cancel(){
        this.$emit('handleClose')
      },
      // 确定
      Determine(){
        if(this.state == 0){
          let year0 = new Date(this.currentDate0).getFullYear()
          let month0 = new Date(this.currentDate0).getMonth() + 1
          this.$emit('handleClose',new Date(String((year0)+'-'+(month0))).getTime())
        }else if(this.state == 1){
          let year = new Date(this.currentDate).getFullYear()
          let month = new Date(this.currentDate).getMonth() + 1
          let day = new Date(this.currentDate).getDate()
          this.$emit('handleClose',new Date(String((year)+'-'+(month)+'-'+(day))).getTime())
        }
        // this.$emit('handleClose',(year+'年'+month+'月'))
        
      },  
      // 选项格式化函数
      formatter(type, val) {
        if (type === 'year') {
          return `${val}年`;
        } else if (type === 'month') {
          return `${val}月`
        } else if (type === 'day') {
          return `${val}日`
        }
        return val;
      },
      // 开始时间-结束时间tab切换
      chooseTime(i){
        if(i == 'star'){
          this.timeTab = 1
        }else if(i == 'end'){
          this.timeTab = 0
        }
      },
      // 开始前半年-当前时间
      isTab(state){
        if(state == 1){
          // 先获取当前知时间
          var curDate = (new Date()).getTime();
          // 将半年的时间单位换算成毫秒
          var halfYear = 365 / 2 * 24 * 3600 * 1000;
          var pastResult = curDate - halfYear;  // 半年前道的时间（毫秒单位）
          // 日期函数，定义起回点为半年前
          var pastDate = new Date(pastResult),
              pastYear = pastDate.getFullYear(),
              pastMonth = pastDate.getMonth() + 1,
              pastDay = pastDate.getDate();

          return (pastYear + '.' + pastMonth + '.' + pastDay)
        }
      },
      // 监听时间
      monitorTime(d){
        let year = new Date(d).getFullYear()
        let month = new Date(d).getMonth() + 1
        let day = new Date(d).getDate()
        if(month < 10){
          month = '0'+month
        }
        if(day < 10){
          day = '0'+day
        }
        return year+'.'+month+'.'+day
      },
      // 日期改变触发
      changeTime(){
        let change = {
          times:this.currentDate,
          timeTab:this.timeTab
        }
        if(this.timeTab == 0){
          // console.log('结束时间')
          this.endTime = this.monitorTime(this.currentDate)
        }else if(this.timeTab == 1){
          // console.log('开始时间')
          this.starTime = this.monitorTime(this.currentDate)
        }
        this.$emit('handleChange',change)
      },
      

    }
  };
</script>
<style lang="scss">
  .ljw-popup .van-picker-column{
    // font-size:0.28rem;
  }
</style>
<style lang="scss" scoped>
  .timePopup{
    width: 5.6rem;
    height: 5.6rem;
    overflow: hidden;
    border-radius: 0.2rem;
  }
  .timePopupB{
    width: 5.6rem;
    height: 6.4rem;
    overflow: hidden;
    border-radius: 0.2rem;
  }
  // tab
  .time-tab{
    width: 100%;
    height: 1.02rem;
    display: flex;
    .time-tab-title{
      width: 50%;
      height: 100%;
      text-align: center;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 0.4rem;
      .time-tab-titleText{
        font-size: .28rem;
      }
      .time-tab-titleTime{
        font-size: .24rem;
      }
    }
    .time-tab-title-bg{
      background: rgb(216, 216, 216);
    }
  }
  // 按钮
  .popupButton{
    width: 100%;
    height: 0.9rem;
    display: flex;
    position: absolute;
    bottom: 0;
    font-size:0.32rem;
    font-weight:400;
    align-items: center;
    justify-content: center;
    color:rgba(51,51,51,1);
    border-top: 0.01rem solid #E5E5E5;
    font-family:PingFangSC-Regular,PingFang SC;
    .popupButtonNo{
      height: 0.9rem;
      width: 100%;
      line-height: 0.9rem;
      text-align: center;
    }
    .popupButtonOk{
      height: 0.9rem;
      width: 100%;
      line-height: 0.9rem;
      text-align: center;
      color: #FFFFFF;
      background:linear-gradient(90deg,rgba(255,0,0,1) 0%,rgba(255,46,93,1) 100%);
    }
  }
  .van-picker-column{
    color: red;
  }
  .van-datetime-picker{
    height: 4.48rem;
    overflow: hidden;
  }
</style>

