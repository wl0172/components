<template>
  <div class="popup">
    <button @click="popupShow = true">popup</button>

    <div class="popup-conter" v-if="popupShow" @click="popupShow = false">
      <div class="popup-conter-margin">111</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'popup',
  data () {
    return {
      popupShow:false,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.popup-conter{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: #66666666;
  .popup-conter-margin{
    width: 50%;
    height: 50%;
    margin: 0 auto;
    position: relative;
    top: 25%;
    text-align: center;
    background: red;
  }
}
</style>
