<template lang="jade">
  -var c = 'chart'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(v-for="v, k in vuxMenuData", :key="k", v-if="v.title==='chart'")
      group(v-for="v1, k1 in v.values", :key="k1", :title="v1.title")
        cell(v-for="v2, k2 in v1.values", :key="k2", :title="v1.names[k2]", :link="`/vux/${v.title}/${v2}`")

</template>


<script>
  import  {mapState, mapActions} from 'vuex'
  import { Group, Cell } from "vux";
  export default {
    components: { Group, Cell },
    computed: {
      ...mapState(['vuxMenuData'])
    },
    data() {
      return {
      }
    },
  }
</script>

<style>
  @c chart {
    @d wrap {
    }
  }
</style>
