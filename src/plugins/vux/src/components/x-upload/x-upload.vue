<template>
  <div class="weui-cell">
    <div class="weui-cell__bd">
      <div class="weui-uploader">
        <div v-show="showHeader" class="weui-uploader__hd">
          <div class="weui-uploader__title"> {{ title }}</div>
          <div v-show="showHeader && showTip" class="weui-uploader__info">
            {{ images.length }} / {{ max }}
          </div>
        </div>

        <div class="weui-uploader__bd" :class="{small: size === 'small'}">
          <!--<div v-show="!readonly && images.length > 0" class="weui-uploader__input-box remove" @click="remove">
          </div>-->
          <div v-show="!readonly && images.length < max" class="weui-uploader__input-box" @click="add">
            <div class="iconfont icon-xiangji"></div>
            <input v-if="!handleClick" ref="input" class="weui-uploader__input" type="file" accept="image/*" :capture="showCapture">
          </div>
          <x-upload-item v-for="item,index in images" :background-image="item.url" :key="item.url" :removeHandler="remove" :index="index" :previewHandler="previewHandler"/>
          <previewer ref="previewer" v-if="preImages.length" :list="preImages"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import XUploadItem from './x-upload-item.vue'
  import axios from 'axios'
  import {Previewer} from 'vuxs'

  export default {
    props: {
      images: {
        type: Array,
        default: () => []
      },
      preImages: {
        type: Array,
        default: () => []
      },
      max: {
        type: Number,
        default: 1
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      showTip: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '图片上传'
      },
      // 是否接管+号的click事件，如果是，点击不弹出选择文件的框
      handleClick: {
        type: Boolean,
        default: false
      },
      // 选择文件后是否自动上传，如果不是，则emit change事件
      autoUpload: {
        type: Boolean,
        default: true
      },
      uploadUrl: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'normal'
      },
      capture: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: 'img'
      },
      params: {
        type: Object,
        default: null
      }
    },
    components: {XUploadItem, Previewer},
    mounted() {
      const _this = this;
      this.fileInput = this.$refs.input;
      this.fileInput.addEventListener('change', function () {
        let file = this.files[0];
        _this.cutImageBase64(400, 0.8)
      }, false)
    },
    methods: {
      previewHandler(index) {
        this.$refs.previewer.show(0)
      },
      add() {
        if (this.handleClick) {
          this.$emit('add-image')
        } else {
          //console.log(this.images)
        }
      },
      // 移除第一张图
      remove(index) {
        if (this.handleClick) {
          this.$emit('remove-image')
        } else {
          this.images.splice(index, 1);
          this.preImages.splice(index, 1);
          this.fileInput.value = '';
          this.$parent.images = this.images
        }
      },
      preview(image) {
        // 暂未实现，可以捕捉preview事件自己实现
        this.$emit('preview', image)
      },
      /*
     * @param wid压缩后宽度
     * @param quality压缩质量
     * */
      cutImageBase64(wid, quality) {
        var file = this.fileInput.files[0];
        var URL = window.URL || window.webkitURL;
        var blob = URL.createObjectURL(file);
        var base64;
        var img = new Image();
        img.src = blob;
        const _this = this;
        img.onload = function () {
          var that = this;
          //生成比例
          var w = that.width,
            h = that.height,
            scale = w / h;
          w = wid || w;
          h = w / scale;
          //生成canvas
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          $(canvas).attr({
            width: w,
            height: h
          });
          ctx.drawImage(that, 0, 0, w, h);
          // 生成base64
          base64 = canvas.toDataURL('image/jpeg', quality || 0.8);
          //console.log(base64)
          _this.images.push({url: base64});
          _this.$emit('update:images', _this.images);
          _this.preImages.push({msrc: base64, src: base64})
        }
      }
    },
    computed: {
      showCapture() {
        return this.capture || undefined
      }
    }
  }
</script>
<style scoped lang="less">
  @import '~vux/src/styles/weui/widget/weui-uploader/index.less';
  .icon-xiangji {
    font-size: 2rem;
    color: grey;
  }
  .weui-uploader__input-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #cfcfcf;
    img {
      width: 2rem;
    }
    &:before,
    &:after {
      display: none;
    }
  }
  .weui-uploader__bd.small {
    .weui-uploader__input-box {
      margin-right: 5px;
      margin-bottom: 5px;
      width: 58px;
      height: 58px;
    }
    .weui-uploader__file {
      width: 60px;
      height: 60px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
</style>
