<template lang="jade">
  -var c = 'badge'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    badge(text="1")
    br
    badge(text="123")
    br
    group(title="在Cell组件里使用")
      cell(title="红点", is-link)
        div(class="badge-value")
          span(class="vertical-middle") 新消息 &nbsp;
          badge
      cell(title="个位数", is-link)
        div(class="badge-value")
          span(class="vertical-middle") 新消息 &nbsp;
          badge(text="8")
      cell(title="多位数", is-link)
        div(class="badge-value")
          span(class="vertical-middle") 新消息 &nbsp;
          badge(text="888")

</template>

<script>
  import { Badge, Group, Cell } from "vux";
  export default {
    components: { Badge, Group, Cell },
    data() {
      return {
      }
    },
  }

</script>

<style>
  @c badge {
    @d wrap {
      .badge-value {
        display: inline-block!important;
      }
      .vertical-middle {
        vertical-align: middle;
      }
    }
  }
</style>
