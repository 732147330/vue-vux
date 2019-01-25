<template lang="jade">
  -var c = 'displayDotGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      //默认 y 轴数值从数据的最小值到最大值，此处重置为从 0 开始
      v-scale(y, :min="0")
      v-point(:styles="{stroke: '#fff',lineWidth: 1}")
      //onShow 为 F2 属性而非事件
      v-tooltip(:show-item-marker="false", :on-show="onShow")
      v-line

</template>

<script>
  import { VChart, VPoint, VTooltip, VLine, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/displayDotGraphMapData'

  export default {
    components: { VChart, VPoint, VTooltip, VLine, VScale },
    data() {
      return {
        onShow (ev) {
          const { items } = ev
          //items[0].name = null
          items[0].name = '价格'
          items[0].value = '$ ' + items[0].value
        },
        data
      }
    },
  }

</script>

<style>
  @c displayDotGraphMap {
    @d wrap {
    }
  }
</style>
