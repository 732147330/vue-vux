<template lang="jade">
  -var c = 'toggleText'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(class="text-body", :style="scrollable ? 'height:375px;overflow:scroll;' : ''")
      spinner(name="crescent", v-show="text !== '初始化完成(点击我关闭)'")
      <br>
      span {{ text }}
      div(v-if="scrollable" style="height:1000px;")
</template>

<script>
  import { Spinner } from 'vux'
  export default {
    components: { Spinner },
    props: {
      scrollable: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      setTimeout(() => {
        this.text = '初始化完成(点击我关闭)'
      }, 2000)
    },
    data () {
      return {
        text: '初始化中~'
      }
    }
  }
</script>

<style>
  @c toggleText {
    @d wrap {
    }
  }
  .text-body {
    padding: 30px 0;
    color: #666;
    text-align: center;
  }
</style>
