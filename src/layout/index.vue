<template>
  <div class="Layout">

    <el-container class="el-container">

      <!-- 左侧 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

        <div class="Layout-left">
          <el-menu class="el-menu-vertical-demo" 
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64" 
            text-color="#fff" 
            active-text-color="#ffd04b">
            <div class="userInfo">
              <div>头像信息</div>
            </div>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>组件列表</span>
              </template>
              <el-menu-item-group v-for="(item,i) in routes" :key="i">
                <el-menu-item :index="String(i)" @click="handleElMenuItemClick(item)">{{item.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </div>

      </el-aside>
      <!-- 右侧 -->
      <el-container>
        <router-view />
      </el-container>
      
    </el-container>

 
  </div>
</template>

<script>
import getDate from '../util/index.js'
export default {
  name: "Layout",
  data() {
    return {

    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
      // return this.$store.state.user.menuList;
    },
  },
  created() {
    // console.log(this.routes);
    console.log(1)
  },
  methods: {
    // 列表伸
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    // 列表缩
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    // 组件列表点击
    handleElMenuItemClick(item){
      // console.log(item)
      // console.log(item.path)
      // console.log(this.key)
      if(String(item.path) == String(this.key)){
        console.log(1)
        // location.reload()
        return
      }else{
        this.$router.push({ path: (item.path) })
      }
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang='scss'>
@import './index.scss'
</style>
