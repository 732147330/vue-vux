<template lang="jade">
  -var c = 'previewer'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    img(class="previewer-demo-img", v-for="(item, index) in list", :src="item.src", width="100", @click="show(index)")
    div(transfer-dom)
      previewer(:list="list", ref="previewer", :options="options", @on-index-change="logIndexChange")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Previewer, XButton } from 'vux';
  export default {
    components: { Previewer, XButton },
    data() {
      return {
        tempCode: '',
        list: [{
          msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          w: 800,
          h: 400
        },
          {
            msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
            src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
            w: 1200,
            h: 900
          }, {
            msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
            src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
          }],
        options: {
          getThumbBoundsFn(index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }
      }
    },
    methods: {
      logIndexChange (arg) {
        console.log(arg)
      },
      show (index) {
        this.$refs.previewer.show(index)
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
        this.tempCode = ' img(class="previewer-demo-img", v-for="(item, index) in list", :src="item.src", width="100", @click="show(index)")\n' +
          '    div(transfer-dom)\n' +
          '      previewer(:list="list", ref="previewer", :options="options", @on-index-change="logIndexChange")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { Previewer, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Previewer, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        list: [{\n' +
          '          msrc: \'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg\',\n' +
          '          src: \'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg\',\n' +
          '          w: 800,\n' +
          '          h: 400\n' +
          '        },\n' +
          '          {\n' +
          '            msrc: \'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg\',\n' +
          '            src: \'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg\',\n' +
          '            w: 1200,\n' +
          '            h: 900\n' +
          '          }, {\n' +
          '            msrc: \'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg\',\n' +
          '            src: \'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg\'\n' +
          '          }],\n' +
          '        options: {\n' +
          '          getThumbBoundsFn(index) {\n' +
          '            // find thumbnail element\n' +
          '            let thumbnail = document.querySelectorAll(\'.previewer-demo-img\')[index]\n' +
          '            // get window scroll Y\n' +
          '            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop\n' +
          '            // optionally get horizontal scroll\n' +
          '            // get position of element relative to viewport\n' +
          '            let rect = thumbnail.getBoundingClientRect()\n' +
          '            // w = width\n' +
          '            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}\n' +
          '            // Good guide on how to get element coordinates:\n' +
          '            // http://javascript.info/tutorial/coordinates\n' +
          '          }\n' +
          '        }\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      logIndexChange (arg) {\n' +
          '        console.log(arg)\n' +
          '      },\n' +
          '      show (index) {\n' +
          '        this.$refs.previewer.show(index)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      }
    }
  }

</script>

<style>
  @c previewer {
    @d wrap {

    }
  }
</style>
