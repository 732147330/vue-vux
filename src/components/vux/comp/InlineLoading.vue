<template lang="jade">
  -var c = 'inlineLoading'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    p(style="text-align:center;")
      inline-loading
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    p(style="text-align:center;")
      span(style="vertical-align:middle;display:inline-block;font-size:14px;") 加载中 &nbsp;&nbsp;
      inline-loading
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br
    p(style="text-align:center;")
      inline-loading
      span(style="vertical-align:middle;display:inline-block;font-size:14px;") &nbsp;&nbsp;加载中

    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { InlineLoading, XButton } from "vux";
  export default {
    components: { InlineLoading, XButton },
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
        this.tempCode = '    p(style="text-align:center;")\n' +
          '      inline-loading';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   p(style="text-align:center;")\n' +
          '      span(style="vertical-align:middle;display:inline-block;font-size:14px;") 加载中 &nbsp;&nbsp;\n' +
          '      inline-loading ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  p(style="text-align:center;")\n' +
          '      inline-loading\n' +
          '      span(style="vertical-align:middle;display:inline-block;font-size:14px;") &nbsp;&nbsp;加载中';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  import { InlineLoading, XButton } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { InlineLoading, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '  }\n';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c inlineLoading {
    @d wrap {

    }
  }
</style>
