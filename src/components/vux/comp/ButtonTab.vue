<template lang="jade">
  -var c = 'buttonTab'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="padding: 15px;")
      button-tab
        button-tab-item 今天
        button-tab-item(selected) 本周
        button-tab-item 本月
      br
      divider 使用v-model设置当前选中项
      br
      button-tab(v-model="demo01")
        button-tab-item(@on-item-click="consoleIndex()") 文章
        button-tab-item(@on-item-click="consoleIndex()") 商品
      br
      button-tab(v-model="demo01")
        button-tab-item 文章同步
        button-tab-item 商品同步
      br
      divider 红点
      br
      button-tab
        button-tab-item(selected) 所有消息
        button-tab-item
          span.vux-reddot-s 新消息

</template>

<script>
  import { ButtonTab, ButtonTabItem, Divider } from 'vux'

  export default {
    components: { ButtonTab, ButtonTabItem, Divider } ,
    methods: {
      consoleIndex () {
        console.log('click demo01 ', this.demo01)
      }
    },
    data() {
      return {
        demo01: 0
      }
    },
  }

</script>

<style>
  @c buttonTab {
    @d wrap {

    }
  }
</style>
