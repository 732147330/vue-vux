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

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/assetCircularMapData'

  const map = {}
  data.map(obj => {
    map[obj.name] = obj.percent + '%'
  })
  console.log(map)

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VGuide, VScale },
    data() {
      return {
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
    }
  }

</script>

<style>
  @c assetCircularMap {
    @d wrap {
    }
  }
</style>
