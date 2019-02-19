<template lang="jade">
  -var c = 'stackBarMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(ref="demo", :data="data")
      v-scale(x, field="月份")
      v-scale(y, field="月均降雨量")
      v-bar(series-field="name", adjust="stack")
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
  import data from '../../../assets/json/vux/data/stackBarMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale },
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
        this.tempCode = '    v-chart(ref="demo", :data="data")\n' +
          '      v-scale(x, field="月份")\n' +
          '      v-scale(y, field="月均降雨量")\n' +
          '      v-bar(series-field="name", adjust="stack")\n' +
          '      v-tooltip(show-value-in-legend)\n' +
          '\n' +
          '    x-button(type="primary", plain, @click.native="$refs.demo.rerender()") 重定向';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/stackBarMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale },\n' +
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
  @c stackBarMap {
    @d wrap {
    }
  }
</style>
