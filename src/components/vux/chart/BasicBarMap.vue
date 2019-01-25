<template lang="jade">
  -var c = 'basicBarMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(ref="demo", :data="data")
      v-bar
      v-tooltip(:show-item-marker="false")

    x-button(type="primary", plain, @click.native="$refs.demo.rerender()") 重定向

</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton } from 'vux'
  import  data from '../../../assets/json/vux/data/basicBarMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton },
    data() {
      return {
        data
      }
    }
  }

</script>

<style>
  @c basicBarMap {
    @d wrap {
    }
  }
</style>
