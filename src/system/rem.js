function setRem() {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.getElementsByTagName('html')[0];
  // iphone 6 尺寸 10 的比例进行
  htmlDom.style.fontSize = (htmlWidth *2) / 15 + 'px';
}
setRem();
window.onresize = function () {
  setRem()
}






