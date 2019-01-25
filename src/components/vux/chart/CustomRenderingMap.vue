<template lang="jade">
  -var c = 'customRenderingMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(prevent-render,@on-render="renderChart")

</template>

<script>
  import { VChart } from 'vux'

  export default {
    components: { VChart },
    methods: {
      renderChart ({ chart }) {
        const data = [ { x: '1', y: 85 } ]
        chart.source(data, {
          y: {
            max: 100,
            min: 0
          }
        })
        chart.axis(false)
        chart.tooltip(false)
        chart.coord('polar', {
          transposed: true,
          innerRadius: 0.8,
          radius: 0.85
        })
        chart.guide().arc({
          start: [ 0, 0 ],
          end: [ 1, 99.98 ],
          top: false,
          style: {
            lineWidth: 20,
            stroke: '#ccc'
          }
        })
        chart.guide().text({
          position: [ '50%', '50%' ],
          content: '85%',
          style: {
            fontSize: 24,
            fill: '#1890FF'
          }
        })
        chart.interval()
          .position('x*y')
          .size(20)
          .animate({
            appear: {
              duration: 1200,
              easing: 'cubicIn'
            }
          })
        chart.render()
      }
    },
    data() {
      return {
      }
    }
  }

</script>

<style>
  @c customRenderingMap {
    @d wrap {
    }
  }
</style>
