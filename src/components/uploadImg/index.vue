<template>
  <div class="upload">

    <!-- 图片 -->
    <div class="upload-img">
      <img :src="imgSrc" :onerror="errImgSrc" alt="图片" @click="bigShowImg=true">
    </div>

    <!-- 上传按钮 -->
    <div class="buttonImg" @click="bigShowImg=false">
      <!-- accept:指示file类型，没有时表示不限制类型，填入格式后选择文件时只能看见被允许的文件 -->
      <!-- accept="image/gif, image/jpeg, image/jpg, image/png, image/svg" -->

      <!-- multiple：Boolean ，指示用户能否多个输入，type为email或file时生效 -->
      <input
        class="buttonUpload buttonInput"
        ref="input"
        type="file"
        multiple="multiple"
        @change="handleFileChange" />

      <button class="buttonUpload buttonDiv">上传图片</button>
    </div>

    <!-- 放大图片 -->
    <div v-if="bigShowImg" @click="bigShowImg=false">
      <img :src="imgSrc" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      upload:0,
      imgSrc:'',
      bigShowImg:false,
      errImgSrc: 'this.src="' + require('../../assets/logo.png') + '"',
    };
  },
  computed:{},
  watch:{},
  created(){
    this.$nextTick(() => {
      // console.log(this.$refs)
    })
  },
  methods:{
    // 上传图片
    handleFileChange(e){
      let file = e.target.files[0]
      // console.log(file)

      //  每个 file 对象包含了下列信息: 
      // name: 文件名.
      // lastModified: UNIX timestamp 形式的最后修改时间.
      // lastModifiedDate: Date 形式的最后修改时间.
      // size: 文件的字节大小.
      // type: 文件类型.

      // 转化为base64
      let reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = function (res) {
      //   let base = res.target.result
      // }

      // 获取/限制图片尺寸
      let myimg = URL.createObjectURL(file);
      let img = new Image();
      img.src = myimg;

      img.onload = function () {
        // if (img.width !== 860 && img.height !== 450) {
        //   alert("只能上传860*450px的图片！");
        // } else {
        //   // 操作……
        //   // 还可以根据file.type判断类型，根据file.size限制判断字节,1M = 1024 * 1024
        //   const formdata = new FormData()
        //   formdata.append('file', file)
        //   // 调接口，data为formdata
        // }
      }

      this.imgSrc = img.src

      // 获取视频第一帧
      // let dataURL = "";
      // let video = $(".empty_box_video video").get(0);
      // $(".empty_box_video video").attr("crossOrigin", "anonymous"); //处理跨域
      // video.addEventListener("loadeddata", function () {
      //     setTimeout(() => {
      //         let canvas = document.createElement("canvas");
      //         canvas.width = 400;
      //         canvas.height = 300;
      //         canvas.getContext("2d").drawImage(video, 0, 0, 400, 300); //绘制canvas
      //         dataURL = canvas.toDataURL(); // 第一帧url,转换为base64
      //         $('#aaa').attr("src", dataURL);
      //     }, 2000);
      // });

    }
  },
  mounted(){}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.upload{
  width: 500px;
}
.upload-img{
  width: 200px;
  height: 200px;
  margin: 0 auto;
  img{
    width: 100%;
    height: 100%;
  }
}
.buttonImg{
  width: 100px;
  height: 50px;
  position: relative;
  margin: 0 auto;
  .buttonUpload{
    width: 100%;
    height: 100%;
  }
  .buttonInput{
    opacity: 0;
    z-index: 999;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .buttonDiv{
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50px;
  }
}

</style>
