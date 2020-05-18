<template>
  <div class="Layout">
    <el-container class="el-container">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <div class="Layout-left">
          <!-- 
            @open="handleOpen"
            @close="handleClose"
          -->
          <el-menu class="el-menu-vertical-demo" :default-active=" activeMenu"background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>

              <el-menu-item-group v-for="(item,i) in routes" :key="i">
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>

            </el-submenu>
            <!-- 测试列表 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航2</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 测试列表 -->
            <el-menu-item index="99">
              <i class="el-icon-setting"></i>
              <span slot="title">导航2</span>
            </el-menu-item>
            <!-- 测试列表 -->
            <el-menu-item index="100">
              <i class="el-icon-setting"></i>
              <span slot="title">导航3</span>
            </el-menu-item>
          </el-menu>





        </div>
      </el-aside>
  
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>

    
    
    <router-view />
  </div>
</template>

<script>

export default {
  name: "Layout",
  computed: {
    key() {
      return this.$route.path;
    }
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
      // return this.$store.state.user.menuList;
    },
    activeMenu() {
      // console.log(0);
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    }
  },
  created() {
    console.log(this.routes);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang='scss'>
@import './index.scss'
</style>
