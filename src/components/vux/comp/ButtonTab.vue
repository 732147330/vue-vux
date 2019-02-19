<template lang="jade">
  -var c = 'buttonTab'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="padding: 15px;")
      button-tab
        button-tab-item 今天
        button-tab-item(selected) 本周
        button-tab-item 本月
      br
      x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
      divider 使用v-model设置当前选中项
      br
      button-tab(v-model="demo01")
        button-tab-item(@on-item-click="consoleIndex()") 文章
        button-tab-item(@on-item-click="consoleIndex()") 商品
      br
      button-tab(v-model="demo01")
        button-tab-item 文章同步
        button-tab-item 商品同步
      br
      x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
      divider 红点
      br
      button-tab
        button-tab-item(selected) 所有消息
        button-tab-item
          span.vux-reddot-s 新消息
      br
      x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
      x-button(mini, plain, @click.native="copyCode04()") 复制js代码


    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
  import { ButtonTab, ButtonTabItem, Divider, XButton } from 'vux'

  export default {
    components: { ButtonTab, ButtonTabItem, Divider, XButton } ,
    methods: {
      consoleIndex () {
        console.log('click demo01 ', this.demo01)
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
        this.tempCode = ' button-tab\n' +
          '        button-tab-item 今天\n' +
          '        button-tab-item(selected) 本周\n' +
          '        button-tab-item 本月 ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   divider 使用v-model设置当前选中项\n' +
          '      br\n' +
          '      button-tab(v-model="demo01")\n' +
          '        button-tab-item(@on-item-click="consoleIndex()") 文章\n' +
          '        button-tab-item(@on-item-click="consoleIndex()") 商品\n' +
          '      br\n' +
          '      button-tab(v-model="demo01")\n' +
          '        button-tab-item 文章同步\n' +
          '        button-tab-item 商品同步\n' +
          '      br ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  divider 红点\n' +
          '      br\n' +
          '      button-tab\n' +
          '        button-tab-item(selected) 所有消息\n' +
          '        button-tab-item\n' +
          '          span.vux-reddot-s 新消息 ';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  import { ButtonTab, ButtonTabItem, Divider, XButton } from \'vux\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { ButtonTab, ButtonTabItem, Divider, XButton } ,\n' +
          '    methods: {\n' +
          '      consoleIndex () {\n' +
          '        console.log(\'click demo01 \', this.demo01)\n' +
          '      },\n' +
          '    },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        demo01: 0\n' +
          '      }\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
    data() {
      return {
        tempCode: '',
        demo01: 0
      }
    },
  }
</script>

<style>
  @c buttonTab {
    @d wrap {

    }
  }
</style>
