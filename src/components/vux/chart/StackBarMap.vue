<template lang="jade">
  -var c = 'stackBarMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(ref="demo", :data="data")
      v-scale(x, field="月份")
      v-scale(y, field="月均降雨量")
      v-bar(series-field="name", adjust="stack")
      v-tooltip(show-value-in-legend)

    x-button(type="primary", plain, @click.native="$refs.demo.rerender()") 重定向

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/stackBarMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton, VScale },
    data() {
      return {
        data
      }
    }
  }

</script>

<style>
  @c stackBarMap {
    @d wrap {
    }
  }
</style>
