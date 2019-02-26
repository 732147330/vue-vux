<template lang="jade">
  -var c = 'form-preview'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    form-preview(header-label="付款金额", header-value="¥2400.00", :body-items="list", :footer-buttons="buttons1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    form-preview(header-label="付款金额", header-value="¥2400.00", :body-items="list", :footer-buttons="buttons2", name="demo")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br
    form-preview(header-label="付款金额", header-value="¥2400.00", :body-items="list")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { FormPreview, XButton } from 'vux';
  export default {
    components: { FormPreview, XButton },
    data() {
      return {
        tempCode: '',
        list: [{
          label: '商品',
          value: '电动打蛋机'
        }, {
          label: '标题标题',
          value: '名字名字名字'
        }, {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }],
        buttons1: [{
          style: 'default',
          text: '辅助操作'
        }, {
          style: 'primary',
          text: '跳转到首页',
          link: '/'
        }],
        buttons2: [{
          style: 'primary',
          text: '点击事件',
          onButtonClick: (name) => {
            alert(`clicking ${name}`)
          }
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
        this.tempCode = '  form-preview(header-label="付款金额", header-value="¥2400.00", :body-items="list", :footer-buttons="buttons1")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    form-preview(header-label="付款金额", header-value="¥2400.00", :body-items="list", :footer-buttons="buttons2", name="demo")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '     form-preview(header-label="付款金额", header-value="¥2400.00", :body-items="list")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' import { FormPreview, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { FormPreview, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        list: [{\n' +
          '          label: \'商品\',\n' +
          '          value: \'电动打蛋机\'\n' +
          '        }, {\n' +
          '          label: \'标题标题\',\n' +
          '          value: \'名字名字名字\'\n' +
          '        }, {\n' +
          '          label: \'标题标题\',\n' +
          '          value: \'很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字\'\n' +
          '        }],\n' +
          '        buttons1: [{\n' +
          '          style: \'default\',\n' +
          '          text: \'辅助操作\'\n' +
          '        }, {\n' +
          '          style: \'primary\',\n' +
          '          text: \'跳转到首页\',\n' +
          '          link: \'/\'\n' +
          '        }],\n' +
          '        buttons2: [{\n' +
          '          style: \'primary\',\n' +
          '          text: \'点击事件\',\n' +
          '          onButtonClick: (name) => {\n' +
          '            alert(`clicking ${name}`)\n' +
          '          }\n' +
          '        }]\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  } ';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c form-preview {
    @d wrap {

    }
  }
</style>
