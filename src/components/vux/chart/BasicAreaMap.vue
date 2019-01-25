<template lang="jade">
  -var c = 'basicAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, :tick-count="0")
      v-scale(y, :min="0")
      v-tooltip(show-crosshairs, show-x-value)
      v-area
      v-line

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VScale, VAxis } from 'vux'
  import  data from '../../../assets/json/vux/data/basicAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis } ,
    data() {
      return {
        data
      }
    }
  }

</script>

<style>
  @c basicAreaMap {
    @d wrap {
    }
  }
</style>
