<template lang="jade">
  -var c = 'confirm'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-switch(title="显示", v-model="show")
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    group
      x-switch(title="显示Prompt", v-model="show3")
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    group
      x-switch(title="设置默认输入文字", v-model="show5")
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    group
      x-switch(title="安卓风格", v-model="show2")
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    group
      x-switch(title="阻止自动关闭", v-model="show4")
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    group
      x-switch(title="隐藏取消按钮", v-model="show6")
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    div(transfer-dom)
      confirm(v-model="show", title="操作提示", @on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")
        p(style="text-align:center;font-size:12px;") 你确定咩？
    br

    div(transfer-dom)
      confirm(v-model="show3", show-input, title="操作提示(只能输入数字)", :input-attrs="{type: 'number'}",@on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")
    br

    div(transfer-dom)
      confirm(v-model="show5", show-input,ref="confirm5", title="操作提示", @on-cancel="onCancel", @on-confirm="onConfirm5", @on-show="onShow5", @on-hide="onHide")
    br

    div(transfer-dom)
      confirm(v-model="show2", title="操作提示",theme="android", @on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")
        p(style="text-align:center;") Holy Shit!
    br

    div(transfer-dom)
    confirm(v-model="show4", :close-on-confirm="false", title="操作提示", @on-confirm="onConfirm4")
      p(style="text-align:center;") 你确定咩？
    br

    div(transfer-dom)
    confirm(v-model="show6", :show-cancel-button="false", title="操作提示", @on-confirm="onConfirm")
      p(style="text-align:center;") 你确定咩？

    div(style="padding:15px;")
      x-button(@click.native="showPlugin" type="primary") 显示
    div(style="padding:15px;")
      x-button(@click.native="showPlugin2" type="primary") 插件形式调用
    div(style="padding:15px;")
      x-button(@click.native="showPlugin3" type="primary") 插件形式调用prompt

    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    x-button(mini, plain, @click.native="copyCode08()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Confirm, XButton, Group, XSwitch } from "vux";
  export default {
    components: { Confirm, XButton, Group, XSwitch },
    data() {
      return {
        tempCode: '',
        show: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false
      }
    },
    methods: {
      onCancel () {
        console.log('on cancel')
      },
      onConfirm (msg) {
        console.log('on confirm')
        if (msg) {
          alert(msg)
        }
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      onShow5 () {
        this.$refs.confirm5.setInputValue('default')
      },
      onConfirm5 (value) {
        this.$refs.confirm5.setInputValue('')
        this.$vux.toast.text('input value: ' + value)
      },
      onConfirm4 () {
        console.log('on confirm')
        this.$vux.loading.show({
          transition: '',
          text: '进行中'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.show4 = false
        }, 1000)
      },
      showPlugin () {
        this.$vux.confirm.show({
          title: 'Title',
          content: 'Content',
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          },
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
            console.log('plugin confirm')
          }
        })
      },
      showPlugin2 () {
        this.showPlugin()
      },
      showPlugin3 () {
        const _this = this
        this.$vux.confirm.prompt('default', {
          title: 'Title',
          onShow () {
            console.log('promt show')
            _this.$vux.confirm.setInputValue('set input value')
          },
          onHide () {
            console.log('prompt hide')
          },
          onCancel () {
            console.log('prompt cancel')
          },
          onConfirm (msg) {
            alert(msg)
          }
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
        this.tempCode = '    group\n' +
          '      x-switch(title="显示", v-model="show")\n' +
          '\n' +
          ' div(transfer-dom)\n' +
          '      confirm(v-model="show", title="操作提示", @on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")\n' +
          '        p(style="text-align:center;font-size:12px;") 你确定咩？';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    group\n' +
          '      x-switch(title="显示Prompt", v-model="show3")\n' +
          '\n' +
          ' div(transfer-dom)\n' +
          '      confirm(v-model="show3", show-input, title="操作提示(只能输入数字)", :input-attrs="{type: \'number\'}",@on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  group\n' +
          '      x-switch(title="设置默认输入文字", v-model="show5")\n' +
          '\n' +
          '  div(transfer-dom)\n' +
          '      confirm(v-model="show5", show-input,ref="confirm5", title="操作提示", @on-cancel="onCancel", @on-confirm="onConfirm5", @on-show="onShow5", @on-hide="onHide")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group\n' +
          '      x-switch(title="安卓风格", v-model="show2")\n' +
          '\n' +
          '    div(transfer-dom)\n' +
          '      confirm(v-model="show2", title="操作提示",theme="android", @on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")\n' +
          '        p(style="text-align:center;") Holy Shit!';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '    group\n' +
          '      x-switch(title="阻止自动关闭", v-model="show4")\n' +
          '\n' +
          '    div(transfer-dom)\n' +
          '    confirm(v-model="show4", :close-on-confirm="false", title="操作提示", @on-confirm="onConfirm4")\n' +
          '      p(style="text-align:center;") 你确定咩？';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '   group\n' +
          '      x-switch(title="隐藏取消按钮", v-model="show6")\n' +
          '\n' +
          '    div(transfer-dom)\n' +
          '    confirm(v-model="show6", :show-cancel-button="false", title="操作提示", @on-confirm="onConfirm")\n' +
          '      p(style="text-align:center;") 你确定咩？';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="showPlugin" type="primary") 显示\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="showPlugin2" type="primary") 插件形式调用\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="showPlugin3" type="primary") 插件形式调用prompt';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '  import { Confirm, XButton, Group, XSwitch } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Confirm, XButton, Group, XSwitch },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        show: false,\n' +
          '        show2: false,\n' +
          '        show3: false,\n' +
          '        show4: false,\n' +
          '        show5: false,\n' +
          '        show6: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onCancel () {\n' +
          '        console.log(\'on cancel\')\n' +
          '      },\n' +
          '      onConfirm (msg) {\n' +
          '        console.log(\'on confirm\')\n' +
          '        if (msg) {\n' +
          '          alert(msg)\n' +
          '        }\n' +
          '      },\n' +
          '      onHide () {\n' +
          '        console.log(\'on hide\')\n' +
          '      },\n' +
          '      onShow () {\n' +
          '        console.log(\'on show\')\n' +
          '      },\n' +
          '      onShow5 () {\n' +
          '        this.$refs.confirm5.setInputValue(\'default\')\n' +
          '      },\n' +
          '      onConfirm5 (value) {\n' +
          '        this.$refs.confirm5.setInputValue(\'\')\n' +
          '        this.$vux.toast.text(\'input value: \' + value)\n' +
          '      },\n' +
          '      onConfirm4 () {\n' +
          '        console.log(\'on confirm\')\n' +
          '        this.$vux.loading.show({\n' +
          '          transition: \'\',\n' +
          '          text: \'进行中\'\n' +
          '        })\n' +
          '        setTimeout(() => {\n' +
          '          this.$vux.loading.hide()\n' +
          '          this.show4 = false\n' +
          '        }, 1000)\n' +
          '      },\n' +
          '      showPlugin () {\n' +
          '        this.$vux.confirm.show({\n' +
          '          title: \'Title\',\n' +
          '          content: \'Content\',\n' +
          '          onShow () {\n' +
          '            console.log(\'plugin show\')\n' +
          '          },\n' +
          '          onHide () {\n' +
          '            console.log(\'plugin hide\')\n' +
          '          },\n' +
          '          onCancel () {\n' +
          '            console.log(\'plugin cancel\')\n' +
          '          },\n' +
          '          onConfirm () {\n' +
          '            console.log(\'plugin confirm\')\n' +
          '          }\n' +
          '        })\n' +
          '      },\n' +
          '      showPlugin2 () {\n' +
          '        this.showPlugin()\n' +
          '      },\n' +
          '      showPlugin3 () {\n' +
          '        const _this = this\n' +
          '        this.$vux.confirm.prompt(\'default\', {\n' +
          '          title: \'Title\',\n' +
          '          onShow () {\n' +
          '            console.log(\'promt show\')\n' +
          '            _this.$vux.confirm.setInputValue(\'set input value\')\n' +
          '          },\n' +
          '          onHide () {\n' +
          '            console.log(\'prompt hide\')\n' +
          '          },\n' +
          '          onCancel () {\n' +
          '            console.log(\'prompt cancel\')\n' +
          '          },\n' +
          '          onConfirm (msg) {\n' +
          '            alert(msg)\n' +
          '          }\n' +
          '        })\n' +
          '      },\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      this.timer = setInterval(() => {\n' +
          '        console.log(this.$vux.confirm.isVisible())\n' +
          '      }, 1000)\n' +
          '    },\n' +
          '    beforeDestroy () {\n' +
          '      clearInterval(this.timer)\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },

    },
    mounted () {
      this.timer = setInterval(() => {
        console.log(this.$vux.confirm.isVisible())
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }

</script>

<style>
  @c confirm {
    @d wrap {

    }
  }
</style>
