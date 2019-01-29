<template lang="jade">
  -var c = 'datatimeView'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    datetime-view(v-model="value1", ref="datetime", :format="format")
    p(class="info") 选中值：2017-10-11
    div(style="padding:15px;")
      x-button(@click.native="changeValue('2017-11-11')", :disabled="format !== 'YYYY-MM-DD'", type="primary") 设置为 2017-11-11
      x-button(@click.native="changeValue('2016-08-08')", :disabled="format !== 'YYYY-MM-DD'", type="primary") 设置为2016-08-08
      x-button(@click.native="toggleFormat", :disabled="format === 'YYYY-MM-DD HH'", type="primary")  切换时间格式
      x-button(@click.native="changeFormatAndValue", type="primary")  时间格式设置为 2019-10-23 10
      x-button(@click.native="showPopup = true", type="primary")  显示弹窗样式
    //div(v-transfer-dom)
      popup(v-model="showPopup")
        datetime-view(v-model="value2")

</template>

<script>
  import { DatetimeView, XButton, Popup } from "vux";
  export default {
    components: { DatetimeView, XButton, Popup },
    data() {
      return {
        value1: '2017-10-11',
        value2: '2017-10-24',
        showPopup: false,
        format: 'YYYY-MM-DD'
      }
    },
    methods: {
      toggleFormat () {
        if (this.format === 'YYYY-MM-DD') {
          this.format = 'YYYY-MM-DD HH:mm'
        } else {
          this.format = 'YYYY-MM-DD'
        }
      },
      changeValue (val) {
        this.value1 = val
        this.$refs.datetime.render()
      },
      changeFormatAndValue () {
        this.format = 'YYYY-MM-DD HH'
        this.$nextTick(() => {
          this.value1 = '2019-10-23 10'
          this.$refs.datetime.render()
        })
      }
    }
  }

</script>

<style>
  @c datatimeView {
    @d wrap {
      .info {
        padding-top: 15px;
        text-align: center;
        color: #666;
      }
    }
  }
</style>
