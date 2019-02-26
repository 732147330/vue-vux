<template lang="jade">
  -var c = 'x-button'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider default
    box(gap="10px 10px")
      x-button submit
      x-button(type="primary") primary
      x-button(type="warn") Delete
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    divider link
    x-button(type="primary", link="/demo") Go to demo list
    x-button(type="default", link="BACK") Back
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    divider action type
    x-button(type="primary", action-type="button") submit
    x-button(type="warn", action-type="reset") reset
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    divider loading
    x-button(type="default", show-loading) submit
    x-button(type="primary", show-loading) submit
    x-button(type="warn", show-loading) submit
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    divider mini
    x-button(mini) submit
    x-button(mini type="primary") primary
    x-button(mini type="warn") Delete
    br
    x-button(mini plain) submit
    x-button(mini plain type="primary") primary
    x-button(mini plain type="warn") primary
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br


    divider plain
    x-button(plain) submit
    x-button(plain type="primary") primary
    x-button(plain type="warn") warn
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br

    divider you can customize styles
    x-button(plain type="primary", style="border-radius:99px;") primary
    x-button(plain type="primary", class="custom-primary-red") primary
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    br

    divider disabled
    x-button(disabled) disable submit
    x-button(type="primary", disabled) disable primary
    x-button(type="warn", disabled) disable Delete
    x-button(mini disabled) disable mini submit
    x-button(mini type="primary", disabled) disable mini primary
    x-button(mini type="warn", disabled) disable mini Delete
    x-button(plain disabled) disable plain
    x-button(plain type="primary", disabled) disable plain primary
    br
    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码
    br

    divider use :text and :disabled
    x-button(:text="submit001", :disabled="disable001", @click.native="processButton001", type="primary")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode09()") 复制代码
    br

    divider combined with flexbox
    flexbox
      flexbox-item
        x-button(type="primary") primary
      flexbox-item
        x-button(type="warn") Delete
    br
    x-button(mini, plain, type="primary", @click.native="copyCode10()") 复制代码
    br

    divider combined with flexbox
    flexbox
      flexbox-item
        x-button(type="default") default
      flexbox-item
        x-button(type="primary") primary
      flexbox-item
        x-button(type="warn") Delete
    br
    x-button(mini, plain, type="primary", @click.native="copyCode11()") 复制代码
    br

    divider iOS Gradients(v2.7.4)
    box(gap="10px 10px")
      x-button(:gradients="['#1D62F0', '#19D5FD']") iOS Gradients
      x-button(:gradients="['#A644FF', '#FC5BC4']") iOS Gradients
      x-button(:gradients="['#FF2719', '#FF61AD']") iOS Gradients
      x-button(:gradients="['#6F1BFE', '#9479DF']") iOS Gradients
      x-button(:gradients="['#FF5E3A', '#FF9500']") iOS Gradients

    x-button(mini, plain, type="primary", @click.native="copyCode12()") 复制代码
    x-button(mini, plain, @click.native="copyCode13()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode14()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider } from 'vux';
  export default {
    components: { XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider },
    data() {
      return {
        tempCode: '',
        submit001: 'click me',
        disable001: false
      }
    },
    methods: {
      change (value) {
        console.log('change:', value)
      },
      processButton001 () {
        this.submit001 = 'processing'
        this.disable001 = true
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
        this.tempCode = '   divider default\n' +
          '    box(gap="10px 10px")\n' +
          '      x-button submit\n' +
          '      x-button(type="primary") primary\n' +
          '      x-button(type="warn") Delete\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode =  '    divider link\n' +
          '    x-button(type="primary", link="/demo") Go to demo list\n' +
          '    x-button(type="default", link="BACK") Back\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode =   '    divider action type\n' +
          '    x-button(type="primary", action-type="button") submit\n' +
          '    x-button(type="warn", action-type="reset") reset\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode =  '    divider loading\n' +
          '    x-button(type="default", show-loading) submit\n' +
          '    x-button(type="primary", show-loading) submit\n' +
          '    x-button(type="warn", show-loading) submit\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode =  '    divider mini\n' +
          '    x-button(mini) submit\n' +
          '    x-button(mini type="primary") primary\n' +
          '    x-button(mini type="warn") Delete\n' +
          '    br\n' +
          '    x-button(mini plain) submit\n' +
          '    x-button(mini plain type="primary") primary\n' +
          '    x-button(mini plain type="warn") primary\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '    divider plain\n' +
          '    x-button(plain) submit\n' +
          '    x-button(plain type="primary") primary\n' +
          '    x-button(plain type="warn") warn\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '    divider you can customize styles\n' +
          '    x-button(plain type="primary", style="border-radius:99px;") primary\n' +
          '    x-button(plain type="primary", class="custom-primary-red") primary\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode =    '    divider disabled\n' +
          '    x-button(disabled) disable submit\n' +
          '    x-button(type="primary", disabled) disable primary\n' +
          '    x-button(type="warn", disabled) disable Delete\n' +
          '    x-button(mini disabled) disable mini submit\n' +
          '    x-button(mini type="primary", disabled) disable mini primary\n' +
          '    x-button(mini type="warn", disabled) disable mini Delete\n' +
          '    x-button(plain disabled) disable plain\n' +
          '    x-button(plain type="primary", disabled) disable plain primary\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode =     '    divider use :text and :disabled\n' +
          '    x-button(:text="submit001", :disabled="disable001", @click.native="processButton001", type="primary")\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode =  '    divider combined with flexbox\n' +
          '    flexbox\n' +
          '      flexbox-item\n' +
          '        x-button(type="primary") primary\n' +
          '      flexbox-item\n' +
          '        x-button(type="warn") Delete\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode11 () {
        this.tempCode =    '    divider combined with flexbox\n' +
          '    flexbox\n' +
          '      flexbox-item\n' +
          '        x-button(type="default") default\n' +
          '      flexbox-item\n' +
          '        x-button(type="primary") primary\n' +
          '      flexbox-item\n' +
          '        x-button(type="warn") Delete\n' +
          '    br\n'  ;
        this.copyCodeMethod();
      },
      copyCode12 () {
        this.tempCode =  '    divider iOS Gradients(v2.7.4)\n' +
          '    box(gap="10px 10px")\n' +
          '      x-button(:gradients="[\'#1D62F0\', \'#19D5FD\']") iOS Gradients\n' +
          '      x-button(:gradients="[\'#A644FF\', \'#FC5BC4\']") iOS Gradients\n' +
          '      x-button(:gradients="[\'#FF2719\', \'#FF61AD\']") iOS Gradients\n' +
          '      x-button(:gradients="[\'#6F1BFE\', \'#9479DF\']") iOS Gradients\n' +
          '      x-button(:gradients="[\'#FF5E3A\', \'#FF9500\']") iOS Gradients';
        this.copyCodeMethod();
      },
      copyCode13 () {
        this.tempCode = 'import { XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { XButton, Box, GroupTitle, Group, Flexbox, FlexboxItem, Divider },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        submit001: \'click me\',\n' +
          '        disable001: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      change (value) {\n' +
          '        console.log(\'change:\', value)\n' +
          '      },\n' +
          '      processButton001 () {\n' +
          '        this.submit001 = \'processing\'\n' +
          '        this.disable001 = true\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode14 () {
        this.tempCode = '  .custom-primary-red {\n' +
          '        border-radius: 99px!important;\n' +
          '        border-color: #CE3C39!important;\n' +
          '        color: #CE3C39!important;\n' +
          '        &:active {\n' +
          '          border-color: rgba(206, 60, 57, 0.6)!important;\n' +
          '          color: rgba(206, 60, 57, 0.6)!important;\n' +
          '          background-color: transparent;\n' +
          '        }\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c x-button {
    @d wrap {
      .custom-primary-red {
        border-radius: 99px!important;
        border-color: #CE3C39!important;
        color: #CE3C39!important;
        &:active {
          border-color: rgba(206, 60, 57, 0.6)!important;
          color: rgba(206, 60, 57, 0.6)!important;
          background-color: transparent;
        }
      }
    }
  }
</style>
