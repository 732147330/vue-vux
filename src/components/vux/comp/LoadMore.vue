<template lang="jade">
  -var c = 'loadMore'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    load-more(tip="正在加载中")
    br
    load-more(:show-loading="false", tip="暂无数据", background-color="#fbf9fe")
    br
    load-more(:show-loading="false", background-color="#fbf9fe")

</template>

<script>
  import { LoadMore } from "vux";
  export default {
    components: { LoadMore },
    data() {
      return {
      }
    },
  }

</script>

<style>
  @c loadMore {
    @d wrap {

    }
  }
</style>
