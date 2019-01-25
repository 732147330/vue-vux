<template lang="jade">
  -var c = 'stackAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x field="date", type="timeCat", mask="MM-DD")
      v-scale(y field="value", :tick-count="4", :max="300")
      v-tooltip(show-crosshairs, show-value-in-legend)

      v-area(series-field="city", shape="smooth", adjust="stack")
      v-line(series-field="city", shape="smooth", adjust="stack")

</template>

<script>
  import { VChart, VTooltip, VLine, VScale, VArea } from 'vux'
  import data from '../../../assets/json/vux/data/stackAreaMapData'

  export default {
    components: { VChart, VTooltip, VLine, VScale, VArea },
    data() {
      return {
        data
      }
    }
  }

</script>

<style>
  @c stackAreaMap {
    @d wrap {
    }
  }
</style>
