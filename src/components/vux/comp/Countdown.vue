<template lang="jade">
  -var c = 'countdown'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="自动倒计时")
      cell(title="15s", v-model="value")
        countdown(v-model="time", @on-finish="finish", v-show="show")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="手动模式")
      x-switch(title="开始", v-model="start")
      cell(title="15s")
        countdown(v-model="time1", :start="start", @on-finish="finish1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Countdown, Group, Cell, XSwitch, XButton } from 'vux';
  export default {
    components: { Countdown, Group, Cell, XSwitch, XButton },
    data() {
      return {
        tempCode: '',
        show: true,
        time: 15,
        value: '',
        time1: 15,
        value1: '',
        start: false
      }
    },
    methods: {
      finish (index) {
        this.show = false
        this.value = 'completed'
        console.log('current index', index)
      },
      finish1 (index) {
        this.start = false
        this.time1 = 20
      },
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
        this.tempCode = '    group(title="自动倒计时")\n' +
          '      cell(title="15s", v-model="value")\n' +
          '        countdown(v-model="time", @on-finish="finish", v-show="show")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = 'group(title="手动模式")\n' +
          '      x-switch(title="开始", v-model="start")\n' +
          '      cell(title="15s")\n' +
          '        countdown(v-model="time1", :start="start", @on-finish="finish1")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' import { Countdown, Group, Cell, XSwitch, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Countdown, Group, Cell, XSwitch, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        show: true,\n' +
          '        time: 15,\n' +
          '        value: \'\',\n' +
          '        time1: 15,\n' +
          '        value1: \'\',\n' +
          '        start: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      finish (index) {\n' +
          '        this.show = false\n' +
          '        this.value = \'completed\'\n' +
          '        console.log(\'current index\', index)\n' +
          '      },\n' +
          '      finish1 (index) {\n' +
          '        this.start = false\n' +
          '        this.time1 = 20\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c countdown {
    @d wrap {

    }
  }
</style>
