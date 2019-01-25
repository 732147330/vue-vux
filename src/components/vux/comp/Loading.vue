<template lang="jade">
  -var c = 'loading'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-switch(title="显示", v-model="show1", @on-change="show1change")
      x-switch(title="无提示文字", v-model="show2", @on-change="show2change")
    div(transfer-dom)
      loading(:show="show1", :text="text1")
    div(transfer-dom)
      loading(:show="show2", text="")

    div(style="padding: 15px;")
      x-button(@click.native="showLoading", type="primary") 显示loading（2s后关闭）
    div(style="padding: 15px;")
      x-button(@click.native="showDelayLoading", type="primary") 延时5s后显示




</template>

<script>
  import { Loading, XSwitch, XButton, Group } from "vux";
  export default {
    components: { Loading, XSwitch, XButton, Group },
    data() {
      return {
        show1: false,
        show2: false,
        text1: '加载中'
      }
    },
    methods: {
      showLoading () {
        this.$vux.loading.show({
          text: '加载中'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 2000)
      },
      showDelayLoading () {
        this.$vux.loading.show({
          text: '加载中',
          delay: 5e3
        })
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 10000)
      },
      show1change (val) {
        if (val) {
          tick(0, (percent) => {
            if (percent === 100) {
              this.show1 = false
              return
            }
            this.text1 = `${percent}%`
          })
        }
      },
      show2change (val) {
        if (val) {
          tick(0, (percent) => {
            if (percent === 100) {
              this.show2 = false
              return
            }
          })
        }
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        console.log(this.$vux.loading.isVisible())
      }, 1000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
  }

  function tick (i, cb) {
    setTimeout(function () {
      i++
      cb(i)
      if (i < 100) {
        tick(i, cb)
      }
    }, 10)
  }
</script>

<style>
  @c loading {
    @d wrap {

    }
  }
</style>
