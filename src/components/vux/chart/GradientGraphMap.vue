<template lang="jade">
  -var c = 'gradientGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, :tick-count="5", :max="2020")
      v-scale(y, alias="年龄")
      v-line(shape="smooth", :colors="gradient")
      v-guide(type="tag", :options="tag")
      v-area(shape="smooth", :colors="gradient")

</template>

<script>
  import { VChart, VGuide, VLine, VArea, VScale } from 'vux'
  import data from '../../../assets/json/vux/data/gradientGraphMapData'

  export default {
    components: { VChart, VGuide, VLine, VArea, VScale },
    data() {
      return {
        gradient: [
          [0, '#F2C587'],
          [0.5, '#ED7973'],
          [1, '#8659AF']
        ],
        tag: {
          position: [ 2017, 30.12 ],
          content: '30.12',
          direct: 'tl',
          offsetY: -5,
          background: {
            fill: '#8659AF'
          },
          pointStyle: {
            fill: '#8659AF'
          }
        },
        data
      }
    }
  }

</script>

<style>
  @c gradientGraphMap {
    @d wrap {

    }
  }
</style>
