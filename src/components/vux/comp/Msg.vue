<template lang="jade">
  -var c = 'msg'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    msg(:title="title", :description="description", :buttons="buttons", :icon="icon")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
  import { Msg, XButton } from "vux";
  export default {
    components: { Msg, XButton },
    data() {
      return {
        tempCode: '',
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
      },

      copyCodeMethod () {
        let timer = setInterval( () => {
          var ele = document.getElementById("codeText");
          ele.select();
          document.execCommand("Copy");
          console.log("copy success!!!")
          clearInterval(timer);
        }, 500)
      },
      copyCode01 () {
        this.tempCode = '    msg(:title="title", :description="description", :buttons="buttons", :icon="icon")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { Msg } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Msg },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        title: \'操作成功\',\n' +
          '        description: \'内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a>\',\n' +
          '        icon: \'\',\n' +
          '        buttons: [{\n' +
          '          type: \'primary\',\n' +
          '          text: \'推荐操作\',\n' +
          '          onClick: this.changeIcon.bind(this)\n' +
          '        },\n' +
          '        {\n' +
          '          type: \'default\',\n' +
          '          text: \'辅助操作\',\n' +
          '          link: \'/\'\n' +
          '        }]\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      changeIcon () {\n' +
          '        if (!this.icon || this.icon === \'success\') {\n' +
          '          this.icon = \'warn\'\n' +
          '          this.title = \'操作失败\'\n' +
          '          return\n' +
          '        }\n' +
          '        if (this.icon === \'warn\') {\n' +
          '          this.icon = \'info\'\n' +
          '          this.title = \'温馨提示\'\n' +
          '          return\n' +
          '        }\n' +
          '        if (this.icon === \'info\') {\n' +
          '          this.icon = \'waiting\'\n' +
          '          this.title = \'等待中……\'\n' +
          '          return\n' +
          '        }\n' +
          '        if (this.icon === \'waiting\') {\n' +
          '          this.icon = \'success\'\n' +
          '          this.title = \'操作成功\'\n' +
          '        }\n' +
          '      },\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c msg {
    @d wrap {

    }
  }
</style>
