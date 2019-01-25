<template lang="jade">
  -var c = 'toast'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="padding:15px;")
      x-button(@click.native="showPosition('top')", type="primary") Top
      x-button(@click.native="showPosition('middle')", type="primary") Middle
      x-button(@click.native="showPosition('bottom')", type="primary") Bottom
      x-button(@click.native="showPosition('')", type="primary") Default

    toast(v-model="showPositionValue", type="text", :time="800", is-show-mask, text="Hello World", :position="position") 基础使用

    group
      x-switch(title="基础使用（显示成功） ", v-model="show1")
      x-switch(title="显示文本", v-model="show2")
      x-switch(title="显示失败", v-model="show3")
      x-switch(title="显示警告", v-model="show4")
      x-switch(title="显示时间1s", v-model="show5")
      x-switch(title="长文本", v-model="show6")

    toast(v-model="show1", @on-hide="onHide") 默认使用（成功了！）
    toast(v-model="show2", type="text") 成功了！
    toast(v-model="show3", type="cancel") 失败了！
    toast(v-model="show4", type="warn") 警告⚠️
    toast(v-model="show5", :time="1000") 只显示1s
    toast(v-model="show6", type="text" width="20em") 这是一段很长，很长，非常长的文本～～～～～

    group(title="设置text")
      x-switch(title="显示成功", v-model="show7")
      x-switch(title="默认样式", v-model="show8")

    toast(v-model="show7", text="Hello World")
    toast(v-model="show8", type="text", text="Hello World")

    group(title="插件形式调用")
      x-switch(title="默认", v-model="show9", @on-change="onChange")
    div(style="padding:15px;")
      x-button(type="primary", @click.native="$vux.toast.text('How are you~', 'middle')") 使用文本功能

</template>

<script>
  import { XButton, Toast, Group, XSwitch } from "vux";
  export default {
    components: {XSwitch, Toast, XButton, Group, XSwitch },
    methods: {
      showPosition (position) {
        this.position = position
        this.showPositionValue = true
      },
      onHide () {
        console.log('on hide')
      },
      onChange (val) {
        const _this = this
        if (val) {
          this.$vux.toast.show({
            text: 'Hello World',
            onShow () {
              console.log('Plugin: I\'m showing')
            },
            onHide () {
              console.log('Plugin: I\'m hiding')
              _this.show9 = false
            }
          })
        } else {
          this.$vux.toast.hide()
        }
      }
    },
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        position: 'default',
        showPositionValue: false
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        console.log(this.$vux.toast.isVisible())
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }

</script>

<style>
  @c toast {
    @d wrap {

    }
  }
</style>
