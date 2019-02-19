<template lang="jade">
  -var c = 'basicCircularMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    div(style="width:150px;height:150px;")
      x-circle(:percent="percent", :stroke-width="5", stroke-color="#04BE02")
        span  {{ percent }}%
     h4 顺时针

    div.circle-demo-range
      range(v-model="percent", :min="0", :max="100")

    div(style="width:150px;height:150px;")
      x-circle(:percent="percent", :stroke-width="5", stroke-color="#04BE02", anticlockwise)
        span  {{ percent }}%
    h4 逆时针
    br

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XCircle, Range, Icon, XButton } from 'vux'

  export default {
    components: { XCircle, Range, Icon, XButton },
    data() {
      return {
        tempCode: '',
        percent: 50
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
        this.tempCode = '  br\n' +
          '    div(style="width:150px;height:150px;")\n' +
          '      x-circle(:percent="percent", :stroke-width="5", stroke-color="#04BE02")\n' +
          '        span  {{ percent }}%\n' +
          '     h4 顺时针\n' +
          '\n' +
          '    div.circle-demo-range\n' +
          '      range(v-model="percent", :min="0", :max="100")\n' +
          '\n' +
          '    div(style="width:150px;height:150px;")\n' +
          '      x-circle(:percent="percent", :stroke-width="5", stroke-color="#04BE02", anticlockwise)\n' +
          '        span  {{ percent }}%\n' +
          '    h4 逆时针\n' +
          '    br';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { XCircle, Range, Icon } from \'vux\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { XCircle, Range, Icon },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        percent: 50\n' +
          '      }\n' +
          '    },\n' +
          '    methods:{\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '     text-align: center;\n' +
          '      div {\n' +
          '        margin: 30px auto;\n' +
          '      }\n' +
          '      .circle-demo-range {\n' +
          '        width: 250px;\n' +
          '        margin-top: 25px;\n' +
          '        margin-bottom: 25px;\n' +
          '      }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style scoped>
  @c basicCircularMap {
    @d wrap {
      text-align: center;
      div {
        margin: 30px auto;
      }
      .circle-demo-range {
        width: 250px;
        margin-top: 25px;
        margin-bottom: 25px;
      }
    }
  }



</style>
