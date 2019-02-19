<template lang="jade">
  -var c = 'popover'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    popover(placement="top", style="margin: 20px;", @on-show="onShow", @on-hide="onHide")
      div(slot="content" class="popover-demo-content") Hello VUX(top)
      button(class="btn btn-default") 上方出现
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    popover(placement="bottom", style="margin: 20px;")
      div(slot="content" class="popover-demo-content") Hello VUX(bottom)
      button(class="btn btn-default") 下方出现
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br
    popover(placement="left", style="margin: 20px;")
      div(slot="content" class="popover-demo-content") Hello VUX(left)
      button(class="btn btn-default") 左方出现
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br
    popover(placement="right", style="margin: 20px;")
      div(slot="content" class="popover-demo-content") Hello VUX(right)
      button(class="btn btn-default") 右方出现

    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    x-button(mini, plain, @click.native="copyCode05()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode06()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Popover, XButton } from "vux";
  export default {
    components: { Popover, XButton },
    data() {
      return {
        tempCode: '',
      }
    },
    methods: {
      onShow () {
        console.log('on show')
      },
      onHide () {
        console.log('on hide')
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
        this.tempCode = '  popover(placement="top", style="margin: 20px;", @on-show="onShow", @on-hide="onHide")\n' +
          '      div(slot="content" class="popover-demo-content") Hello VUX(top)\n' +
          '      button(class="btn btn-default") 上方出现';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  popover(placement="bottom", style="margin: 20px;")\n' +
          '      div(slot="content" class="popover-demo-content") Hello VUX(bottom)\n' +
          '      button(class="btn btn-default") 下方出现';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '   popover(placement="left", style="margin: 20px;")\n' +
          '      div(slot="content" class="popover-demo-content") Hello VUX(left)\n' +
          '      button(class="btn btn-default") 左方出现';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    popover(placement="right", style="margin: 20px;")\n' +
          '      div(slot="content" class="popover-demo-content") Hello VUX(right)\n' +
          '      button(class="btn btn-default") 右方出现';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  import { Popover } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Popover },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onShow () {\n' +
          '        console.log(\'on show\')\n' +
          '      },\n' +
          '      onHide () {\n' +
          '        console.log(\'on hide\')\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = ' text-align: center;\n' +
          '      .popover-demo-content {\n' +
          '        font-size: 12px;\n' +
          '        padding: 5px 10px;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c popover {
    @d wrap {
      text-align: center;
      .popover-demo-content {
        font-size: 12px;
        padding: 5px 10px;
      }
    }
  }



</style>
