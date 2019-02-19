<template lang="jade">
  -var c = 'emptyAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-tooltip(show-crosshairs)
      v-area(series-field="type", shape="smooth")
      v-legend(disabled)
      v-line(series-field="type", shape="smooth")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, XButton  } from 'vux'
  import data from '../../../assets/json/vux/data/emptyAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, XButton  } ,
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
        this.tempCode = '   v-chart(:data="data")\n' +
          '      v-tooltip(show-crosshairs)\n' +
          '      v-area(series-field="type", shape="smooth")\n' +
          '      v-legend(disabled)\n' +
          '      v-line(series-field="type", shape="smooth")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { VChart, VLine, VArea, VTooltip, VLegend } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/emptyAreaMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VLegend } ,\n' +
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
  @c emptyAreaMap {
    @d wrap {
    }
  }
</style>
