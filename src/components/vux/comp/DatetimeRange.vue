<template lang="jade">
  -var c = 'datetime-range'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(:title="value[0] + ' ' + value[1] + ':' + value[2]")
      datetime-range(title="选择", start-date="2017-01-01", end-date="2017-02-02", format="YYYY/MM/DD", v-model="value", @on-change="onChange")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, DatetimeRange, XButton } from 'vux';
  export default {
    components: { Group, DatetimeRange, XButton },
    data() {
      return {
        tempCode: '',
        value: ['2017-01-15', '03', '05']
      }
    },
    methods: {
      onChange (val) {
        console.log('change', val)
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
        this.tempCode = '    group(:title="value[0] + \' \' + value[1] + \':\' + value[2]")\n' +
          '      datetime-range(title="选择", start-date="2017-01-01", end-date="2017-02-02", format="YYYY/MM/DD", v-model="value", @on-change="onChange")  ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { Group, DatetimeRange, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, DatetimeRange, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        value: [\'2017-01-15\', \'03\', \'05\']\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onChange (val) {\n' +
          '        console.log(\'change\', val)\n' +
          '      },\n' +
          '    }\n' +
          '  } ';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c datetime-range {
    @d wrap {

    }
  }
</style>
