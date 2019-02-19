<template lang="jade">
  -var c = 'alert'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-switch(title="显示", v-model="show")
    div(transfer-dom)
      alert(v-model="show", title="恭喜", @on-show="onShow", @on-hide="onHide") 消息已成功发送
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group(title = "Prop: content")
      x-switch(title="显示", v-model="show2")
    div(transfer-dom)
      alert(v-model="show2", title="恭喜", content="消息已成功发送")
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    group(title = "以插件方式调用")
      cell(title="显示", @click.native="showPlugin", is-link)
      cell(title = "3秒后关闭", @click.native = "showPluginAuto", is-link)
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    group(title = "Use as a module")
      cell(title = "显示", @click.native="showModule", is-link)
      cell(title="3秒后关闭", @click.native="showModuleAuto", is-link)
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
  import { AlertModule, Group, XSwitch, Alert, Cell, XButton } from 'vux'
  export default {
    components: { XSwitch, Alert, Group, Cell, XButton },
    data() {
      return {
        tempCode: '',
        show: false,
        show1: false,
        show2: false
      }
    },
    methods: {
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      showPlugin () {
        this.$vux.alert.show({
          title: 'VUX is Cool',
          content: '同意吗？',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding now')
          }
        })
      },
      showModule () {
        AlertModule.show({
          title: 'VUX is Cool',
          content: '同意吗？',
          onShow () {
            console.log('Module: I\'m showing')
          },
          onHide () {
            console.log('Module: I\'m hiding now')
          }
        })
      },
      showModuleAuto () {
        this.showModule()
        setTimeout(() => {
          AlertModule.hide()
        }, 3000)
      },
      showPluginAuto () {
        this.showPlugin()
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 3000)
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
        this.tempCode = '     group\n' +
          '      x-switch(title="显示", v-model="show")\n' +
          '    div(transfer-dom)\n' +
          '      alert(v-model="show", title="恭喜", @on-show="onShow", @on-hide="onHide") 消息已成功发送 \n' +
          '\n' +
          '<script>\n' +
          '  import { AlertModule, Group, XSwitch, Alert, Cell } from \'vux\'\n' +
          '  export default {\n' +
          '    components: { XSwitch, Alert, Group, Cell },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        show: false,\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onHide () {\n' +
          '        console.log(\'on hide\')\n' +
          '      },\n' +
          '      onShow () {\n' +
          '        console.log(\'on show\')\n' +
          '      },\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      this.timer = setInterval(() => {\n' +
          '        console.log(this.$vux.alert.isVisible())\n' +
          '      }, 1000)\n' +
          '    },\n' +
          '    beforeDestroy () {\n' +
          '      clearInterval(this.timer)\n' +
          '    }\n' +
          '  }\n' +
          '\n' +
          '<\/script>';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  group(title = "Prop: content")\n' +
          '      x-switch(title="显示", v-model="show2")\n' +
          '    div(transfer-dom)\n' +
          '      alert(v-model="show2", title="恭喜", content="消息已成功发送") \n' +
          '\n' +
          '<script>\n' +
          '  import { AlertModule, Group, XSwitch, Alert, Cell } from \'vux\'\n' +
          '  export default {\n' +
          '    components: { XSwitch, Alert, Group, Cell },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        show2: false\n' +
          '      }\n' +
          '    },\n' +
          '  }\n' +
          '\n' +
          '<\/script>';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    group(title = "以插件方式调用")\n' +
          '      cell(title="显示", @click.native="showPlugin", is-link)\n' +
          '      cell(title = "3秒后关闭", @click.native = "showPluginAuto", is-link)\n' +
          '\n' +
          '<script>\n' +
          '  import { AlertModule, Group, XSwitch, Alert, Cell } from \'vux\'\n' +
          '  export default {\n' +
          '    components: { XSwitch, Alert, Group, Cell },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        show: false,\n' +
          '        show1: false,\n' +
          '        show2: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      showPlugin () {\n' +
          '        this.$vux.alert.show({\n' +
          '          title: \'VUX is Cool\',\n' +
          '          content: \'同意吗？\',\n' +
          '          onShow () {\n' +
          '            console.log(\'Plugin: I\\\'m showing\')\n' +
          '          },\n' +
          '          onHide () {\n' +
          '            console.log(\'Plugin: I\\\'m hiding now\')\n' +
          '          }\n' +
          '        })\n' +
          '      },\n' +
          '      showModule () {\n' +
          '        AlertModule.show({\n' +
          '          title: \'VUX is Cool\',\n' +
          '          content: \'同意吗？\',\n' +
          '          onShow () {\n' +
          '            console.log(\'Module: I\\\'m showing\')\n' +
          '          },\n' +
          '          onHide () {\n' +
          '            console.log(\'Module: I\\\'m hiding now\')\n' +
          '          }\n' +
          '        })\n' +
          '      },\n' +
          '      showModuleAuto () {\n' +
          '        this.showModule()\n' +
          '        setTimeout(() => {\n' +
          '          AlertModule.hide()\n' +
          '        }, 3000)\n' +
          '      },\n' +
          '      showPluginAuto () {\n' +
          '        this.showPlugin()\n' +
          '        setTimeout(() => {\n' +
          '          this.$vux.alert.hide()\n' +
          '        }, 3000)\n' +
          '      }\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      this.timer = setInterval(() => {\n' +
          '        console.log(this.$vux.alert.isVisible())\n' +
          '      }, 1000)\n' +
          '    },\n' +
          '    beforeDestroy () {\n' +
          '      clearInterval(this.timer)\n' +
          '    }\n' +
          '  }\n' +
          '\n' +
          '<\/script>';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group(title = "Use as a module")\n' +
          '      cell(title = "显示", @click.native="showModule", is-link)\n' +
          '      cell(title="3秒后关闭", @click.native="showModuleAuto", is-link)\n' +
          '\n' +
          '<script>\n' +
          '  import { AlertModule, Group, XSwitch, Alert, Cell } from \'vux\'\n' +
          '  export default {\n' +
          '    components: { XSwitch, Alert, Group, Cell },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        show: false,\n' +
          '        show1: false,\n' +
          '        show2: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onHide () {\n' +
          '        console.log(\'on hide\')\n' +
          '      },\n' +
          '      onShow () {\n' +
          '        console.log(\'on show\')\n' +
          '      },\n' +
          '      showPlugin () {\n' +
          '        this.$vux.alert.show({\n' +
          '          title: \'VUX is Cool\',\n' +
          '          content: \'同意吗？\',\n' +
          '          onShow () {\n' +
          '            console.log(\'Plugin: I\\\'m showing\')\n' +
          '          },\n' +
          '          onHide () {\n' +
          '            console.log(\'Plugin: I\\\'m hiding now\')\n' +
          '          }\n' +
          '        })\n' +
          '      },\n' +
          '      showModule () {\n' +
          '        AlertModule.show({\n' +
          '          title: \'VUX is Cool\',\n' +
          '          content: \'同意吗？\',\n' +
          '          onShow () {\n' +
          '            console.log(\'Module: I\\\'m showing\')\n' +
          '          },\n' +
          '          onHide () {\n' +
          '            console.log(\'Module: I\\\'m hiding now\')\n' +
          '          }\n' +
          '        })\n' +
          '      },\n' +
          '      showModuleAuto () {\n' +
          '        this.showModule()\n' +
          '        setTimeout(() => {\n' +
          '          AlertModule.hide()\n' +
          '        }, 3000)\n' +
          '      },\n' +
          '      showPluginAuto () {\n' +
          '        this.showPlugin()\n' +
          '        setTimeout(() => {\n' +
          '          this.$vux.alert.hide()\n' +
          '        }, 3000)\n' +
          '      }\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      this.timer = setInterval(() => {\n' +
          '        console.log(this.$vux.alert.isVisible())\n' +
          '      }, 1000)\n' +
          '    },\n' +
          '    beforeDestroy () {\n' +
          '      clearInterval(this.timer)\n' +
          '    }\n' +
          '  }\n' +
          '\n' +
          '<\/script>';
        this.copyCodeMethod();
      },
    },
    mounted () {
      this.timer = setInterval(() => {
        console.log(this.$vux.alert.isVisible())
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }

</script>

<style>
  @c alert {
    @d wrap {

    }
  }
</style>
