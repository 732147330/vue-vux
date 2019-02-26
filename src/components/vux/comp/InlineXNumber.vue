<template lang="jade">
  -var c = 'inlineX-number'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    div(style="text-align:center;")
      inline-x-number(width="50px")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    div(style="text-align:center;")
      inline-x-number(width="50px", button-style="round")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group
      cell(title="在cell中使用")
        inline-x-number(style="display:block;", :min="0", width="50px", button-style="round")

    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, Cell, InlineXNumber, XButton } from 'vux';
  export default {
    components: { Group, Cell, InlineXNumber, XButton },
    data() {
      return {
        tempCode: '',
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
        this.tempCode = '    div(style="text-align:center;")\n' +
          '      inline-x-number(width="50px")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   div(style="text-align:center;")\n' +
          '      inline-x-number(width="50px", button-style="round") ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  group\n' +
          '      cell(title="在cell中使用")\n' +
          '        inline-x-number(style="display:block;", :min="0", width="50px", button-style="round")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '   import { Group, Cell, InlineXNumber, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, Cell, InlineXNumber, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c inlineX-number {
    @d wrap {

    }
  }
</style>
