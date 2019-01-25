<template lang="jade">
  -var c = 'drawer'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    x-header This is the page title.
    br
    x-header(title="use prop:title")
    br
    x-header(:left-options="{showBack: false}") do not show Back
    br
    x-header(:left-options="{backText: ''}") set empty back text
    br
    x-header(:right-options="{showMore: true}", @on-click-more="showMenus = true") with more menu
    br
    x-header with right link
      a(slot="right") Feedback
    br
    x-header long long long long long long long text
      a(slot="right") Feedback
    br
    x-header with left slot
      a(slot="left") Close
    br
    x-header
      span overwrite-left
      x-icon(slot="overwrite-left", type="navicon", size="35", style="fill:#fff;position:relative;top:-8px;left:-3px;")
    br
    x-header(style="background-color:#000;") custom background color
    br
    x-header(title="slot:overwrite-title")
      div(class="overwrite-title-demo", slot="overwrite-title")
        button-tab
          button-tab-item(selected) A
          button-tab-item B
    div(v-transfer-dom)
      actionsheet(:menus="menus", v-model="showMenus", show-cancel)

</template>

<script>
  import { XHeader, Actionsheet, ButtonTab, ButtonTabItem } from 'vux'
  export default {
    components: { XHeader, Actionsheet, ButtonTab, ButtonTabItem },
    data() {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
  }

</script>

<style>
  @c drawer {
    @d wrap {
      .overwrite-title-demo {
        margin-top: 5px;
      }
    }
  }
</style>
