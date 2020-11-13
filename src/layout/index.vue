<template>
  <div class="Layout">

    
    <el-container>
      <!-- 左侧 -->
      <el-aside width="200px">
        <div class="user">用户admin</div>
        
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            
              <div v-for="(item,index) in routes">
                <el-submenu :index="String(index)" v-if="item.children" :key="index">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>{{item.meta.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item :index="String(index)+'-'+String(_index)" v-for="(_item,_index) in item.children" :key="_index" @click="handleElMenuItemClick(_item)">{{_item.meta.title}}</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item :index="String(index+1)" v-else @click="handleElMenuItemClick(item)">
                  <i class="el-icon-menu"></i>
                  <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
              </div>

          </el-menu>

      </el-aside>
      <!-- Header -->
      <el-container>
        <el-header>
          <headerl></headerl>
        </el-header>
        <!-- main -->
        <el-main>
          <router-view />
        </el-main>
        <!-- Footer -->
        <el-footer>
          <footerl></footerl>
        </el-footer>
      </el-container>
    </el-container>

 
  </div>
</template>

<script>
import headerl from './header/index'
import footerl from './footer/index'
export default {
  name: "Layout",
  data() {
    return {
      newUrl:'',
    };
  },
  components: { footerl,headerl },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    store(){
      return this.$store.state;
    }
    
  },
  beforeCreate: function() {
    // 实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性
    // console.log("BeforeCreate----1");
  },
  beforeMount: function() {
    // 此时已经完成了模板的编译，但是还没有挂载到页面中
    // console.log("BeforeMount----3");
  },
  mounted: function() {
    // 此时，已经将编译好的模板，挂载到了页面指定的容器中显示
    // console.log("Mounted----4");
  },
  beforeUpdate: function() {//运行期间的生命周期函数
    // 状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染DOM节点
    // console.log("BeforeUpdate----5");
  },
  updated: function() {
    // 实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了！
    // console.log("Updated----6");
    document.addEventListener('DOMContentLoaded',()=>{
      // connsole.log('页面加载完毕：'+ location.hash)
    })
    window.onhashchange = (event) =>{
      // console.log(event.oldURL);
      // console.log(event.newURL);
      if(event.newURL.split('#')[1] == '/'){
        this.newUrl = ''
      }else{
        this.newUrl = event.newURL.split('#')[1]
      }
    }
  },
  beforeDestroy: function() {//销毁期间的生命周期函数：
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    // console.log("BeforeDestroy----7");
  },
  destroyed: function() {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 
    // console.log("Destroyed----8");
  },
  created() {
    // 实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
    // console.log("created----2")
    // console.log(this.store)
    // console.log(this.routes);

    
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
      this.newUrl = item.path
      this.$router.push({ path: (item.path) })
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang='scss'>
@import './index.scss'
</style>
