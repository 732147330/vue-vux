<template lang="jade">
  -var c = 'drawer'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    x-header This is the page title.
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    x-header(title="use prop:title")
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br
    x-header(:left-options="{showBack: false}") do not show Back
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br
    x-header(:left-options="{backText: ''}") set empty back text
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br
    x-header(:right-options="{showMore: true}", @on-click-more="showMenus = true") with more menu
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br
    x-header with right link
      a(slot="right") Feedback
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br
    x-header long long long long long long long text
      a(slot="right") Feedback
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    br
    x-header with left slot
      a(slot="left") Close
    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码
    br
    x-header
      span overwrite-left
      x-icon(slot="overwrite-left", type="navicon", size="35", style="fill:#fff;position:relative;top:-8px;left:-3px;")
    x-button(mini, plain, type="primary", @click.native="copyCode09()") 复制代码
    br
    x-header(style="background-color:#000;") custom background color
    x-button(mini, plain, type="primary", @click.native="copyCode10()") 复制代码
    br
    x-header(title="slot:overwrite-title")
      div(class="overwrite-title-demo", slot="overwrite-title")
        button-tab
          button-tab-item(selected) A
          button-tab-item B
    div(transfer-dom)
      actionsheet(:menus="menus", v-model="showMenus", show-cancel)

    x-button(mini, plain, type="primary", @click.native="copyCode11()") 复制代码
    x-button(mini, plain, @click.native="copyCode12()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode13()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XHeader, Actionsheet, ButtonTab, ButtonTabItem, XButton } from 'vux'
  export default {
    components: { XHeader, Actionsheet, ButtonTab, ButtonTabItem, XButton },
    data() {
      return {
        tempCode: '',
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
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
        this.tempCode = '    x-header This is the page title.';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    x-header(title="use prop:title")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    x-header(:left-options="{showBack: false}") do not show Back';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  x-header(:left-options="{backText: \'\'}") set empty back text';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  x-header(:right-options="{showMore: true}", @on-click-more="showMenus = true") with more menu\n' +
          '\n' +
          '    div(transfer-dom)\n' +
          '      actionsheet(:menus="menus", v-model="showMenus", show-cancel)';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '  x-header with right link\n' +
          '      a(slot="right") Feedback';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '   x-header long long long long long long long text\n' +
          '      a(slot="right") Feedback';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '    x-header with left slot\n' +
          '      a(slot="left") Close';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = '  x-header\n' +
          '      span overwrite-left\n' +
          '      x-icon(slot="overwrite-left", type="navicon", size="35", style="fill:#fff;position:relative;top:-8px;left:-3px;")';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode = '    x-header(style="background-color:#000;") custom background color';
        this.copyCodeMethod();
      },
      copyCode11 () {
        this.tempCode = '    x-header(title="slot:overwrite-title")\n' +
          '      div(class="overwrite-title-demo", slot="overwrite-title")\n' +
          '        button-tab\n' +
          '          button-tab-item(selected) A\n' +
          '          button-tab-item B';
        this.copyCodeMethod();
      },
      copyCode12 () {
        this.tempCode = '  import { XHeader, Actionsheet, ButtonTab, ButtonTabItem } from \'vux\'\n' +
          '  export default {\n' +
          '    components: { XHeader, Actionsheet, ButtonTab, ButtonTabItem },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        menus: {\n' +
          '          menu1: \'Take Photo\',\n' +
          '          menu2: \'Choose from photos\'\n' +
          '        },\n' +
          '        showMenus: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode13 () {
        this.tempCode = ' .overwrite-title-demo {\n' +
          '        margin-top: 5px;\n' +
          '      }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c drawer {
    @d wrap {
      .overwrite-title-demo {
        margin-top: 5px;
      }
    }
  }
</style>
