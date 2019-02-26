<template lang="jade">
  -var c = 'inlineX-switch'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="text-align:center;margin-top:15px;")
      inline-x-switch(v-model="value")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group
      x-switch(title="switch" v-model="value")

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码


    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { InlineXSwitch, XSwitch, Group, XButton } from 'vux';
  export default {
    components: { InlineXSwitch, XSwitch, Group, XButton },
    data() {
      return {
        tempCode: '',
        value: false
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
        this.tempCode = '    div(style="text-align:center;margin-top:15px;")\n' +
          '      inline-x-switch(v-model="value")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '     group\n' +
          '      x-switch(title="switch" v-model="value")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' import { InlineXSwitch, XSwitch, Group, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { InlineXSwitch, XSwitch, Group, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '          value: false \n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }\n';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c inlineX-switch {
    @d wrap {

    }
  }
</style>
