<template>
  <div class="wangeditor">
    测试wangeditor

    <div id="div1">

    </div>
  </div>
</template>

<script>
import E from "wangeditor";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
export default {
  data() {
    return {
    };
  },
  // 组件注册
  components: {
    quillEditor
  },
  // 计算属性
  computed: {},
  // 数据监听
  watch: {},
  created() {},
  methods: {},
  mounted() {
    const editor = new E("#div1");
    // 或者 const editor = new E( document.getElementById('div1') )
    editor.create();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
