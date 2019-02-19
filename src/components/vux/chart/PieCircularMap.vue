<template lang="jade">
  -var c = 'pieCircularMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(y, :options="yOptions")
      v-tooltip(disabled)
      v-pie(:radius="0.85", series-field="name")
      v-legend(:options="legendOptions")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/pieCircularMapData'

  const map = {}
  data.map(obj => {
    map[obj.name] = obj.percent * 100 + '%'
  })
  console.log(map)

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale, XButton },
    data() {
      return {
        tempCode: '',
        legendOptions: {
          position: 'right',
          itemFormatter (val) {
            return val + '  ' + map[val]
          }
        },
        yOptions: {
          formatter (val) {
            return val * 100 + '%'
          }
        },
        map,
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
          '      v-scale(y, :options="yOptions")\n' +
          '      v-tooltip(disabled)\n' +
          '      v-pie(:radius="0.85", series-field="name")\n' +
          '      v-legend(:options="legendOptions")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/pieCircularMapData\'\n' +
          '\n' +
          '  const map = {}\n' +
          '  data.map(obj => {\n' +
          '    map[obj.name] = obj.percent * 100 + \'%\'\n' +
          '  })\n' +
          '  console.log(map)\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        legendOptions: {\n' +
          '          position: \'right\',\n' +
          '          itemFormatter (val) {\n' +
          '            return val + \'  \' + map[val]\n' +
          '          }\n' +
          '        },\n' +
          '        yOptions: {\n' +
          '          formatter (val) {\n' +
          '            return val * 100 + \'%\'\n' +
          '          }\n' +
          '        },\n' +
          '        map,\n' +
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
  @c pieCircularMap {
    @d wrap {
    }
  }
</style>
