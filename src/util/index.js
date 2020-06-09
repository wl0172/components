/**
 * 
 * @param {*} 时间转换
 */
// 判断月、日、时、分、秒低于10前加0
export function addZero(n) {
  return n < 10 ? "0" + n : n;
}

export function getDate(dt) {
  var year = dt.getFullYear();
  var month = addZero(dt.getMonth() + 1);
  var day = addZero(dt.getDate());
  var honrs = addZero(dt.getHours());
  var minutes = addZero(dt.getMinutes());
  var seconds = addZero(dt.getSeconds());
  // return year + "年" + month + "月" + day + "日" + honrs + "时" + minutes + "分" + seconds + "秒";
  return year + "-" + month + "-" + day + ' ' + honrs + ":" + minutes + ":" + seconds;
}





