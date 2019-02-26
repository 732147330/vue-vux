<template lang="jade">
  -var c = 'marquee'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider 默认
    marquee
      marquee-item(v-for="i in 5", :key="i", @click.native="onClick(i)", class="align-middle") hello world {{i}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    divider 在cell中使用
    group
      cell(title="公告")
        marquee
          marquee-item(v-for="i in 5", :key="i", @click.native="onClick(i)") JavaScript is the best language {{i}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    divider 异步数据
    marquee
      marquee-item(v-for="i in asyncCount", :key="i", @click.native="onClick(i)", class="align-middle") hello world {{i}}



    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, Cell, Marquee, MarqueeItem, Divider, XButton } from 'vux';
  export default {
    components: { Group, Cell, Marquee, MarqueeItem, Divider, XButton },
    data() {
      return {
        tempCode: '',
        asyncCount: 0
      }
    },
    mounted () {
      setTimeout(() => {
        this.asyncCount = 5
      }, 1000)
    },
    methods: {
      onClick (i) {
        console.log(i)
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
        this.tempCode = '    divider 默认\n' +
          '    marquee\n' +
          '      marquee-item(v-for="i in 5", :key="i", @click.native="onClick(i)", class="align-middle") hello world {{i}}';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    divider 在cell中使用\n' +
          '    group\n' +
          '      cell(title="公告")\n' +
          '        marquee\n' +
          '          marquee-item(v-for="i in 5", :key="i", @click.native="onClick(i)") JavaScript is the best language {{i}}';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' divider 异步数据\n' +
          '    marquee\n' +
          '      marquee-item(v-for="i in asyncCount", :key="i", @click.native="onClick(i)", class="align-middle") hello world {{i}}';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' import { Group, Cell, Marquee, MarqueeItem, Divider, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, Cell, Marquee, MarqueeItem, Divider, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        asyncCount: 0\n' +
          '      }\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      setTimeout(() => {\n' +
          '        this.asyncCount = 5\n' +
          '      }, 1000)\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onClick (i) {\n' +
          '        console.log(i)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c marquee {
    @d wrap {
      text-align: center;
    }
  }
</style>
