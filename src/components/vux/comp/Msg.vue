<template lang="jade">
  -var c = 'msg'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    msg(:title="title", :description="description", :buttons="buttons", :icon="icon")

</template>

<script>
  import { Msg } from "vux";
  export default {
    components: { Msg },
    data() {
      return {
        title: '操作成功',
        description: '内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a>',
        icon: '',
        buttons: [{
          type: 'primary',
          text: '推荐操作',
          onClick: this.changeIcon.bind(this)
        },
        {
          type: 'default',
          text: '辅助操作',
          link: '/'
        }]
      }
    },
    methods: {
      changeIcon () {
        if (!this.icon || this.icon === 'success') {
          this.icon = 'warn'
          this.title = '操作失败'
          return
        }
        if (this.icon === 'warn') {
          this.icon = 'info'
          this.title = '温馨提示'
          return
        }
        if (this.icon === 'info') {
          this.icon = 'waiting'
          this.title = '等待中……'
          return
        }
        if (this.icon === 'waiting') {
          this.icon = 'success'
          this.title = '操作成功'
        }
      }
    },
  }

</script>

<style>
  @c msg {
    @d wrap {

    }
  }
</style>
