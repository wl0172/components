// vue-js方法中使用过滤器-returnCountDown-方法名
// this.$options.filters['returnCountDown'](10)

const customFilter = {
  //null判断
  returnNullis(value) {
    if (value == null) {
      return '';
    } else {
      return value;
    }
  },
  // 钱（返回结果如：1,234,567,891.00）
  returnMoneySpot(value) {
    if (!value) {
      value = 0
    }
    let transformVal = Number(Math.abs(value)).toFixed(3);
    let decVal = transformVal.substring(transformVal.length - 4, transformVal.length - 1)
    let realVal = transformVal.substring(0, transformVal.length - 4)
    let result = ''
    while (realVal.length > 3) {
      result = ',' + realVal.slice(-3) + result;
      realVal = realVal.slice(0, realVal.length - 3);
    }
    if (realVal) {
      result = realVal + result
    }
    return result + decVal
  },
  // 时间-传时间戳or时间（返回结果如：2020-01-01）
  returnTimeYearMonthDay(value) {
    if (value == null || value == '') {
      value = new Date().getTime()
    }
    let timeStamp = new Date(value).getTime()
    let date = new Date(timeStamp);
    let day = date.getFullYear() + "-" + ((date.getMonth() + 1).toString().padStart(2, '0')) + "-" + ((date.getDate()).toString().padStart(2, '0'));
    return day
  },
  // 倒计时
  returnCountDown(value){
    let countDown = setInterval(() => {
      --value      
      console.log(value)
      if(value<1){
        console.log('倒计时结束')
        clearInterval(countDown)
      }
    }, 1000);
  },
  // 时间戳倒计时30分钟
  returnCountDown_demo(value){
    if(!value){
      value = new Date().getTime()
    }

    let nowtime = new Date();
    let endtime = new Date(value + 1000 * 60 * 1) //new Date(1598855745513)
    let lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);

    let countDown = setInterval(() => {
      let d = String(parseInt(lefttime / (24*60*60))).padStart(2,'0')//天
      let h = String(parseInt(lefttime / (60 * 60) % 24)).padStart(2,'0')//时
      let m = String(parseInt(lefttime / 60 % 60)).padStart(2,'0')//分
      let s = String(parseInt(lefttime % 60)).padStart(2,'0')//秒
      if(lefttime<0 ){
        console.log('超时了')
        clearInterval(countDown)
      }else{
        console.log(d+'天',h+'时',m+'分',s+'秒')
      }
      lefttime--;
    }, 1000);

  },

  // input输入框防抖-截流------
  inputDeBounce(value){
    // console.log(value)
  },

  // 判断数据类型
  isType(){
    // Object.prototype.toString.apply(null).slice(8, -1)
  },
  
}

export default customFilter
