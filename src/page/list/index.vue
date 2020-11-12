<template>
  <div class="list">
    
    <button @click="buttonss">111</button>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import stroe from './store/index.js'
export default {
  name: "list",
  data() {
    return {
    };
  },
  watch:{
  },
  computed:{
    ...mapGetters([
      // 'aaa',
    ])
  },
  created(){
    console.log(this)
    // console.log(this.$store.state.count)

  },
  methods:{

    buttonss(){

      // console.log(stroe)

      // console.log(stroe.state.count)

      this.$store.commit('increment')




      // console.log(this.$store.state.count)

      // console.log(this.$store)
    
      // this.$store.commit('increment')
    }
    
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #F0F2F5;
  .list-conter{
    margin: 25px;
    padding: 25px;
    background: #ffffff;
    .active{
      height: 40px;
      overflow: hidden;
    }
    .list-conter-input{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      // justify-content: space-between;
      .list-conter-input-suffix{
        width: 260px;
        display: flex;
        align-items: center;
        margin: 0 20px 20px 0;
        .list-conter-title{
          width: 100px;
        }
      }
    }
    .list-button{
      margin: 50px 0;
      text-align: center;
      button{
        margin: 0 50px;
      }
    }
    .el-pagination{
      display: flex;
      margin: 20px 0 0 0;
      justify-content: flex-end;
    }
  }
}

</style>
