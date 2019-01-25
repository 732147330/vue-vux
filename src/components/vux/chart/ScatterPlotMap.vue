<template lang="jade">
  -var c = 'scatterPlotMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, field="height")
      v-scale(y, field="weight")
      v-tooltip(disabled)
      v-point(series-field="gender", :styles="{fillOpacity: 0.65}")

</template>

<script>
  import { VChart, VPoint, VAxis, VTooltip, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/scatterPlotMapData'

  export default {
    components: { VChart, VPoint, VAxis, VTooltip, VScale },
    data () {
      return {
        data
      }
    },
  }

</script>

<style>
  @c scatterPlotMap {
    @d wrap {

    }
  }
</style>
