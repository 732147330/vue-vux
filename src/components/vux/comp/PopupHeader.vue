<template lang="jade">
  -var c = 'popupHeader'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    popup-header(left-text="取消", right-text="确定", title="请选择银行卡")
    group
      x-switch(v-model="show1", title="Popup中使用")

    div(class="cards")
      popup(v-model="show1")
        popup-header(left-text="取消", right-text="确定", title="请选择银行卡", :show-bottom-border="false", @on-click-left="show1 = false", @on-click-right="show1 = false")
        group(gutter="0")
          radio(:options="cards")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { PopupHeader, Popup, Radio, Group, XSwitch, XButton } from "vux";
  export default {
    components: { Popup, PopupHeader, Radio, Group, XSwitch, XButton },
    data() {
      return {
        tempCode: '',
        cards: ['招商银行','工商银行','农业银行','增加银行卡'],
        show1: false,
      }
    },
    methods: {
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
        this.tempCode = '    popup-header(left-text="取消", right-text="确定", title="请选择银行卡")\n' +
          '    group\n' +
          '      x-switch(v-model="show1", title="Popup中使用")\n' +
          '\n' +
          '    div(class="cards")\n' +
          '      popup(v-model="show1")\n' +
          '        popup-header(left-text="取消", right-text="确定", title="请选择银行卡", :show-bottom-border="false", @on-click-left="show1 = false", @on-click-right="show1 = false")\n' +
          '        group(gutter="0")\n' +
          '          radio(:options="cards")\n';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = 'import { PopupHeader, Popup, Radio, Group, XSwitch } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Popup, PopupHeader, Radio, Group, XSwitch },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        cards: [\'招商银行\',\'工商银行\',\'农业银行\',\'增加银行卡\'],\n' +
          '        show1: false,\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '  } ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  .weui-cell {\n' +
          '    padding: 0px 15px !important;\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c popupHeader {
    @d wrap {

    }
  }
  .weui-cell {
    padding: 0px 15px !important;
  }

</style>
