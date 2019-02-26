<template lang="jade">
  -var c = 'icon'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    box(gap="10px 10px")
      icon(type="success")
      icon(type="info")
      icon(type="info-circle")
      icon(type="warn")
      icon(type="waiting")
      icon(type="waiting-circle")
      icon(type="safe-success")
      icon(type="safe_warn")
      icon(type="success-circle")
      icon(type="success-no-circle")
      icon(type="circle")
      icon(type="download")
      icon(type="cancel")
      icon(type="search")
      icon(type="clear")
    br
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    br
    box(gap="10px 10px")
      icon(type="success", is-msg)
      icon(type="info", is-msg)
      icon(type="warn", is-msg)
      icon(type="waiting", is-msg)
      icon(type="safe_success", is-msg)
      icon(type="safe_warn", is-msg)

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Box, Icon, XButton } from 'vux';
  export default {
    components: { Box, Icon, XButton },
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
        this.tempCode = '  box(gap="10px 10px")\n' +
          '      icon(type="success")\n' +
          '      icon(type="info")\n' +
          '      icon(type="info-circle")\n' +
          '      icon(type="warn")\n' +
          '      icon(type="waiting")\n' +
          '      icon(type="waiting-circle")\n' +
          '      icon(type="safe-success")\n' +
          '      icon(type="safe_warn")\n' +
          '      icon(type="success-circle")\n' +
          '      icon(type="success-no-circle")\n' +
          '      icon(type="circle")\n' +
          '      icon(type="download")\n' +
          '      icon(type="cancel")\n' +
          '      icon(type="search")\n' +
          '      icon(type="clear")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   box(gap="10px 10px")     \n' +
          '      icon(type="success", is-msg)\n' +
          '      icon(type="info", is-msg)\n' +
          '      icon(type="warn", is-msg)\n' +
          '      icon(type="waiting", is-msg)\n' +
          '      icon(type="safe_success", is-msg)\n' +
          '      icon(type="safe_warn", is-msg)';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  import { Box, Icon, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Box, Icon, XButton },\n' +
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
  @c icon {
    @d wrap {

    }
  }
</style>
