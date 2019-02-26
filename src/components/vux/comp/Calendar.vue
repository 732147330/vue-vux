<template lang="jade">
  -var c = 'calendar'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      calendar(:readonly="readonly", v-model="demo1", title="一般使用", disable-past placeholder="placeholder", @on-show="log('show')", @on-hide="log('hide')")
    div(style="padding:15px;")
      x-button(type="primary", @click.native="readonly = !readonly") 切换 readonly
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group
      calendar(v-model="demo2", title="设置时间为今天", disable-past)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    group
      calendar(@on-change="onChange", v-model="demo3", title="禁止选择未来时间", disable-future)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    group
      calendar(@on-change="onChange", v-model="demo4", title="显示popup头部", show-popup-header popup-header-title="请选择日期", disable-future)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    group
      calendar(placeholder="placeholder", @on-change="onChange", v-model="demo5", title="多选", popup-header-title="请选择日期", disable-future)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码

    group
      calendar(disable-weekend :display-format="displayFormat", placeholder="请选择日期", @on-change="onChange", v-model="demo6", title="格式化表单值", popup-header-title="请选择日期")
      cell-box(align-items="flex-start")
        span(class="selected-days") value:
        div
        badge(v-for="day in demo6", :text="day", :key="day", style="margin-right:10px;")
    div(style="padding:15px;")
      x-button(type="primary", @click.native="demo6 = []") 清空值

    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    x-button(mini, plain, @click.native="copyCode07()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode08()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, Calendar, Cell, Badge, CellBox, XButton } from 'vux';
  export default {
    components: { Group, Calendar, Cell, Badge, CellBox, XButton },
    data() {
      return {
        tempCode: '',
        readonly: false,
        demo1: '',
        demo2: 'TODAY',
        demo3: 'TODAY',
        demo4: 'TODAY',
        demo5: [],
        demo6: [],
        displayFormat (value, type) {
          if (type === 'string') {
            return value
          } else {
            return value.length ? (value.length + ' days') : ''
          }
        }
      }
    },
    methods: {
      log (str) {
        console.log(str)
      },
      onChange (val) {
        console.log('on change', val)
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
        this.tempCode = ' group\n' +
          '      calendar(:readonly="readonly", v-model="demo1", title="一般使用", disable-past placeholder="placeholder", @on-show="log(\'show\')", @on-hide="log(\'hide\')")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="readonly = !readonly") 切换 readonly ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   group\n' +
          '      calendar(v-model="demo2", title="设置时间为今天", disable-past)';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    group\n' +
          '      calendar(@on-change="onChange", v-model="demo3", title="禁止选择未来时间", disable-future)';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = 'group\n' +
          '      calendar(@on-change="onChange", v-model="demo4", title="显示popup头部", show-popup-header :popup-header-title="请选择日期", disable-future)v';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '' +
          '    group\n' +
          '      calendar(placeholder="placeholder", @on-change="onChange", v-model="demo5", title="多选", popup-header-title="请选择日期", disable-future)';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '\n' +
          '    group\n' +
          '      calendar(disable-weekend :display-format="displayFormat", placeholder="请选择日期", @on-change="onChange", v-model="demo6", title="格式化表单值", popup-header-title="请选择日期")\n' +
          '      cell-box(align-items="flex-start")\n' +
          '        span(class="selected-days") value:\n' +
          '        div\n' +
          '        badge(v-for="day in demo6", :text="day", :key="day", style="margin-right:10px;")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="demo6 = []") 清空值';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '  import { Group, Calendar, Cell, Badge, CellBox, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, Calendar, Cell, Badge, CellBox, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        readonly: false,\n' +
          '        demo1: \'\',\n' +
          '        demo2: \'TODAY\',\n' +
          '        demo3: \'TODAY\',\n' +
          '        demo4: \'TODAY\',\n' +
          '        demo5: [],\n' +
          '        demo6: [],\n' +
          '        displayFormat (value, type) {\n' +
          '          if (type === \'string\') {\n' +
          '            return value\n' +
          '          } else {\n' +
          '            return value.length ? (value.length + \' days\') : \'\'\n' +
          '          }\n' +
          '        }\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      log (str) {\n' +
          '        console.log(str)\n' +
          '      },\n' +
          '      onChange (val) {\n' +
          '        console.log(\'on change\', val)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = ' .selected-days {\n' +
          '        color: #999;\n' +
          '        width: 90px;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style scoped>
  @c calendar {
    @d wrap {
      .selected-days {
        color: #999;
        width: 90px;
      }
    }
  }
</style>
