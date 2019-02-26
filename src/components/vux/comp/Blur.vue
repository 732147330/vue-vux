<template lang="jade">
  -var c = 'blur'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    blur(:blur-amount=40, :url="url")
      p(class="center")
        img(:src="url")
    flexbox(:gutter="0")
      flexbox-item(v-for="(img, index) in images", :key="index")
        img(:src="img", style="width:100%", @click="url = img")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Flexbox, FlexboxItem, Blur, XButton } from 'vux';
  export default {
    components: { Flexbox, FlexboxItem, Blur, XButton },
    data() {
      return {
        tempCode: '',
        images: [
          'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
          'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
        ],
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
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
        this.tempCode = ' blur(:blur-amount=40, :url="url")\n' +
          '      p(class="center")\n' +
          '        img(:src="url")\n' +
          '    flexbox(:gutter="0")\n' +
          '      flexbox-item(v-for="(img, index) in images", :key="index")\n' +
          '        img(:src="img", style="width:100%", @click="url = img")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { Flexbox, FlexboxItem, Blur, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Flexbox, FlexboxItem, Blur, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        images: [\n' +
          '          \'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg\',\n' +
          '          \'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg\',\n' +
          '          \'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg\'\n' +
          '        ],\n' +
          '        url: \'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '.center {\n' +
          '  text-align: center;\n' +
          '  padding-top: 20px;\n' +
          '  color: #fff;\n' +
          '  font-size: 18px;\n' +
          '}\n' +
          '.center img {\n' +
          '  width: 100px;\n' +
          '  height: 100px;\n' +
          '  border-radius: 50%;\n' +
          '  border: 4px solid #ececec;\n' +
          '}';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c blur {
    @d wrap {
      .center {
        text-align: center;
        padding-top: 20px;
        color: #fff;
        font-size: 18px;
      }
      .center img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 4px solid #ececec;
      }
    }
  }
</style>
