<template lang="jade">
  -var c = 'negativeAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, :tick-count="0")
      v-scale(y, :nice="false", :min="-100", :max="100")
      v-tooltip
      v-area
      v-line

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/negativeAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VScale },
    data() {
      return {
        tooltip: {
          showItemMarker: false,
          onShow (ev) {
            const { items } = ev
            items[0].name = items[0].title
          }
        },
        data
      }
    }
  }

</script>

<style>
  @c negativeAreaMap {
    @d wrap {
    }
  }
</style>
