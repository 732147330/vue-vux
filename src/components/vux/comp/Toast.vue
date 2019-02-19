<template lang="jade">
  -var c = 'toast'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="padding:15px;")
      x-button(@click.native="showPosition('top')", type="primary") Top
      x-button(@click.native="showPosition('middle')", type="primary") Middle
      x-button(@click.native="showPosition('bottom')", type="primary") Bottom
      x-button(@click.native="showPosition('')", type="primary") Default

    toast(v-model="showPositionValue", type="text", :time="800", is-show-mask, text="Hello World", :position="position") 基础使用

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group
      x-switch(title="基础使用（显示成功） ", v-model="show1")
      x-switch(title="显示文本", v-model="show2")
      x-switch(title="显示失败", v-model="show3")
      x-switch(title="显示警告", v-model="show4")
      x-switch(title="显示时间1s", v-model="show5")
      x-switch(title="长文本", v-model="show6")

    toast(v-model="show1", @on-hide="onHide") 默认使用（成功了！）
    toast(v-model="show2", type="text") 成功了！
    toast(v-model="show3", type="cancel") 失败了！
    toast(v-model="show4", type="warn") 警告⚠️
    toast(v-model="show5", :time="1000") 只显示1s
    toast(v-model="show6", type="text" width="20em") 这是一段很长，很长，非常长的文本～～～～～

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    group(title="设置text")
      x-switch(title="显示成功", v-model="show7")
      x-switch(title="默认样式", v-model="show8")

    toast(v-model="show7", text="Hello World")
    toast(v-model="show8", type="text", text="Hello World")

    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    group(title="插件形式调用")
      x-switch(title="默认", v-model="show9", @on-change="onChange")

    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    div(style="padding:15px;")
      x-button(type="primary", @click.native="$vux.toast.text('How are you~', 'middle')") 使用文本功能

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
  import { XButton, Toast, Group, XSwitch  } from "vux";
  export default {
    components: {XSwitch, Toast, XButton, Group, XSwitch  },
    methods: {
      showPosition (position) {
        this.position = position
        this.showPositionValue = true
      },
      onHide () {
        console.log('on hide')
      },
      onChange (val) {
        const _this = this
        if (val) {
          this.$vux.toast.show({
            text: 'Hello World',
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              console.log('Plugin: I\'m hiding')
              _this.show9 = false
            }
          })
        } else {
          this.$vux.toast.hide()
        }
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
        this.tempCode = '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="showPosition(\'top\')", type="primary") Top\n' +
          '      x-button(@click.native="showPosition(\'middle\')", type="primary") Middle\n' +
          '      x-button(@click.native="showPosition(\'bottom\')", type="primary") Bottom\n' +
          '      x-button(@click.native="showPosition(\'\')", type="primary") Default\n' +
          '\n' +
          '    toast(v-model="showPositionValue", type="text", :time="800", is-show-mask, text="Hello World", :position="position") 基础使用';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  group\n' +
          '      x-switch(title="基础使用（显示成功） ", v-model="show1")\n' +
          '      x-switch(title="显示文本", v-model="show2")\n' +
          '      x-switch(title="显示失败", v-model="show3")\n' +
          '      x-switch(title="显示警告", v-model="show4")\n' +
          '      x-switch(title="显示时间1s", v-model="show5")\n' +
          '      x-switch(title="长文本", v-model="show6")\n' +
          '\n' +
          '    toast(v-model="show1", @on-hide="onHide") 默认使用（成功了！）\n' +
          '    toast(v-model="show2", type="text") 成功了！\n' +
          '    toast(v-model="show3", type="cancel") 失败了！\n' +
          '    toast(v-model="show4", type="warn") 警告⚠️\n' +
          '    toast(v-model="show5", :time="1000") 只显示1s\n' +
          '    toast(v-model="show6", type="text" width="20em") 这是一段很长，很长，非常长的文本～～～～～';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' group(title="设置text")\n' +
          '      x-switch(title="显示成功", v-model="show7")\n' +
          '      x-switch(title="默认样式", v-model="show8")\n' +
          '\n' +
          '    toast(v-model="show7", text="Hello World")\n' +
          '    toast(v-model="show8", type="text", text="Hello World") ';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' group(title="插件形式调用")\n' +
          '      x-switch(title="默认", v-model="show9", @on-change="onChange") ';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '   div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="$vux.toast.text(\'How are you~\', \'middle\')") 使用文本功能 ';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '  import { XButton, Toast, Group, XSwitch } from \"vux\";\n' +
          '  export default {\n' +
          '    components: {XSwitch, Toast, XButton, Group, XSwitch },\n' +
          '    methods: {\n' +
          '      showPosition (position) {\n' +
          '        this.position = position\n' +
          '        this.showPositionValue = true\n' +
          '      },\n' +
          '      onHide () {\n' +
          '        console.log(\'on hide\')\n' +
          '      },\n' +
          '      onChange (val) {\n' +
          '        const _this = this\n' +
          '        if (val) {\n' +
          '          this.$vux.toast.show({\n' +
          '            text: \'Hello World\',\n' +
          '            onShow () {\n' +
          '              console.log(\'Plugin: I\\\'m showing\')\n' +
          '            },\n' +
          '            onHide () {\n' +
          '              console.log(\'Plugin: I\\\'m hiding\')\n' +
          '              _this.show9 = false\n' +
          '            }\n' +
          '          })\n' +
          '        } else {\n' +
          '          this.$vux.toast.hide()\n' +
          '        }\n' +
          '      },\n' +
          '    },\n' +
          '    data () {\n' +
          '      return {\n' +
          '        show1: false,\n' +
          '        show2: false,\n' +
          '        show3: false,\n' +
          '        show4: false,\n' +
          '        show5: false,\n' +
          '        show6: false,\n' +
          '        show7: false,\n' +
          '        show8: false,\n' +
          '        show9: false,\n' +
          '        position: \'default\',\n' +
          '        showPositionValue: false\n' +
          '      }\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      this.timer = setInterval(() => {\n' +
          '        console.log(this.$vux.toast.isVisible())\n' +
          '      }, 1000)\n' +
          '    },\n' +
          '    beforeDestroy () {\n' +
          '      clearInterval(this.timer)\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
    data () {
      return {
        tempCode: '',
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        position: 'default',
        showPositionValue: false
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        console.log(this.$vux.toast.isVisible())
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>

<style>
  @c toast {
    @d wrap {

    }
  }
</style>
