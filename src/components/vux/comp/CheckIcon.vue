<template lang="jade">
  -var c = 'check-icon'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="padding:15px;")
      check-icon(:value.sync="demo1")  同意不？ ({{ demo1 }})
      br
      br
      check-icon(:value.sync="demo2", type="plain")  同意不？ ({{ demo2 }})

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { CheckIcon, XButton } from 'vux';
  export default {
    components: { CheckIcon, XButton },
    data() {
      return {
        tempCode: '',
        demo1: false,
        demo2: true
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
        this.tempCode = '   div(style="padding:15px;")\n' +
          '      check-icon(:value.sync="demo1")  同意不？ ({{ demo1 }})\n' +
          '      br\n' +
          '      br\n' +
          '      check-icon(:value.sync="demo2", type="plain")  同意不？ ({{ demo2 }})';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { CheckIcon, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { CheckIcon, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        tempCode: \'\',\n' +
          '        demo1: false,\n' +
          '        demo2: true\n' +
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
  @c check-icon {
    @d wrap {

    }
  }
</style>
