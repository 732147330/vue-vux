<template lang="jade">
  -var c = 'scatterPlotMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, field="height")
      v-scale(y, field="weight")
      v-tooltip(disabled)
      v-point(series-field="gender", :styles="{fillOpacity: 0.65}")


    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VPoint, VAxis, VTooltip, VScale, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/scatterPlotMapData'

  export default {
    components: { VChart, VPoint, VAxis, VTooltip, VScale, XButton },
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
        this.tempCode = '  v-chart(:data="data")\n' +
          '      v-scale(x, field="height")\n' +
          '      v-scale(y, field="weight")\n' +
          '      v-tooltip(disabled)\n' +
          '      v-point(series-field="gender", :styles="{fillOpacity: 0.65}")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { VChart, VPoint, VAxis, VTooltip, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/scatterPlotMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VPoint, VAxis, VTooltip, VScale },\n' +
          '    data () {\n' +
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
  @c scatterPlotMap {
    @d wrap {

    }
  }
</style>
