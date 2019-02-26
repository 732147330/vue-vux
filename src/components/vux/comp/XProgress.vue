<template lang="jade">
  -var c = 'x-progress'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    x-progress(:percent="percent1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    box(gap="10px")
      x-progress(:percent="percent2", :show-cancel="false")

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XProgress, Box, XButton } from 'vux';
  export default {
    components: { XProgress, Box, XButton },
    data() {
      return {
        tempCode: '',
        percent1: 30,
        percent2: 60
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
        this.tempCode = '    x-progress(:percent="percent1")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '     box(gap="10px")\n' +
          '      x-progress(:percent="percent2", :show-cancel="false")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '   import { XProgress, Box, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { XProgress, Box, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        percent1: 30,\n' +
          '        percent2: 60\n' +
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
  @c x-progress {
    @d wrap {

    }
  }
</style>
