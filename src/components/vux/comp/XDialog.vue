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
          br
          br
          x-icon(type="ios-close-outline", style="fill:#fff;")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group(style="padding-top: 300px")
      x-switch(v-model="showScrollBox", title="很长很长很长的内容")


    div
      x-dialog(v-model="showScrollBox", class="dialog-demo")
        p(class="dialog-title") 长文本
        div(class="img-box", style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;")
          p(v-for="i in 20") {{i}}
        div(@click="showScrollBox=false")
          span.vux-close

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode04()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

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
      },

      copyCodeMethod () {
        let timer = setInterval( () => {
          var ele = document.getElementById("codeText");
          ele.select();
          document.execCommand("Copy");
          console.log("copy success!!!")
          clearInterval(timer);
        }, 500)
      },
      copyCode01 () {
        this.tempCode = ' group\n' +
          '      x-switch(v-model="show", title="显示")\n' +
          '      x-switch(v-model="show2", title="使用  .sync")\n' +
          '      x-switch(v-model="showToast", title="显示 toast")\n' +
          '      x-switch(v-model="showHideOnBlur", title="点击遮罩层自动关闭")\n' +
          '      x-switch(v-model="showDialogStyle", title="显示", inline-desc="自定义dialog容器样式")\n' +
          '\n' +
          '    div\n' +
          '      x-dialog(v-model="show", class="dialog-demo")\n' +
          '        div.img-box\n' +
          '          img(src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg", style="max-width:100%")\n' +
          '        div(@click="show=false")\n' +
          '          span.vux-close\n' +
          '\n' +
          '    div\n' +
          '      x-dialog(:show.sync="show2", class="dialog-demo")\n' +
          '        div.img-box\n' +
          '          img(src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg", style="max-width:100%")\n' +
          '        div(@click="show2=false")\n' +
          '          span.vux-close\n' +
          '\n' +
          '    div\n' +
          '      x-dialog(v-model="showToast", class="dialog-demo")\n' +
          '        div(style="padding:15px;")\n' +
          '          x-button(@click.native="doShowToast", type="primary") show toast\n' +
          '        div(@click="showToast=false")\n' +
          '          span.vux-close\n' +
          '\n' +
          '    div\n' +
          '      x-dialog(v-model="showHideOnBlur", class="dialog-demo", hide-on-blur)\n' +
          '        div.img-box\n' +
          '         img(src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg", style="max-width:100%")\n' +
          '        div(@click="showHideOnBlur=false")\n' +
          '         span.vux-close\n' +
          '\n' +
          '    div\n' +
          '      x-dialog(v-model="showDialogStyle", hide-on-blur, :dialog-style="{\'max-width\': \'100%\', width: \'100%\', height: \'50%\', \'background-color\': \'transparent\'}")\n' +
          '        p(style="color:#fff;text-align:center;", @click="showDialogStyle = false")\n' +
          '          span(style="font-size:30px;") HELLO WORLD\n' +
          '          br\n' +
          '          br\n' +
          '          x-icon(type="ios-close-outline", style="fill:#fff;")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   group(style="padding-top: 300px")\n' +
          '      x-switch(v-model="showScrollBox", title="很长很长很长的内容")\n' +
          '\n' +
          '\n' +
          '    div\n' +
          '      x-dialog(v-model="showScrollBox", class="dialog-demo")\n' +
          '        p(class="dialog-title") 长文本\n' +
          '        div(class="img-box", style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;")\n' +
          '          p(v-for="i in 20") {{i}}\n' +
          '        div(@click="showScrollBox=false")\n' +
          '          span.vux-close';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  import { Group, XSwitch, XButton, XDialog } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Group, XSwitch, XButton, XDialog },\n' +
          '    methods: {\n' +
          '      doShowToast () {\n' +
          '        this.$vux.toast.show({\n' +
          '          text: \'toast\'\n' +
          '        })\n' +
          '      },\n' +
          '    },\n' +
          '    data () {\n' +
          '      return {\n' +
          '        show: false,\n' +
          '        show2: false,\n' +
          '        showToast: false,\n' +
          '        showHideOnBlur: false,\n' +
          '        showScrollBox: false,\n' +
          '        showDialogStyle: false\n' +
          '      }\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' @import "../../../plugins/vux/src/styles/close.less";\n' +
          '  .weui-dialog  .weui-dialog {\n' +
          '      border-radius: 8px;\n' +
          '      padding-bottom: 8px;\n' +
          '  }\n' +
          '  .weui-dialog  .dialog-title {\n' +
          '      line-height: 30px;\n' +
          '      color: #666;\n' +
          '    }\n' +
          '  .weui-dialog  .img-box {\n' +
          '      height: 350px;\n' +
          '      overflow: hidden;\n' +
          '    }\n' +
          '  .weui-dialog  .vux-close {\n' +
          '      margin-top: 8px;\n' +
          '      margin-bottom: 8px;\n' +
          '    }';
        this.copyCodeMethod();
      },
    },
    data () {
      return {
        tempCode: '',
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
