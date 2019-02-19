<template lang="jade">
  -var c = 'negativeAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, :tick-count="0")
      v-scale(y, :nice="false", :min="-100", :max="100")
      v-tooltip
      v-area
      v-line

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VScale, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/negativeAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VScale, XButton },
    data() {
      return {
        tempCode: '',
        tooltip: {
          showItemMarker: false,
          onShow (ev) {
            const { items } = ev
            items[0].name = items[0].title
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
          '      v-scale(x, :tick-count="0")\n' +
          '      v-scale(y, :nice="false", :min="-100", :max="100")\n' +
          '      v-tooltip\n' +
          '      v-area\n' +
          '      v-line';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VLine, VArea, VTooltip, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/negativeAreaMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VScale },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        tooltip: {\n' +
          '          showItemMarker: false,\n' +
          '          onShow (ev) {\n' +
          '            const { items } = ev\n' +
          '            items[0].name = items[0].title\n' +
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
  @c negativeAreaMap {
    @d wrap {
    }
  }
</style>
