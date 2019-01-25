<template lang="jade">
  -var c = 'popover'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    popover(placement="top", style="margin: 20px;", @on-show="onShow", @on-hide="onHide")
      div(slot="content" class="popover-demo-content") Hello VUX(top)
      button(class="btn btn-default") 上方出现
    popover(placement="bottom", style="margin: 20px;")
      div(slot="content" class="popover-demo-content") Hello VUX(bottom)
      button(class="btn btn-default") 下方出现
    popover(placement="left", style="margin: 20px;")
      div(slot="content" class="popover-demo-content") Hello VUX(left)
      button(class="btn btn-default") 左方出现
    popover(placement="right", style="margin: 20px;")
      div(slot="content" class="popover-demo-content") Hello VUX(right)
      button(class="btn btn-default") 右方出现
</template>

<script>
  import { Popover } from "vux";
  export default {
    components: { Popover },
    data() {
      return {
      }
    },
    methods: {
      onShow () {
        console.log('on show')
      },
      onHide () {
        console.log('on hide')
      }
    }
  }

</script>

<style>
  @c popover {
    @d wrap {
      text-align: center;
    }
  }
  .popover-demo-content {
    font-size: 12px;
    padding: 5px 10px;
  }


</style>
