<template lang="jade">
  -var c = 'home'
  -var wrap = c + '__wrap'

  div(class="#{wrap}", id="home")
    //group 分组
    //title 显示文字标题
    //cell属性
    //link  跳转链接
    //is-link 是否显示'>'，如果设置了link则默认true
    //inline-desc 文字标题下面的小注解
    div(v-for="v, k in vuxMenuData", :key="k", v-if="v.title==='comp'")
      group(v-for="v1, k1 in v.values", :key="k1", :title="v1.title")
        cell(v-for="v2, k2 in v1.values", :key="k2", :title="v2", :link="`/vux/${v.title}/${v2}`")

</template>


<script>
  import  {mapState, mapActions} from 'vuex'
  import {Group, Cell } from "vux";
  export default {
    components: { Group, Cell },
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['vuxMenuData'])
    }
  }

</script>

<style>
  @c home {
    @d wrap {
      .weui-cell:before {
        /*left: 0px;*/
      }
    }
  }
</style>
