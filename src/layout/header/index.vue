<template>
  <div class="headerl">

    {{headerl}}

    <button class="headerl-button" @click="headleButton">退出</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      headerl:'headerl',
    };
  },
  watch:{},
  computed:{},
  created(){},
  methods:{
    headleButton(){
      this.$store.state.userLogin.name = ''
      //删除某个
      localStorage.removeItem('userName');
      //删除所有
      // localStorage.clear();

      this.$router.push({ path: '/login' });
    },
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './index.scss'
</style>
