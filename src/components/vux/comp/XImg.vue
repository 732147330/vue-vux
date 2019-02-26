<template lang="jade">
  -var c = 'x-img'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(v-for="src in list", style="background-color:yellow;text-align:center;")
      span(style="font-size:20px;") Loading
      x-img(:src="src", :webp-src="`${src}?type=webp`", @on-success="success", @on-error="error", class="ximg-demo", error-class="ximg-error", :offset="-100", container="#vux_view_box_body")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XImg, XButton } from 'vux';
  export default {
    components: { XImg, XButton },
    data() {
      return {
        tempCode: '',
        list: [
          'https://o5omsejde.qnssl.com/demo/test1.jpg',
          'https://o5omsejde.qnssl.com/demo/test2.jpg',
          'https://o5omsejde.qnssl.com/demo/test0.jpg',
          'https://o5omsejde.qnssl.com/demo/test4.jpg',
          'https://o5omsejde.qnssl.com/demo/test5.jpg',
          'https://o5omsejde.qnssl.com/demo/test6.jpg',
          'https://o5omsejde.qnssl.com/demo/test7.jpg',
          'https://o5omsejde.qnssl.com/demo/test8.jpg'
        ]
      }
    },
    methods: {
      success (src, ele) {
        console.log('success load', src)
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
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
        this.tempCode = 'div(v-for="src in list", style="background-color:yellow;text-align:center;")\n' +
          '      span(style="font-size:20px;") Loading\n' +
          '      x-img(:src="src", :webp-src="`${src}?type=webp`", @on-success="success", @on-error="error", class="ximg-demo", error-class="ximg-error", :offset="-100", container="#vux_view_box_body")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { XImg, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { XImg, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        list: [\n' +
          '          \'https://o5omsejde.qnssl.com/demo/test1.jpg\',\n' +
          '          \'https://o5omsejde.qnssl.com/demo/test2.jpg\',\n' +
          '          \'https://o5omsejde.qnssl.com/demo/test0.jpg\',\n' +
          '          \'https://o5omsejde.qnssl.com/demo/test4.jpg\',\n' +
          '          \'https://o5omsejde.qnssl.com/demo/test5.jpg\',\n' +
          '          \'https://o5omsejde.qnssl.com/demo/test6.jpg\',\n' +
          '          \'https://o5omsejde.qnssl.com/demo/test7.jpg\',\n' +
          '          \'https://o5omsejde.qnssl.com/demo/test8.jpg\'\n' +
          '        ]\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      success (src, ele) {\n' +
          '        console.log(\'success load\', src)\n' +
          '        const span = ele.parentNode.querySelector(\'span\')\n' +
          '        ele.parentNode.removeChild(span)\n' +
          '      },\n' +
          '      error (src, ele, msg) {\n' +
          '        console.log(\'error load\', msg, src)\n' +
          '        const span = ele.parentNode.querySelector(\'span\')\n' +
          '        span.innerText = \'load error\'\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '   .ximg-demo {\n' +
          '        width: 100%;\n' +
          '        height: auto;\n' +
          '      }\n' +
          '      .ximg-error {\n' +
          '        background-color: yellow;\n' +
          '      }\n' +
          '      .ximg-error:after {\n' +
          '        content: \'加载失败\';\n' +
          '        color: red;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c x-img {
    @d wrap {
      .ximg-demo {
        width: 100%;
        height: auto;
      }
      .ximg-error {
        background-color: yellow;
      }
      .ximg-error:after {
        content: '加载失败';
        color: red;
      }
    }
  }
</style>
