<template lang="jade">
  -var c = 'drawer'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    h3 左上角那个三道横杆就是可以打开drawer(代码引用详情请参考
      font(color='black') App.vue
      | )

</template>

<script>
  export default {
    data() {
      return {
      }
    },
  }

</script>

<style>
  @c drawer {
    @d wrap {
      text-align: center;
      color: red;
    }
  }
</style>
