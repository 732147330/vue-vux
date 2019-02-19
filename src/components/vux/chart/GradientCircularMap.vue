<template lang="jade">
  -var c = 'gradientCircularMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style='width:100px;height:100px;')
      x-circle(:percent="percent", :stroke-width="6", :trail-width="6", :stroke-color="['#36D1DC', '#5B86E5']",trail-color="#ececec")
        span(style="color:#36D1DC") {{ percent }}%

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XCircle, XButton } from 'vux'

  export default {
    components: { XCircle, XButton },
    data() {
      return {
        tempCode: '',
        percent: 80
      }
    },
    methods:{
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
        this.tempCode = '   div(style=\'width:100px;height:100px;\')\n' +
          '      x-circle(:percent="percent", :stroke-width="6", :trail-width="6", :stroke-color="[\'#36D1DC\', \'#5B86E5\']",trail-color="#ececec")\n' +
          '        span(style="color:#36D1DC") {{ percent }}%';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { XCircle } from \'vux\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { XCircle },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        percent: 80\n' +
          '      }\n' +
          '    },\n' +
          '    methods:{\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '     padding-top: 20px;\n' +
          '      text-align: center;\n' +
          '      div {\n' +
          '        margin: 0 auto;\n' +
          '      }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c gradientCircularMap {
    @d wrap {
      padding-top: 20px;
      text-align: center;
      div {
        margin: 0 auto;
      }
    }
  }
</style>
