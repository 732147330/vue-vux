<template lang="jade">
  -var c = 'basicGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data", prevent-default)
      v-scale(x, :tick-count="3", field="date")
      v-scale(y, field="value")
      v-tooltip(:show-item-marker="false", show-x-value)
      v-line

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VTooltip, VLine, VScale, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/basicGraphMapData'

  export default {
    components: { VChart, VTooltip, VLine, VScale, XButton },
    data () {
      return {
        tempCode: '',
        data
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
        this.tempCode = '    v-chart(:data="data", prevent-default)\n' +
          '      v-scale(x, :tick-count="3", field="date")\n' +
          '      v-scale(y, field="value")\n' +
          '      v-tooltip(:show-item-marker="false", show-x-value)\n' +
          '      v-line';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { VChart, VTooltip, VLine, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/basicGraphMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VTooltip, VLine, VScale },\n' +
          '    data () {\n' +
          '      return {\n' +
          '        data\n' +
          '      }\n' +
          '    },\n' +
          '    methods:{\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c basicGraphMap {
    @d wrap {

    }
  }
</style>
