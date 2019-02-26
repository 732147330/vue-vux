<template lang="jade">
  -var c = 'sticky'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    br
    div(class="space-btn", @click="spaceChange") 显示间隔
    div(class="space", v-if="showSpace") 间隔
    div(style="height:44px;")
      sticky(scroll-box="vux_view_box_body", ref="sticky", :offset="46", :check-sticky-support="false", :disabled="disabled")
        tab(:line-width="1")
          tab-item(selected) 正在正映
          tab-item 即将上映
    p(v-for="i in 100") {{i}}
    br

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Tab, TabItem, Sticky, XButton } from 'vux';
  export default {
    components: { Tab, TabItem, Sticky, XButton },
    data() {
      return {
        tempCode: '',
        showSpace: false,
        disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)
      }
    },
    methods: {
      spaceChange () {
        this.showSpace = !this.showSpace
        this.$nextTick(() => {
          this.$refs.sticky.bindSticky()
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
        this.tempCode = '    br\n' +
          '    div(class="space-btn", @click="spaceChange") 显示间隔\n' +
          '    div(class="space", v-if="showSpace") 间隔\n' +
          '    div(style="height:44px;")\n' +
          '      sticky(scroll-box="vux_view_box_body", ref="sticky", :offset="46", :check-sticky-support="false", :disabled="disabled")\n' +
          '        tab(:line-width="1")\n' +
          '          tab-item(selected) 正在正映\n' +
          '          tab-item 即将上映\n' +
          '    p(v-for="i in 100") {{i}}\n' +
          '    br';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { Tab, TabItem, Sticky, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Tab, TabItem, Sticky, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        showSpace: false,\n' +
          '        disabled: typeof navigator !== \'undefined\' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent)\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      spaceChange () {\n' +
          '        this.showSpace = !this.showSpace\n' +
          '        this.$nextTick(() => {\n' +
          '          this.$refs.sticky.bindSticky()\n' +
          '        })\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '   .space-btn {\n' +
          '        padding: 5px 0;\n' +
          '        margin: 10px;\n' +
          '        text-align: center;\n' +
          '        border: 1px red solid;\n' +
          '      }\n' +
          '\n' +
          '      .space {\n' +
          '        padding: 30px 0;\n' +
          '        margin: 10px;\n' +
          '        text-align: center;\n' +
          '        border: 1px green solid;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c sticky {
    @d wrap {
      .space-btn {
        padding: 5px 0;
        margin: 10px;
        text-align: center;
        border: 1px red solid;
      }

      .space {
        padding: 30px 0;
        margin: 10px;
        text-align: center;
        border: 1px green solid;
      }
    }
  }
</style>
