<template>
  <div class="weui-uploader__file" :style="style" @click="previewHandler">
    <div class="weui-uploader__remove iconfont icon-guanbi" @click.stop="removeHandler"></div>
  </div>
</template>

<script>

  export default {
    props: {
      removeHandler: {
        type: Function,
        default: () => {
        }
      },
      previewHandler: {
        type: Function,
        default: () => {
        }
      },
      backgroundImage: {
        type: String,
        default: ''
      },
      index: {
        type: Number,
        default: ''
      }
    },
    computed: {
      style() {
        return {
          backgroundImage: `url(${this.backgroundImage})`
        }
      }
    }
  }
</script>
<style>
  .weui-uploader__file {
    position: relative;
  }
  .weui-uploader__remove {
    position: absolute;
    right: 0;
    color: red;
    font-size: 1.2rem;
  }
</style>
