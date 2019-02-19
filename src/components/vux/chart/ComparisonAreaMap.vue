<template lang="jade">
  -var c = 'comparisonAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, field="year")
      v-scale(y, field="value", :min="0", :tick-count="5")
      v-area(shape="smooth", series-field="country")
      v-line(shape="smooth", series-field="country")
      v-tooltip(show-value-in-legend)
      v-axis(y, :label="labelFormat")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VScale, VAxis, XButton  } from 'vux'
  import data from '../../../assets/json/vux/data/comparisonAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis, XButton  } ,
    data() {
      return {
        tempCode: '',
        labelFormat: function (text) {
          return {
            text: text / 1000 + 'k'
          }
        },
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
          '      v-scale(x, field="year")\n' +
          '      v-scale(y, field="value", :min="0", :tick-count="5")\n' +
          '      v-area(shape="smooth", series-field="country")\n' +
          '      v-line(shape="smooth", series-field="country")\n' +
          '      v-tooltip(show-value-in-legend)\n' +
          '      v-axis(y, :label="labelFormat")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VLine, VArea, VTooltip, VScale, VAxis } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/comparisonAreaMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis } ,\n' +
          '    data() {\n' +
          '      return {\n' +
          '        labelFormat: function (text) {\n' +
          '          return {\n' +
          '            text: text / 1000 + \'k\'\n' +
          '          }\n' +
          '        },\n' +
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
  @c comparisonAreaMap {
    @d wrap {
    }
  }
</style>
