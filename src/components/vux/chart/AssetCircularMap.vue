<template lang="jade">
  -var c = 'assetCircularMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data",:padding="[20, 'auto']")
      v-tooltip(disabled)
      v-scale(y, :options="yOptions")
      v-pie(:radius="0.85", :inner-radius="0.7", series-field="name", :colors="['#FE5D4D','#3BA4FF','#737DDE']")
      v-legend(:options="legendOptions")
      v-guide(type="html", :options="htmlOptions")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/assetCircularMapData'

  const map = {}
  data.map(obj => {
    map[obj.name] = obj.percent + '%'
  })
  console.log(map)

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale, XButton },
    data() {
      return {
        tempCode: '',
        htmlOptions: {
          position: [ '50%', '45%' ],
          html: `
          <div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">总资产</div>
            <div style="font-size: 24px">133.08 亿</div>
          </div>`
        },
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
        this.tempCode = '    v-chart(:data="data",:padding="[20, \'auto\']")\n' +
          '      v-tooltip(disabled)\n' +
          '      v-scale(y, :options="yOptions")\n' +
          '      v-pie(:radius="0.85", :inner-radius="0.7", series-field="name", :colors="[\'#FE5D4D\',\'#3BA4FF\',\'#737DDE\']")\n' +
          '      v-legend(:options="legendOptions")\n' +
          '      v-guide(type="html", :options="htmlOptions")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/assetCircularMapData\'\n' +
          '\n' +
          '  const map = {}\n' +
          '  data.map(obj => {\n' +
          '    map[obj.name] = obj.percent + \'%\'\n' +
          '  })\n' +
          '  console.log(map)\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        htmlOptions: {\n' +
          '          position: [ \'50%\', \'45%\' ],\n' +
          '          html: `\n' +
          '          <div style="width: 250px;height: 40px;text-align: center;">\n' +
          '            <div style="font-size: 16px">总资产</div>\n' +
          '            <div style="font-size: 24px">133.08 亿</div>\n' +
          '          </div>`\n' +
          '        },\n' +
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
  @c assetCircularMap {
    @d wrap {
    }
  }
</style>
