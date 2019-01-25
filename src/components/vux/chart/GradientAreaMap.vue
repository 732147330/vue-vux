<template lang="jade">
  -var c = 'gradientAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, type="timeCat", :tick-count="3")
      v-scale(y, :min="0")
      v-area(:colors="gradient", shape="smooth")
      v-line(:colors="gradient", shape="smooth")


</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VScale, VAxis } from 'vux'
  import data from '../../../assets/json/vux/data/gradientAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis },
    data() {
      return {
        gradient: [
          [0, '#FE6384'],
          [1, '#f7f7f7']
        ],
        data
      }
    }
  }

</script>

<style>
  @c gradientAreaMap {
    @d wrap {

    }
  }
</style>
