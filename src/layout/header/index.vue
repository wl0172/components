<template>
  <div class="headerl">

    {{headerl}}

  </div>
</template>

<script>
export default {
  name: "headerl",
  data() {
    return {
      headerl:'headerl',
    };
  },
  watch:{},
  computed:{},
  created(){
  },
  methods:{
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './index.scss'
</style>
