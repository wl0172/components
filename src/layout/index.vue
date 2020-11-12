<template>
  <div class="Layout">

    
    <el-container>
      <!-- 左侧 -->
      <el-aside width="200px">
        <div class="user">1用户</div>
        
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group v-for="(item,index) in routes[0].children" :key="index">
                <el-menu-item :index="String(index)" @click="handleElMenuItemClick(item)">{{item.meta.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>

      </el-aside>
      <!-- Header -->
      <el-container>
        <el-header>Header</el-header>
        <!-- main -->
        <el-main>
          <router-view />
        </el-main>
        <!-- Footer -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>

 
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {

    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    store(){
      return this.$store.state;
    }
    
  },
  created() {
    console.log(this.routes);
    console.log(this.store)
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
      this.$router.push({ path: (item.path) })
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang='scss'>
@import './index.scss'
</style>
