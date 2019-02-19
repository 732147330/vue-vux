<template lang="jade">
  -var c = 'spinner'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
    cell(v-for="(type, index) in types", :title="type", :key="type", :inline-desc="index === 3 ? 'size=40px' : ''")
      spinner(:type="type", :size="index === 3 ? '40px' : ''")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Spinner, Group, Cell, XButton } from "vux";
  export default {
    components: { Spinner, Group, Cell, XButton },
    data() {
      return {
        tempCode: '',
        types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
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
        this.tempCode = '  group\n' +
          '    cell(v-for="(type, index) in types", :title="type", :key="type", :inline-desc="index === 3 ? \'size=40px\' : \'\'")\n' +
          '      spinner(:type="type", :size="index === 3 ? \'40px\' : \'\'")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { Spinner, Group, Cell } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Spinner, Group, Cell },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        types: [\'android\', \'ios\', \'ios-small\', \'bubbles\', \'circles\', \'crescent\', \'dots\', \'lines\', \'ripple\', \'spiral\']\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
  }
</script>

<style>
  @c spinner {
    @d wrap {

    }
  }
</style>
