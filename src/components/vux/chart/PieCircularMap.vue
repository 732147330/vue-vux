<template lang="jade">
  -var c = 'pieCircularMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(y, :options="yOptions")
      v-tooltip(disabled)
      v-pie(:radius="0.85", series-field="name")
      v-legend(:options="legendOptions")

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/pieCircularMapData'

  const map = {}
  data.map(obj => {
    map[obj.name] = obj.percent * 100 + '%'
  })
  console.log(map)

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale },
    data() {
      return {
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
  @c pieCircularMap {
    @d wrap {
    }
  }
</style>
