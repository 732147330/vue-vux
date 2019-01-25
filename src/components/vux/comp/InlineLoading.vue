<template lang="jade">
  -var c = 'inlineLoading'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    p(style="text-align:center;")
      inline-loading
    br
    p(style="text-align:center;")
      span(style="vertical-align:middle;display:inline-block;font-size:14px;") 加载中 &nbsp;&nbsp;
      inline-loading
    br
    p(style="text-align:center;")
      inline-loading
      span(style="vertical-align:middle;display:inline-block;font-size:14px;") &nbsp;&nbsp;加载中

</template>

<script>
  import { InlineLoading } from "vux";
  export default {
    components: { InlineLoading },
    data() {
      return {
      }
    },
  }

</script>

<style>
  @c inlineLoading {
    @d wrap {

    }
  }
</style>
