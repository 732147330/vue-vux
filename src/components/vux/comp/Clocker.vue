<template lang="jade">
  -var c = 'clocker'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p(style="padding:15px;")
      span  一般使用:
      clocker(:time="time1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    group(title="在cell中使用")
      cell(title="日期：2019-08-01")
        clocker(time="2030-08-01")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    group(title="自定义模板")
      cell(title="日期：2021-08-01")
        clocker(time="2021-08-01")
          span(style="color:red") %D 天
          span(style="color:green") %H 小时
          span(style="color:blue") %M 分 %S 秒
      cell(title="2021-08-01")
        clocker(time="2021-08-01")
          span(class="day") %_D1
          span(class="day") %_D2
          span(class="day") %_D3
          span(class="day") %_H1
          span(class="day") %_H2
          span(class="day") %_M1
          span(class="day") %_M2
          span(class="day") %_S1
          span(class="day") %_S2
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode05()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
  import { Clocker, Cell, Group, XButton } from 'vux'
  export default {
    components: { Clocker, Cell, Group, XButton },
    data() {
      return {
        tempCode: '',
        time1: ''
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
        this.tempCode = '    p(style="padding:15px;")\n' +
          '      span  一般使用:\n' +
          '      clocker(:time="time1")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    group(title="在cell中使用")\n' +
          '      cell(title="日期：2019-08-01")\n' +
          '        clocker(time="2030-08-01")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  group(title="自定义模板")\n' +
          '      cell(title="日期：2021-08-01")\n' +
          '        clocker(time="2021-08-01")\n' +
          '          span(style="color:red") %D 天\n' +
          '          span(style="color:green") %H 小时\n' +
          '          span(style="color:blue") %M 分 %S 秒\n' +
          '      cell(title="2021-08-01")\n' +
          '        clocker(time="2021-08-01")\n' +
          '          span(class="day") %_D1\n' +
          '          span(class="day") %_D2\n' +
          '          span(class="day") %_D3\n' +
          '          span(class="day") %_H1\n' +
          '          span(class="day") %_H2\n' +
          '          span(class="day") %_M1\n' +
          '          span(class="day") %_M2\n' +
          '          span(class="day") %_S1\n' +
          '          span(class="day") %_S2';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  import { Clocker, Cell, Group, XButton } from \'vux\'\n' +
          '  export default {\n' +
          '    components: { Clocker, Cell, Group, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        time1: \'\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '    created () {\n' +
          '      let date = new Date();\n' +
          '      this.time1 = date.getFullYear()+2+"-"+date.getMonth()+"-"+date.getDate()\n' +
          '      // setTimeout(() => {\n' +
          '      //   this.time1 = \'2019-08-13 22:54\'\n' +
          '      // }, 1000)\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  .day {\n' +
          '        background-color:#000;\n' +
          '        color:#fff;\n' +
          '        text-align:center;\n' +
          '        display:inline-block;\n' +
          '        padding:0 3px;\n' +
          '        border-radius:3px;\n' +
          '      } ';
        this.copyCodeMethod();
      },
    },
    created () {
      let date = new Date();
      this.time1 = date.getFullYear()+2+"-"+date.getMonth()+"-"+date.getDate()
      // setTimeout(() => {
      //   this.time1 = '2019-08-13 22:54'
      // }, 1000)
    },
  }

</script>

<style scoped>
  @c clocker {
    @d wrap {
      .day {
        background-color:#000;
        color:#fff;
        text-align:center;
        display:inline-block;
        padding:0 3px;
        border-radius:3px;
      }
    }
  }
</style>
