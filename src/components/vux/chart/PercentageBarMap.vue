<template lang="jade">
  -var c = 'percentageBarMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(ref="demo", :data="data")
      v-scale(x, field="year")
      //formatter 设置y轴数据格式（如：百分比）
      v-scale(y, field="percent", :min="0", :max="0.5", :formatter="formatter")
      v-bar(series-field="country", adjust="stack")
      v-tooltip(show-value-in-legend)
    x-button(type="primary", plain, @click.native="$refs.demo.rerender()") 重定向

    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/percentageBarMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale },
    data() {
      return {
        tempCode: '',
        formatter: function (val) {
          return (val * 100).toFixed(0) + '%'
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
        this.tempCode = ' v-chart(ref="demo", :data="data")\n' +
          '      v-scale(x, field="year")\n' +
          '      //formatter 设置y轴数据格式（如：百分比）\n' +
          '      v-scale(y, field="percent", :min="0", :max="0.5", :formatter="formatter")\n' +
          '      v-bar(series-field="country", adjust="stack")\n' +
          '      v-tooltip(show-value-in-legend)\n' +
          '    x-button(type="primary", plain, @click.native="$refs.demo.rerender()") 重定向';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/percentageBarMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        formatter: function (val) {\n' +
          '          return (val * 100).toFixed(0) + \'%\'\n' +
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
  @c percentageBarMap {
    @d wrap {
    }
  }
</style>
