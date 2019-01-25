<template lang="jade">
  -var c = 'basicCircularMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap} vux-circle-demo")
    br
    div(style="width:150px;height:150px;")
      x-circle(:percent="percent", :stroke-width="5", stroke-color="#04BE02")
        span  {{ percent }}%
     h4 顺时针

    div.circle-demo-range
      range(v-model="percent", :min="0", :max="100")

    div(style="width:150px;height:150px;")
      x-circle(:percent="percent", :stroke-width="5", stroke-color="#04BE02", anticlockwise)
        span  {{ percent }}%
    h4 逆时针
    br

</template>

<script>
  import { XCircle, Range, Icon } from 'vux'

  export default {
    components: { XCircle, Range, Icon },
    data() {
      return {
        percent: 50
      }
    }
  }

</script>

<style>
  @c basicCircularMap {
    @d wrap {
    }
  }
  .vux-circle-demo {
    text-align: center;
  }
  .vux-circle-demo > div {
    margin-left: auto;
    margin-right: auto;
  }
  .circle-demo-range {
    width: 250px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
</style>
