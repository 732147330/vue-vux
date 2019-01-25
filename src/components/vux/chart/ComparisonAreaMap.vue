<template lang="jade">
  -var c = 'comparisonAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, field="year")
      v-scale(y, field="value", :min="0", :tick-count="5")
      v-area(shape="smooth", series-field="country")
      v-line(shape="smooth", series-field="country")
      v-tooltip(show-value-in-legend)
      v-axis(y, :label="labelFormat")

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VScale, VAxis } from 'vux'
  import data from '../../../assets/json/vux/data/comparisonAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis } ,
    data() {
      return {
        labelFormat: function (text) {
          return {
            text: text / 1000 + 'k'
          }
        },
        data
      }
    },
  }

</script>

<style>
  @c comparisonAreaMap {
    @d wrap {
    }
  }
</style>
