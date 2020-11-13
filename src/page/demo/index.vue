<template>
  <div class="demos">
    <demo></demo>
  </div>
</template>

<script>
import demo from '../../components/demo/index'
export default {
  name: "demos",
  data() {
    return {
      demos:0,
    };
  },
  components: { demo },
  computed:{},
  watch:{
  },
  created(){},
  methods:{},
  mounted(){}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
