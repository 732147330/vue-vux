<template lang="jade">
  -var c = 'datatimeView'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    datetime-view(v-model="value1", ref="datetime", :format="format")
    p(class="info") 选中值：2017-10-11
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    div(style="padding:15px;")
      x-button(@click.native="changeValue('2017-11-11')", :disabled="format !== 'YYYY-MM-DD'", type="primary") 设置为 2017-11-11
      x-button(@click.native="changeValue('2016-08-08')", :disabled="format !== 'YYYY-MM-DD'", type="primary") 设置为2016-08-08
      x-button(@click.native="toggleFormat", :disabled="format === 'YYYY-MM-DD HH'", type="primary")  切换时间格式
      x-button(@click.native="changeFormatAndValue", type="primary")  时间格式设置为 2019-10-23 10
      x-button(@click.native="showPopup = true", type="primary")  显示弹窗样式
    div(transfer-dom)
      popup(v-model="showPopup")
        datetime-view(v-model="value2")

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode04()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { DatetimeView, XButton, Popup } from "vux";
  export default {
    components: { DatetimeView, XButton, Popup },
    data() {
      return {
        tempCode: '',
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
        this.tempCode = '    datetime-view(v-model="value1", ref="datetime", :format="format")\n' +
          '    p(class="info") 选中值：2017-10-11 ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   div(style="padding:15px;")\n' +
          '      x-button(@click.native="changeValue(\'2017-11-11\')", :disabled="format !== \'YYYY-MM-DD\'", type="primary") 设置为 2017-11-11\n' +
          '      x-button(@click.native="changeValue(\'2016-08-08\')", :disabled="format !== \'YYYY-MM-DD\'", type="primary") 设置为2016-08-08\n' +
          '      x-button(@click.native="toggleFormat", :disabled="format === \'YYYY-MM-DD HH\'", type="primary")  切换时间格式\n' +
          '      x-button(@click.native="changeFormatAndValue", type="primary")  时间格式设置为 2019-10-23 10\n' +
          '      x-button(@click.native="showPopup = true", type="primary")  显示弹窗样式\n' +
          '    div(transfer-dom)\n' +
          '      popup(v-model="showPopup")\n' +
          '        datetime-view(v-model="value2")\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  import { DatetimeView, XButton, Popup } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { DatetimeView, XButton, Popup },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        value1: \'2017-10-11\',\n' +
          '        value2: \'2017-10-24\',\n' +
          '        showPopup: false,\n' +
          '        format: \'YYYY-MM-DD\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      toggleFormat () {\n' +
          '        if (this.format === \'YYYY-MM-DD\') {\n' +
          '          this.format = \'YYYY-MM-DD HH:mm\'\n' +
          '        } else {\n' +
          '          this.format = \'YYYY-MM-DD\'\n' +
          '        }\n' +
          '      },\n' +
          '      changeValue (val) {\n' +
          '        this.value1 = val\n' +
          '        this.$refs.datetime.render()\n' +
          '      },\n' +
          '      changeFormatAndValue () {\n' +
          '        this.format = \'YYYY-MM-DD HH\'\n' +
          '        this.$nextTick(() => {\n' +
          '          this.value1 = \'2019-10-23 10\'\n' +
          '          this.$refs.datetime.render()\n' +
          '        })\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  .info {\n' +
          '        padding-top: 15px;\n' +
          '        text-align: center;\n' +
          '        color: #666;\n' +
          '      }';
        this.copyCodeMethod();
      },
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
