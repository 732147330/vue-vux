<template lang="jade">
  -var c = 'badge'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    badge(text="1")
    br
    badge(text="123")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    group(title="在Cell组件里使用")
      cell(title="红点", is-link)
        div(class="badge-value")
          span(class="vertical-middle") 新消息 &nbsp;
          badge
      cell(title="个位数", is-link)
        div(class="badge-value")
          span(class="vertical-middle") 新消息 &nbsp;
          badge(text="8")
      cell(title="多位数", is-link)
        div(class="badge-value")
          span(class="vertical-middle") 新消息 &nbsp;
          badge(text="888")
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode04()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Badge, Group, Cell, XButton } from 'vux';
  export default {
    components: { Badge, Group, Cell, XButton },
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
        this.tempCode = '    badge(text="1")\n' +
          '    br\n' +
          '    badge(text="123")\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    group(title="在Cell组件里使用")\n' +
          '      cell(title="红点", is-link)\n' +
          '        div(class="badge-value")\n' +
          '          span(class="vertical-middle") 新消息 &nbsp;\n' +
          '          badge\n' +
          '      cell(title="个位数", is-link)\n' +
          '        div(class="badge-value")\n' +
          '          span(class="vertical-middle") 新消息 &nbsp;\n' +
          '          badge(text="8")\n' +
          '      cell(title="多位数", is-link)\n' +
          '        div(class="badge-value")\n' +
          '          span(class="vertical-middle") 新消息 &nbsp;\n' +
          '          badge(text="888")\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  import { Badge, Group, Cell, XButton } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Badge, Group, Cell, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '  } ';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' .badge-value {\n' +
          '        display: inline-block!important;\n' +
          '      }\n' +
          '      .vertical-middle {\n' +
          '        vertical-align: middle;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c badge {
    @d wrap {
      .badge-value {
        display: inline-block!important;
      }
      .vertical-middle {
        vertical-align: middle;
      }
    }
  }
</style>
