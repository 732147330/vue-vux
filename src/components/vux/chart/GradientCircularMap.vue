<template lang="jade">
  -var c = 'gradientCircularMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap} vux-circle-demo")
    div(style='width:100px;height:100px;')
      x-circle(:percent="percent", :stroke-width="6", :trail-width="6", :stroke-color="['#36D1DC', '#5B86E5']",trail-color="#ececec")
        span(style="color:#36D1DC") {{ percent }}%


</template>

<script>
  import { XCircle } from 'vux'

  export default {
    components: { XCircle },
    data() {
      return {
        percent: 80
      }
    }
  }

</script>

<style>
  @c gradientCircularMap {
    @d wrap {
    }
  }
  .vux-circle-demo {
    padding-top: 20px;
    text-align: center;
  }
  .vux-circle-demo > div {
    margin: 0 auto;
  }
</style>
