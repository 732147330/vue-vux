<template lang="jade">
  -var c = 'flexbox'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider  水平
    flexbox
      flexbox-item
        div(class="flex-demo") 1
      flexbox-item
        div(class="flex-demo") 2
    br
    flexbox
      flexbox-item
        div(class="flex-demo") 1
      flexbox-item
        div(class="flex-demo") 2
      flexbox-item
        div(class="flex-demo") 3
    br
    flexbox
      flexbox-item
        div(class="flex-demo") 1
      flexbox-item
        div(class="flex-demo") 2
      flexbox-item
        div(class="flex-demo") 3
      flexbox-item
        div(class="flex-demo") 4
    br
    flexbox
      flexbox-item
        div(class="flex-demo") 1
      flexbox-item
        div(class="flex-demo") 2
      flexbox-item
        div(class="flex-demo") 3
      flexbox-item
        div(class="flex-demo") 4
      flexbox-item
        div(class="flex-demo") 5
    br
    flexbox
      flexbox-item
        div(class="flex-demo") 1
      flexbox-item
        div(class="flex-demo") 2
      flexbox-item
        div(class="flex-demo") 3
      flexbox-item
        div(class="flex-demo") 4
      flexbox-item
        div(class="flex-demo") 5
      flexbox-item
        div(class="flex-demo") 6
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    divider  水平无间隙
    flexbox(:gutter="0")
      flexbox-item
        div(class="flex-demo") 1
      flexbox-item
        div(class="flex-demo") 2
      flexbox-item
        div(class="flex-demo") 3
      flexbox-item
        div(class="flex-demo") 4
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    divider  垂直
    flexbox(orient="vertical")
      flexbox-item
        div(class="flex-demo") 1
      flexbox-item
        div(class="flex-demo") 2
      flexbox-item
        div(class="flex-demo") 3
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    divider  垂直无间隙
    flexbox(orient="vertical", :gutter="0")
      flexbox-item
        div(class="flex-demo") 1
      flexbox-item
        div(class="flex-demo") 2
      flexbox-item
        div(class="flex-demo") 3
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    divider  网格（12列）
    flexbox
      flexbox-item(:span="4")
        div(class="flex-demo") 1/3
      flexbox-item
        div(class="flex-demo") 2/3
    br
    flexbox
      flexbox-item(:span="6")
        div(class="flex-demo") 6/12
      flexbox-item(:span="2")
        div(class="flex-demo") 2/12
      flexbox-item
        div(class="flex-demo") rest
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br

    divider  弹性网格
    flexbox
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/6")
        div(class="flex-demo") 1/6
      flexbox-item(:span="1/8")
        div(class="flex-demo") 1/8
      flexbox-item(:span="1/8")
        div(class="flex-demo") 1/8
      flexbox-item
        div(class="flex-demo") rest
    br
    flexbox(:gutter="0")
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/6")
        div(class="flex-demo") 1/6
      flexbox-item(:span="1/8")
        div(class="flex-demo") 1/8
      flexbox-item(:span="1/8")
        div(class="flex-demo") 1/8
      flexbox-item
         div(class="flex-demo") rest
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br

    divider  弹性网格
    flexbox(:gutter="0")
      flexbox-item(:span="1/3", :order="4")
        div(class="flex-demo") 1
      flexbox-item(:span="1/6", :order="3")
        div(class="flex-demo") 2
      flexbox-item(:span="1/8", :order="2")
        div(class="flex-demo") 3
      flexbox-item(:span="1/8", :order="1")
        div(class="flex-demo") 4
      flexbox-item(:order="-99")
        div(class="flex-demo") 5
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    br

    divider flex-wrap
    flexbox(:gutter="0", wrap="wrap")
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3
      flexbox-item(:span="1/3")
        div(class="flex-demo") 1/3

    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码
    x-button(mini, plain, @click.native="copyCode09()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode10()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Flexbox, FlexboxItem, Divider, XButton } from 'vux';
  export default {
    components: { Flexbox, FlexboxItem, Divider, XButton },
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
        this.tempCode = '    divider  水平\n' +
          '    flexbox\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2\n' +
          '    br\n' +
          '    flexbox\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 3\n' +
          '    br\n' +
          '    flexbox\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 3\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 4\n' +
          '    br\n' +
          '    flexbox\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 3\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 4\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 5\n' +
          '    br\n' +
          '    flexbox\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 3\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 4\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 5\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 6\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode =  '    divider  水平无间隙\n' +
          '    flexbox(:gutter="0")\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 3\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 4\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode =   '    divider  垂直\n' +
          '    flexbox(orient="vertical")\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 3\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode =    '    divider  垂直无间隙\n' +
          '    flexbox(orient="vertical", :gutter="0")\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 3\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  divider  网格（12列）\n' +
          '    flexbox\n' +
          '      flexbox-item(:span="4")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") 2/3\n' +
          '    br\n' +
          '    flexbox\n' +
          '      flexbox-item(:span="6")\n' +
          '        div(class="flex-demo") 6/12\n' +
          '      flexbox-item(:span="2")\n' +
          '        div(class="flex-demo") 2/12\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") rest\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode =     '    divider  弹性网格\n' +
          '    flexbox\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/6")\n' +
          '        div(class="flex-demo") 1/6\n' +
          '      flexbox-item(:span="1/8")\n' +
          '        div(class="flex-demo") 1/8\n' +
          '      flexbox-item(:span="1/8")\n' +
          '        div(class="flex-demo") 1/8\n' +
          '      flexbox-item\n' +
          '        div(class="flex-demo") rest\n' +
          '    br\n' +
          '    flexbox(:gutter="0")\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/6")\n' +
          '        div(class="flex-demo") 1/6\n' +
          '      flexbox-item(:span="1/8")\n' +
          '        div(class="flex-demo") 1/8\n' +
          '      flexbox-item(:span="1/8")\n' +
          '        div(class="flex-demo") 1/8\n' +
          '      flexbox-item\n' +
          '         div(class="flex-demo") rest\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode =  '    divider  弹性网格\n' +
          '    flexbox(:gutter="0")\n' +
          '      flexbox-item(:span="1/3", :order="4")\n' +
          '        div(class="flex-demo") 1\n' +
          '      flexbox-item(:span="1/6", :order="3")\n' +
          '        div(class="flex-demo") 2\n' +
          '      flexbox-item(:span="1/8", :order="2")\n' +
          '        div(class="flex-demo") 3\n' +
          '      flexbox-item(:span="1/8", :order="1")\n' +
          '        div(class="flex-demo") 4\n' +
          '      flexbox-item(:order="-99")\n' +
          '        div(class="flex-demo") 5\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode =   '    divider flex-wrap\n' +
          '    flexbox(:gutter="0", wrap="wrap")\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3\n' +
          '      flexbox-item(:span="1/3")\n' +
          '        div(class="flex-demo") 1/3';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = ' import { Flexbox, FlexboxItem, Divider, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Flexbox, FlexboxItem, Divider, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode = '  .flex-demo {\n' +
          '        text-align: center;\n' +
          '        color: #fff;\n' +
          '        background-color: #20b907;\n' +
          '        border-radius: 4px;\n' +
          '        background-clip: padding-box;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c flexbox {
    @d wrap {
      .flex-demo {
        text-align: center;
        color: #fff;
        background-color: #20b907;
        border-radius: 4px;
        background-clip: padding-box;
      }
    }
  }
</style>
