<template lang="jade">
  -var c = 'basicGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data", prevent-default)
      v-scale(x, :tick-count="3", field="date")
      v-scale(y, field="value")
      v-tooltip(:show-item-marker="false", show-x-value)
      v-line

</template>

<script>
  import { VChart, VTooltip, VLine, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/basicGraphMapData'

  export default {
    components: { VChart, VTooltip, VLine, VScale },
    data () {
      return {
        data
      }
    },
  }

</script>

<style>
  @c basicGraphMap {
    @d wrap {

    }
  }
</style>
