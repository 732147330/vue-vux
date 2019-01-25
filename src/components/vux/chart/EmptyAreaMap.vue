<template lang="jade">
  -var c = 'emptyAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-tooltip(show-crosshairs)
      v-area(series-field="type", shape="smooth")
      v-legend(disabled)
      v-line(series-field="type", shape="smooth")

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend } from 'vux'
  import data from '../../../assets/json/vux/data/emptyAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend } ,
    data() {
      return {
        data
      }
    },
  }

</script>

<style>
  @c emptyAreaMap {
    @d wrap {
    }
  }
</style>
