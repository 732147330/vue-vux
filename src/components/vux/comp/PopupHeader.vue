<template lang="jade">
  -var c = 'popupHeader'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    popup-header(left-text="取消", right-text="确定", title="请选择银行卡")
    group
      x-switch(v-model="show1", title="Popup中使用")

    div(class="cards")
      popup(v-model="show1")
        popup-header(left-text="取消", right-text="确定", title="请选择银行卡", :show-bottom-border="false", @on-click-left="show1 = false", @on-click-right="show1 = false")
        group(gutter="0")
          radio(:options="cards")
</template>

<script>
  import { PopupHeader, Popup, Radio, Group, XSwitch } from "vux";
  export default {
    components: { Popup, PopupHeader, Radio, Group, XSwitch },
    data() {
      return {
        cards: ['招商银行','工商银行','农业银行','增加银行卡'],
        show1: false,
      }
    },
  }

</script>

<style>
  @c popupHeader {
    @d wrap {

    }
  }
  .weui-cell {
    padding: 0px 15px !important;
  }

</style>
