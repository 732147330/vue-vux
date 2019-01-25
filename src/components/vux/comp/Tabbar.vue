<template lang="jade">
  -var c = 'tabbar'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    h3 最底端的就是tabbar(代码引用详情请参考
      font(color='black') MFooter.vue
      | )
  //group
      cell(is-link, title="Simple", link="/component/tabbar-simple")
      cell(is-link, title="Switch icons", link="/component/tabbar-icon")
  //tabbar
      tabbar-item
        img(slot="icon", src="../assets/demo/icon_nav_button.png")
        span(slot="label") Wechat
      tabbar-item(show-dot)
        img(slot="icon", src="../assets/demo/icon_nav_msg.png")
        span(slot="label") Message
      tabbar-item(selected, link="/component/demo")
        img(slot="icon", src="../assets/demo/icon_nav_article.png")
        span(slot="label") Explore
      tabbar-item(badge="2")
        img(slot="icon", src="../assets/demo/icon_nav_cell.png")
        span(slot="label") News

</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux';
  export default {
    components: { Tabbar, TabbarItem, Group, Cell },
    data() {
      return {
      }
    },
  }

</script>

<style>
  @c tabbar {
    @d wrap {
      text-align: center;
      color: red;
    }
  }
</style>
