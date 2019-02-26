<template lang="jade">
  -var c = 'divider'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider 我是有底线的

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Divider, XButton } from 'vux';
  export default {
    components: { Divider, XButton },
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
        this.tempCode = '  divider 我是有底线的';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   import { Divider, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Divider, XButton },\n' +
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
  @c divider {
    @d wrap {

    }
  }
</style>
