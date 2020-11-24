    
const funDemo = {

  // 冒泡排序
  maoPao(){
    var array = [5, 4, 3, 2, 1];
    var temp = 0;
    for (var i = 0; i <array.length; i++){
      for (var j = 0; j <array.length - i; j++){
        if (array[j] > array[j + 1]){
          temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;
        }
      }
    }
    console.log(array)
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
  }
  
}

export default funDemo