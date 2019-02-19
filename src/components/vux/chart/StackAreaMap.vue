<template lang="jade">
  -var c = 'stackAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x field="date", type="timeCat", mask="MM-DD")
      v-scale(y field="value", :tick-count="4", :max="300")
      v-tooltip(show-crosshairs, show-value-in-legend)

      v-area(series-field="city", shape="smooth", adjust="stack")
      v-line(series-field="city", shape="smooth", adjust="stack")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VTooltip, VLine, VScale, VArea, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/stackAreaMapData'

  export default {
    components: { VChart, VTooltip, VLine, VScale, VArea, XButton },
    data() {
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
        this.tempCode = '    v-chart(:data="data")\n' +
          '      v-scale(x field="date", type="timeCat", mask="MM-DD")\n' +
          '      v-scale(y field="value", :tick-count="4", :max="300")\n' +
          '      v-tooltip(show-crosshairs, show-value-in-legend)\n' +
          '\n' +
          '      v-area(series-field="city", shape="smooth", adjust="stack")\n' +
          '      v-line(series-field="city", shape="smooth", adjust="stack")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VTooltip, VLine, VScale, VArea } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/stackAreaMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VTooltip, VLine, VScale, VArea },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        data\n' +
          '      }\n' +
          '    },\n' +
          '    methods:{\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c stackAreaMap {
    @d wrap {
    }
  }
</style>
