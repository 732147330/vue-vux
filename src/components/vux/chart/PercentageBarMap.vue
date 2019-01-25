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

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/percentageBarMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale },
    data() {
      return {
        formatter: function (val) {
          return (val * 100).toFixed(0) + '%'
        },
        data
      }
    }
  }

</script>

<style>
  @c percentageBarMap {
    @d wrap {
    }
  }
</style>
