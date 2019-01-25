<template lang="jade">
  -var c = 'smoothGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, type="timeCat", mask="MM/DD", :tick-count="3")
      v-scale(y, :min="0", alias="日均温度", :tick-count="5")
      v-point(:style="{stroke: '#fff',lineWidth: 1}", shape="smooth")
      v-line(shape="smooth")

</template>

<script>
  import { VChart, VTooltip, VLine, VScale, VPoint } from 'vux'
  import data from '../../../assets/json/vux/data/smoothGraphMapData'

  export default {
    components: { VChart, VTooltip, VLine, VScale, VPoint },
    data() {
      return {
        data
      }
    }
  }

</script>

<style>
  @c smoothGraphMap {
    @d wrap {
    }
  }
</style>
