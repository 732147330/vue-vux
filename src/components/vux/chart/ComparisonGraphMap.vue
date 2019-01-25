<template lang="jade">
  -var c = 'comparisonGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, :tick-count="4")
      v-line(series-field="type")

</template>

<script>
  import { VChart, VTooltip, VLine, VAxis, VScale } from 'vux'
  import  data from '../../../assets/json/vux/data/comparisonGraphMapData'

  export default {
    components: { VChart, VTooltip, VLine, VAxis, VScale },
    data() {
      return {
        data
      }
    }
  }

</script>

<style>
  @c comparisonGraphMap {
    @d wrap {
    }
  }
</style>
