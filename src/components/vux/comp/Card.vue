<template lang="jade">
  -var c = 'card'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider 带有标题和内容的简单卡片
    card(:header="{title:'我的钱包'}")
      div(slot="content", class="card-demo-flex card-demo-content01")
        div(class="vux-1px-r")
          span 1130
          br
          | 京豆
        div(class="vux-1px-r")
          span 15
          br
          | 京东券
        div(class="vux-1px-r")
          span 0
          br
          | 京东卡/E卡
        div
          span 88
          br
          | 七天待还
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    divider 带有footer的卡片
    card(:header="{title:'商品详情'}", :footer="{title:'查看更多'}")
      p(slot="content", class="card-padding") 自定义内容
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    divider 使用header slot 和content slot
    card
      img(slot="header", src="http://placeholder.qiniudn.com/640x300", style="width:100%;display:block;")
      div(slot="content", class="card-padding")
        p(style="color:#999;font-size:12px;") Posted on January 21, 2015
        p(style="font-size:14px;line-height:1.2;") Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode05()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
  import { Divider, Card, XButton } from 'vux'

  export default {
    components: { Divider, Card, XButton } ,
    data() {
      return {
        tempCode: '',
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
        this.tempCode = 'divider 带有标题和内容的简单卡片\n' +
          '    card(:header="{title:\'我的钱包\'}")\n' +
          '      div(slot="content", class="card-demo-flex card-demo-content01")\n' +
          '        div(class="vux-1px-r")\n' +
          '          span 1130\n' +
          '          br\n' +
          '          | 京豆\n' +
          '        div(class="vux-1px-r")\n' +
          '          span 15\n' +
          '          br\n' +
          '          | 京东券\n' +
          '        div(class="vux-1px-r")\n' +
          '          span 0\n' +
          '          br\n' +
          '          | 京东卡/E卡\n' +
          '        div\n' +
          '          span 88\n' +
          '          br\n' +
          '          | 七天待还\n' +
          '    br';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' divider 带有footer的卡片\n' +
          '    card(:header="{title:\'商品详情\'}", :footer="{title:\'查看更多\'}")\n' +
          '      p(slot="content", class="card-padding") 自定义内容\n' +
          '    br';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' divider 使用header slot 和content slot\n' +
          '    card\n' +
          '      img(slot="header", src="http://placeholder.qiniudn.com/640x300", style="width:100%;display:block;")\n' +
          '      div(slot="content", class="card-padding")\n' +
          '        p(style="color:#999;font-size:12px;") Posted on January 21, 2015\n' +
          '        p(style="font-size:14px;line-height:1.2;") Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  import { Divider, Card, XButton } from \'vux\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { Divider, Card, XButton } ,\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '    .card-demo-flex {\n' +
          '        display: flex;\n' +
          '        flex-direction: row;\n' +
          '      }\n' +
          '      .card-demo-content01 {\n' +
          '        padding: 10px 0;\n' +
          '      }\n' +
          '      .card-padding {\n' +
          '        padding: 15px;\n' +
          '      }\n' +
          '      .card-demo-flex > div {\n' +
          '        flex: 1;\n' +
          '        text-align: center;\n' +
          '        font-size: 12px;\n' +
          '      }\n' +
          '      .card-demo-flex span {\n' +
          '        color: #f74c31;\n' +
          '      }\n' +
          '      .vux-1px-r {\n' +
          '        border-right: 1px solid #E6E6E6;\n' +
          '      }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c card {
    @d wrap {
      .card-demo-flex {
        display: flex;
        flex-direction: row;
      }
      .card-demo-content01 {
        padding: 10px 0;
      }
      .card-padding {
        padding: 15px;
      }
      .card-demo-flex > div {
        flex: 1;
        text-align: center;
        font-size: 12px;
      }
      .card-demo-flex span {
        color: #f74c31;
      }
      .vux-1px-r {
        border-right: 1px solid #E6E6E6;
      }
    }
  }
</style>


