<template lang="jade">
  -var c = 'loading'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-switch(title="显示", v-model="show1", @on-change="show1change")
      x-switch(title="无提示文字", v-model="show2", @on-change="show2change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    div(transfer-dom)
      loading(:show="show1", :text="text1")
    div(transfer-dom)
      loading(:show="show2", text="")

    div(style="padding: 15px;")
      x-button(@click.native="showLoading", type="primary") 显示loading（2s后关闭）
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br
    div(style="padding: 15px;")
      x-button(@click.native="showDelayLoading", type="primary") 延时5s后显示

    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")


</template>

<script>
  import { Loading, XSwitch, XButton, Group } from "vux";
  export default {
    components: { Loading, XSwitch, XButton, Group },
    data() {
      return {
        tempCode: '',
        show1: false,
        show2: false,
        text1: '加载中'
      }
    },
    methods: {
      showLoading () {
        this.$vux.loading.show({
          text: '加载中'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 2000)
      },
      showDelayLoading () {
        this.$vux.loading.show({
          text: '加载中',
          delay: 5e3
        })
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 10000)
      },
      show1change (val) {
        if (val) {
          tick(0, (percent) => {
            if (percent === 100) {
              this.show1 = false
              return
            }
            this.text1 = `${percent}%`
          })
        }
      },
      show2change (val) {
        if (val) {
          tick(0, (percent) => {
            if (percent === 100) {
              this.show2 = false
              return
            }
          })
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
        this.tempCode = '    group\n' +
          '      x-switch(title="显示", v-model="show1", @on-change="show1change")\n' +
          '      x-switch(title="无提示文字", v-model="show2", @on-change="show2change")\n' +
          '    br\n' +
          '    div(transfer-dom)\n' +
          '      loading(:show="show1", :text="text1")\n' +
          '    div(transfer-dom)\n' +
          '      loading(:show="show2", text="")\n';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    div(style="padding: 15px;")\n' +
          '      x-button(@click.native="showLoading", type="primary") 显示loading（2s后关闭）';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '   div(style="padding: 15px;")\n' +
          '      x-button(@click.native="showDelayLoading", type="primary") 延时5s后显示';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' import { Loading, XSwitch, XButton, Group } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Loading, XSwitch, XButton, Group },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        show1: false,\n' +
          '        show2: false,\n' +
          '        text1: \'加载中\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      showLoading () {\n' +
          '        this.$vux.loading.show({\n' +
          '          text: \'加载中\'\n' +
          '        })\n' +
          '        setTimeout(() => {\n' +
          '          this.$vux.loading.hide()\n' +
          '        }, 2000)\n' +
          '      },\n' +
          '      showDelayLoading () {\n' +
          '        this.$vux.loading.show({\n' +
          '          text: \'加载中\',\n' +
          '          delay: 5e3\n' +
          '        })\n' +
          '        setTimeout(() => {\n' +
          '          this.$vux.loading.hide()\n' +
          '        }, 10000)\n' +
          '      },\n' +
          '      show1change (val) {\n' +
          '        if (val) {\n' +
          '          tick(0, (percent) => {\n' +
          '            if (percent === 100) {\n' +
          '              this.show1 = false\n' +
          '              return\n' +
          '            }\n' +
          '            this.text1 = `${percent}%`\n' +
          '          })\n' +
          '        }\n' +
          '      },\n' +
          '      show2change (val) {\n' +
          '        if (val) {\n' +
          '          tick(0, (percent) => {\n' +
          '            if (percent === 100) {\n' +
          '              this.show2 = false\n' +
          '              return\n' +
          '            }\n' +
          '          })\n' +
          '        }\n' +
          '      },\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      this.timer = setInterval(() => {\n' +
          '        console.log(this.$vux.loading.isVisible())\n' +
          '      }, 1000)\n' +
          '    },\n' +
          '    beforeDestroy () {\n' +
          '      clearInterval(this.timer)\n' +
          '    },\n' +
          '  }\n' +
          '\n' +
          '  function tick (i, cb) {\n' +
          '    setTimeout(function () {\n' +
          '      i++\n' +
          '      cb(i)\n' +
          '      if (i < 100) {\n' +
          '        tick(i, cb)\n' +
          '      }\n' +
          '    }, 10)\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
    mounted () {
      this.timer = setInterval(() => {
        console.log(this.$vux.loading.isVisible())
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
  }

  function tick (i, cb) {
    setTimeout(function () {
      i++
      cb(i)
      if (i < 100) {
        tick(i, cb)
      }
    }, 10)
  }
</script>

<style>
  @c loading {
    @d wrap {

    }
  }
</style>
