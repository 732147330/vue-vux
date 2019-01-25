<template lang="jade">
  -var c = 'confirm'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-switch(title="显示", v-model="show")
    group
      x-switch(title="显示Prompt", v-model="show3")
    group
      x-switch(title="设置默认输入文字", v-model="show5")
    group
      x-switch(title="安卓风格", v-model="show2")
    group
      x-switch(title="阻止自动关闭", v-model="show4")
    group
      x-switch(title="隐藏取消按钮", v-model="show6")

    div(transfer-dom)
      confirm(v-model="show", title="操作提示", @on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")
        p(style="text-align:center;font-size:12px;") 你确定咩？
    br

    div(transfer-dom)
      confirm(v-model="show3", show-input, title="操作提示(只能输入数字)", :input-attrs="{type: 'number'}",@on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")
    br

    div(transfer-dom)
      confirm(v-model="show5", show-input,ref="confirm5", title="操作提示", @on-cancel="onCancel", @on-confirm="onConfirm5", @on-show="onShow5", @on-hide="onHide")
    br

    div(transfer-dom)
      confirm(v-model="show2", title="操作提示",theme="android", @on-cancel="onCancel", @on-confirm="onConfirm", @on-show="onShow", @on-hide="onHide")
        p(style="text-align:center;") Holy Shit!
    br

    div(transfer-dom)
    confirm(v-model="show4", :close-on-confirm="false", title="操作提示", @on-confirm="onConfirm4")
      p(style="text-align:center;") 你确定咩？
    br

    div(transfer-dom)
    confirm(v-model="show6", :show-cancel-button="false", title="操作提示", @on-confirm="onConfirm")
      p(style="text-align:center;") 你确定咩？

    div(style="padding:15px;")
      x-button(@click.native="showPlugin" type="primary") 显示
    div(style="padding:15px;")
      x-button(@click.native="showPlugin2" type="primary") 插件形式调用
    div(style="padding:15px;")
      x-button(@click.native="showPlugin3" type="primary") 插件形式调用prompt

</template>

<script>
  import { Confirm, XButton, Group, XSwitch } from "vux";
  export default {
    components: { Confirm, XButton, Group, XSwitch },
    data() {
      return {
        show: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false
      }
    },
    methods: {
      onCancel () {
        console.log('on cancel')
      },
      onConfirm (msg) {
        console.log('on confirm')
        if (msg) {
          alert(msg)
        }
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      },
      onShow5 () {
        this.$refs.confirm5.setInputValue('default')
      },
      onConfirm5 (value) {
        this.$refs.confirm5.setInputValue('')
        this.$vux.toast.text('input value: ' + value)
      },
      onConfirm4 () {
        console.log('on confirm')
        this.$vux.loading.show({
          transition: '',
          text: '进行中'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.show4 = false
        }, 1000)
      },
      showPlugin () {
        this.$vux.confirm.show({
          title: 'Title',
          content: 'Content',
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          },
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
            console.log('plugin confirm')
          }
        })
      },
      showPlugin2 () {
        this.showPlugin()
      },
      showPlugin3 () {
        const _this = this
        this.$vux.confirm.prompt('default', {
          title: 'Title',
          onShow () {
            console.log('promt show')
            _this.$vux.confirm.setInputValue('set input value')
          },
          onHide () {
            console.log('prompt hide')
          },
          onCancel () {
            console.log('prompt cancel')
          },
          onConfirm (msg) {
            alert(msg)
          }
        })
      }

    },
    mounted () {
      this.timer = setInterval(() => {
        console.log(this.$vux.confirm.isVisible())
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }



</script>

<style>
  @c confirm {
    @d wrap {

    }
  }
</style>
