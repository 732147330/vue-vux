<template lang="jade">
  -var c = 'qrcode'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider 默认类型为 img，可以在微信里长按识别
    qrcode(value="https://vux.li?x-page=demo_qrcode", type="img")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    br
    divider 类型为 canvas
    qrcode(value="https://vux.li?x-page=demo_qrcode")
    br
    qrcode(:value="value", :fg-color="fgColor")
    br
    span 类型为 canvas: {{value}}
    br
    span 当前颜色: {{fgColor}}
    br

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Qrcode, Divider, XButton } from 'vux';
  export default {
    components: { Qrcode, Divider, XButton },
    data() {
      return {
        tempCode: '',
        value: 'https://vux.li',
        fgColor: '#000000'
      }
    },
    mounted () {
      setInterval(() => {
        this.value = `https://vux.li?t=${Math.random()}`
        this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      }, 1000)
    },
    methods: {
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
        this.tempCode = 'divider 默认类型为 img，可以在微信里长按识别\n' +
          '    qrcode(value="https://vux.li?x-page=demo_qrcode", type="img")\n' +
          '    br';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   br\n' +
          '    divider 类型为 canvas\n' +
          '    qrcode(value="https://vux.li?x-page=demo_qrcode")\n' +
          '    br\n' +
          '    qrcode(:value="value", :fg-color="fgColor")\n' +
          '    br\n' +
          '    span 类型为 canvas: {{value}}\n' +
          '    br\n' +
          '    span 当前颜色: {{fgColor}}\n' +
          '    br';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  import { Qrcode, Divider, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Qrcode, Divider, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        value: \'https://vux.li\',\n' +
          '        fgColor: \'#000000\'\n' +
          '      }\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      setInterval(() => {\n' +
          '        this.value = `https://vux.li?t=${Math.random()}`\n' +
          '        this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`\n' +
          '      }, 1000)\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      }
    }
  }

</script>

<style>
  @c qrcode {
    @d wrap {
      text-align:center;
      margin-top:15px;
    }
  }
</style>
