<template lang="jade">
  -var c = 'spinner'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
    cell(v-for="(type, index) in types", :title="type", :key="type", :inline-desc="index === 3 ? 'size=40px' : ''")
      spinner(:type="type", :size="index === 3 ? '40px' : ''")

</template>

<script>
  import { Spinner, Group, Cell } from "vux";
  export default {
    components: { Spinner, Group, Cell },
    data() {
      return {
        types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
      }
    },
  }
</script>

<style>
  @c spinner {
    @d wrap {

    }
  }
</style>
