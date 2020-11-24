<template>
  <div class="popups">
    <popup :img="arrImg" :str="strIng"></popup>
  </div>
</template>

<script>
import popup from '../../components/popup/index'
export default {
  name: 'popups',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arrImg:[1,2],
      strIng:'1',
    }
  },
  components: {
    popup
  },
  created(){},
  methods:{
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
