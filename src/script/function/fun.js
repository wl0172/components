    
const funDemo = {

  // 防抖节流案列
  // window.addEventListener('scroll', debounce(aa, 2000));
  // aa(){
  //   console.log(1)
  // },
  // 防抖
  debounce(fn,time){
    let timer = null
    return function(){
      if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(fn,time)
    }
  },
  //节流
  throttle(fn, time) {
    let timer;
    return function() {
      if (timer) return;
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null;
        fn();
      }, time);
    }
  },
  // 冒泡排序
  maoPao(){
    let array = [5, 4, 3, 2, 1];
    let temp = 0;
    for (let i = 0; i <array.length; i++){
      for (let j = 0; j <array.length - i; j++){
        if (array[j] > array[j + 1]){
          temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
        }
      }
    }
    console.log(array)
  },
  arrSort(arr){
    let arr = [1, 2, 8598, 21, 8974, 12, 963, 125, 10]
    let result = arr.sort((a, b) => a - b) //升序
    let result = arr.sort((a, b) => b - a) //降序
    console.log(result)
  },
  // 降维数组-递归
  reduceDimension(arr){
    let ret = [];
    let toArr = function(arr){
    arr.forEach(function(item){
        item instanceof Array ? toArr(item) : ret.push(item);
      });
    }
    toArr(arr);
    return ret;
  },
  // 判断数据类型
  toRawType (value) {
    return Object.prototype.toString.call(value).slice(8, -1)
  },
  // 数组去重-1
  unique(arr){
    if(!Array.isArray(arr)){
      console.log('不是数组')
      return
    }
    return Array.from(new Set(arr))
  },
  // 数组去重-2-splice
  unique2(arr){
    if(!Array.isArray(arr)){
      console.log('不是数组')
      return
    }
    for(let i = 0;i<arr.length;i++){
      for(let j = i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
          arr.splice(j,1)
          j--
        }
      }
    }
    return arr
  },
  // 数组去重-3-indexOf
  unique3(arr){
    if(!Array.isArray(arr)){
      console.log('不是数组')
      return
    }
    let array = []
    for(let i = 0;i<arr.length;i++){
      if(array.indexOf(arr[i]) === -1){
        array.push(arr[i])
      }
    }
    return array
  },
  // 数组去重-4-sort
  unique4(arr){
    if(!Array.isArray(arr)){
      console.log('不是数组')
      return
    }
    arr = arr.sort()
    let arrray = [arr[0]];
    for(let i = 0;i<arr.length;i++){
      if(arr[i] !== arr[i-1]){
        arrray.push(arr[i])
      }
    }
    arrray.shift()
    return arrray
  },
  // 判断元素是否在可是区域
  isShowTop(dom){

    // 当前屏幕可视区域高度
    document.documentElement.clientHeight || document.body.clientHeight;

    // {
    //   bottom: 132
    //   height: 27
    //   left: 200
    //   right: 510.671875
    //   top: 105
    //   width: 310.671875
    //   x: 200
    //   y: 105
    // }
    let domObj = dom.getBoundingClientRect()
    
    let showDomTop = (domObj.top - domObj.height).toFixed(2)

    if(showDomTop <= (document.documentElement.clientHeight || document.body.clientHeight)){
      return '元素在可视区域内'
    }else{
      return '元素不在可视区域内'
    }

    // 设置滚动条位置
    // document.documentElement.scrollTop = 111
    // window.scroll(0, 0);
    // window.scrollTo(0,0); 
  },
  // 判断两个日期相隔多少天
  daysBetween(sDate1,sDate2){
    //Date.parse() 解析一个日期时间字符串，并返回1970/1/1 午夜距离该日期时间的毫秒数
    var time1 = Date.parse(new Date(sDate1));
    var time2 = Date.parse(new Date(sDate2));
    var nDays = Math.abs(parseInt((time2 - time1)/1000/3600/24));
    return nDays;
  },



  // 复制
  copy(item){
    let item = 123
    document.execCommand(item)
    let Url2 = item
    let oInput = document.createElement('input');
    oInput.value = Url2;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
  },
  // 到达底部事件
  windowbBttom(){
    window.onscroll = function(){
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
        if(scrollTop+windowHeight == scrollHeight){
        //到了这个就可以进行业务逻辑加载后台数据了
        console.log("到了底部");
      }
    }
  }










}

export default funDemo