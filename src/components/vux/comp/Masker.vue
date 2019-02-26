<template lang="jade">
  -var c = 'masker'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="margin: 10px;overflow: hidden;", v-for="item in list")
      masker(style="border-radius: 2px;")
        div(class="m-img", :style="{backgroundImage: 'url(' + item.img + ')'}")
        div(slot="content", class="m-title")
          | {{item.title}}
          br
          span(class="m-time") 2016-03-18
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    div(style="margin: 10px;overflow: hidden;")
      masker(style="border-radius: 2px;", color="F9C90C", :opacity="0.8")
        div(class="m-img", style="background-image:url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)")
        div(slot="content", class="m-title")
          | VUX
          br
          span(class="m-time") 2016-03-18

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode04()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Masker, XButton } from 'vux';
  export default {
    components: { Masker, XButton },
    data() {
      return {
        tempCode: '',
        list: [{
          title: '洗颜新潮流！人气洁面皂排行榜',
          img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
        }, {
          title: '美容用品 & 日用品（上）',
          img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
        }, {
          title: '远离车内毒气，日本车载空气净化器精选',
          img: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
        }]
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
        this.tempCode = '  div(style="margin: 10px;overflow: hidden;", v-for="item in list")\n' +
          '      masker(style="border-radius: 2px;")\n' +
          '        div(class="m-img", :style="{backgroundImage: \'url(\' + item.img + \')\'}")\n' +
          '        div(slot="content", class="m-title")\n' +
          '          | {{item.title}}\n' +
          '          br\n' +
          '          span(class="m-time") 2016-03-18';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' div(style="margin: 10px;overflow: hidden;")\n' +
          '      masker(style="border-radius: 2px;", color="F9C90C", :opacity="0.8")\n' +
          '        div(class="m-img", style="background-image:url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)")\n' +
          '        div(slot="content", class="m-title")\n' +
          '          | VUX\n' +
          '          br\n' +
          '          span(class="m-time") 2016-03-18';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  import { Masker, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Masker, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        list: [{\n' +
          '          title: \'洗颜新潮流！人气洁面皂排行榜\',\n' +
          '          img: \'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg\'\n' +
          '        }, {\n' +
          '          title: \'美容用品 & 日用品（上）\',\n' +
          '          img: \'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg\'\n' +
          '        }, {\n' +
          '          title: \'远离车内毒气，日本车载空气净化器精选\',\n' +
          '          img: \'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg\'\n' +
          '        }]\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '.m-img {\n' +
          '  padding-bottom: 33%;\n' +
          '  display: block;\n' +
          '  position: relative;\n' +
          '  max-width: 100%;\n' +
          '  background-size: cover;\n' +
          '  background-position: center center;\n' +
          '  cursor: pointer;\n' +
          '  border-radius: 2px;\n' +
          '}\n' +
          '\n' +
          '.m-title {\n' +
          '  color: #fff;\n' +
          '  text-align: center;\n' +
          '  text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n' +
          '  font-weight: 500;\n' +
          '  font-size: 16px;\n' +
          '  position: absolute;\n' +
          '  left: 0;\n' +
          '  right: 0;\n' +
          '  width: 100%;\n' +
          '  text-align: center;\n' +
          '  top: 50%;\n' +
          '  transform: translateY(-50%);\n' +
          '}\n' +
          '\n' +
          '.m-time {\n' +
          '  font-size: 12px;\n' +
          '  padding-top: 4px;\n' +
          '  border-top: 1px solid #f0f0f0;\n' +
          '  display: inline-block;\n' +
          '  margin-top: 5px;\n' +
          '}';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c masker {
    @d wrap {
      .m-img {
        padding-bottom: 33%;
        display: block;
        position: relative;
        max-width: 100%;
        background-size: cover;
        background-position: center center;
        cursor: pointer;
        border-radius: 2px;
      }

      .m-title {
        color: #fff;
        text-align: center;
        text-shadow: 0 0 2px rgba(0, 0, 0, .5);
        font-weight: 500;
        font-size: 16px;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
      }

      .m-time {
        font-size: 12px;
        padding-top: 4px;
        border-top: 1px solid #f0f0f0;
        display: inline-block;
        margin-top: 5px;
      }
    }
  }
</style>
