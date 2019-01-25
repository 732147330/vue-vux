<template lang="jade">
  -var c = 'xDialog'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-switch(v-model="show", title="显示")
      x-switch(v-model="show2", title="使用  .sync")
      x-switch(v-model="showToast", title="显示 toast")
      x-switch(v-model="showHideOnBlur", title="点击遮罩层自动关闭")
      x-switch(v-model="showDialogStyle", title="显示", inline-desc="自定义dialog容器样式")

    div
      x-dialog(v-model="show", class="dialog-demo")
        div.img-box
          img(src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg", style="max-width:100%")
        div(@click="show=false")
          span.vux-close

    div
      x-dialog(:show.sync="show2", class="dialog-demo")
        div.img-box
          img(src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg", style="max-width:100%")
        div(@click="show2=false")
          span.vux-close

    div
      x-dialog(v-model="showToast", class="dialog-demo")
        div(style="padding:15px;")
          x-button(@click.native="doShowToast", type="primary") show toast
        div(@click="showToast=false")
          span.vux-close

    div
      x-dialog(v-model="showHideOnBlur", class="dialog-demo", hide-on-blur)
        div.img-box
         img(src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg", style="max-width:100%")
        div(@click="showHideOnBlur=false")
         span.vux-close

    div
      x-dialog(v-model="showDialogStyle", hide-on-blur, :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}")
        p(style="color:#fff;text-align:center;", @click="showDialogStyle = false")
          span(style="font-size:30px;") HELLO WORLD
          <br>
          <br>
          x-icon(type="ios-close-outline", style="fill:#fff;")

    group(style="padding-top: 300px")
      x-switch(v-model="showScrollBox", title="很长很长很长的内容")


    div
      x-dialog(v-model="showScrollBox", class="dialog-demo")
        p(class="dialog-title") 长文本
        div(class="img-box", style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;")
          p(v-for="i in 20") {{i}}
        div(@click="showScrollBox=false")
          span.vux-close


</template>

<script>
  import { Group, XSwitch, XButton, XDialog } from "vux";
  export default {
    components: { Group, XSwitch, XButton, XDialog },
    methods: {
      doShowToast () {
        this.$vux.toast.show({
          text: 'toast'
        })
      }
    },
    data () {
      return {
        show: false,
        show2: false,
        showToast: false,
        showHideOnBlur: false,
        showScrollBox: false,
        showDialogStyle: false
      }
    }
  }

</script>

<style>
  @import "../../../plugins/vux/src/styles/close.less";
  @c xDialog {
    @d wrap {
    }
  }
  .weui-dialog  .weui-dialog {
      border-radius: 8px;
      padding-bottom: 8px;
  }
  .weui-dialog  .dialog-title {
      line-height: 30px;
      color: #666;
    }
  .weui-dialog  .img-box {
      height: 350px;
      overflow: hidden;
    }
  .weui-dialog  .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
</style>
