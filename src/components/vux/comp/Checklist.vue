<template lang="jade">
  -var c = 'checklist'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    checklist(title="一般使用", :label-position="labelPosition", required, :options="commonList", v-model="checklist001", @on-change="change")
    div(style="padding:15px;")
      x-button(@click.native="labelPosition = labelPosition === 'left' ? '' : 'left'", type="primary")  切换label的位置
      x-button(@click.native="selectFirst", type="primary")  选择第1个值
      x-button(@click.native="selectFirstTwo", type="primary")  选择前两个值
      x-button(@click.native="selectLeft", type="primary")  选择剩下值
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    checklist(title="默认选中China和Japan（禁用操作）", disabled label-position="left", :options="commonList", v-model="checklist002", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    checklist(title="最多可选中2个", :options="commonList", v-model="checklist003", :max=2 @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    checklist(title="max=1（单选模式）", :options="commonList", v-model="radioValue", :max="1", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    checklist(title="打乱选项顺序", random-order :options="checklist005", v-model="checklist005Value", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码

    checklist(ref="demoObject", title="使用Object类型的选项列表，key必须为字符串", :options="objectList", v-model="objectListValue", @on-change="change")
    group
      cell-box {{ fullValues }}
    div(style="padding:15px;")
      x-button(type="primary", @click.native="fullValues = $refs.demoObject.getFullValue()")   getFullValue()
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码


    checklist(title="包含inlineDesc属性的Object类型选项列表", :options="inlineDescList", v-model="inlineDescListValue", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码

    checklist(title="异步选项列表", :max="3", :options="asyncList", v-model="asyncListValue", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码

    divider  相关
    group(title="参见")
      cell(title="Checker", is-link link="/vux/comp/checker")

    x-button(mini, plain, type="primary", @click.native="copyCode09()") 复制代码
    x-button(mini, plain, @click.native="copyCode10()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode11()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, CellBox, Checklist, Cell, Divider, XButton } from 'vux';
  export default {
    components: { Group, CellBox, Checklist, Cell, Divider, XButton },
    mounted () {
      setTimeout(() => {
        this.asyncList = ['A', 'B', 'C', 'D']
      }, 3000)
    },
    data() {
      return {
        tempCode: '',
        fullValues: [],
        labelPosition: '',
        error: '',
        commonList: [ 'China', 'Japan', 'America' ],
        checklist001: [],
        checklist0011: [],
        checklist002: [ 'China', 'Japan' ],
        checklist003: [ 'China', 'Japan' ],
        checklist005: [ '01', '02', '03' ],
        checklist005Value: [],
        objectList: [{key: '1', value: '001 value'}, {key: '2', value: '002 value'}, {key: '3', value: '003 value'}],
        objectListValue: ['1', '2'],
        inlineDescList: [
          {key: '1', value: 'Tiger is good', inlineDesc: 'Tiger is the king of mountain'},
          {key: '2', value: 'Lion is better', inlineDesc: 'Lion is the king of woods'},
          {key: '3', value: 'Camel is best, no inline-desc'}
        ],
        inlineDescListValue: [1],
        asyncList: [],
        asyncListValue: [],
        radioValue: ['China']
      }
    },
    methods: {
      change (val, label) {
        console.log('change', val, label)
      },
      selectFirst () {
        this.checklist001 = ['China']
      },
      selectFirstTwo () {
        this.checklist001 = ['China', 'Japan']
      },
      selectLeft () {
        const left = _.without.apply(_, [this.commonList].concat(this.checklist001))
        this.checklist001 = left
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
        this.tempCode = ' checklist(title="一般使用", :label-position="labelPosition", required, :options="commonList", v-model="checklist001", @on-change="change")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="labelPosition = labelPosition === \'left\' ? \'\' : \'left\'", type="primary")  切换label的位置\n' +
          '      x-button(@click.native="selectFirst", type="primary")  选择第1个值\n' +
          '      x-button(@click.native="selectFirstTwo", type="primary")  选择前两个值\n' +
          '      x-button(@click.native="selectLeft", type="primary")  选择剩下值 ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = 'checklist(title="默认选中China和Japan（禁用操作）", disabled label-position="left", :options="commonList", v-model="checklist002", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = 'checklist(title="最多可选中2个", :options="commonList", v-model="checklist003", :max=2 @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' checklist(title="max=1（单选模式）", :options="commonList", v-model="radioValue", :max="1", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = ' checklist(title="打乱选项顺序", random-order :options="checklist005", v-model="checklist005Value", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '   checklist(ref="demoObject", title="使用Object类型的选项列表，key必须为字符串", :options="objectList", v-model="objectListValue", @on-change="change")\n' +
          '    group\n' +
          '      cell-box {{ fullValues }}\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="fullValues = $refs.demoObject.getFullValue()")   getFullValue()';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = 'checklist(title="包含inlineDesc属性的Object类型选项列表", :options="inlineDescList", v-model="inlineDescListValue", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '    checklist(title="异步选项列表", :max="3", :options="asyncList", v-model="asyncListValue", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = '    divider  相关\n' +
          '    group(title="参见")\n' +
          '      cell(title="Checker", is-link link="/comp/checker")';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode = '  import { Group, CellBox, Checklist, Cell, Divider, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, CellBox, Checklist, Cell, Divider, XButton },\n' +
          '    mounted () {\n' +
          '      setTimeout(() => {\n' +
          '        this.asyncList = [\'A\', \'B\', \'C\', \'D\']\n' +
          '      }, 3000)\n' +
          '    },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        fullValues: [],\n' +
          '        labelPosition: \'\',\n' +
          '        error: \'\',\n' +
          '        commonList: [ \'China\', \'Japan\', \'America\' ],\n' +
          '        checklist001: [],\n' +
          '        checklist0011: [],\n' +
          '        checklist002: [ \'China\', \'Japan\' ],\n' +
          '        checklist003: [ \'China\', \'Japan\' ],\n' +
          '        checklist005: [ \'01\', \'02\', \'03\' ],\n' +
          '        checklist005Value: [],\n' +
          '        objectList: [{key: \'1\', value: \'001 value\'}, {key: \'2\', value: \'002 value\'}, {key: \'3\', value: \'003 value\'}],\n' +
          '        objectListValue: [\'1\', \'2\'],\n' +
          '        inlineDescList: [\n' +
          '          {key: \'1\', value: \'Tiger is good\', inlineDesc: \'Tiger is the king of mountain\'},\n' +
          '          {key: \'2\', value: \'Lion is better\', inlineDesc: \'Lion is the king of woods\'},\n' +
          '          {key: \'3\', value: \'Camel is best, no inline-desc\'}\n' +
          '        ],\n' +
          '        inlineDescListValue: [1],\n' +
          '        asyncList: [],\n' +
          '        asyncListValue: [],\n' +
          '        radioValue: [\'China\']\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      change (val, label) {\n' +
          '        console.log(\'change\', val, label)\n' +
          '      },\n' +
          '      selectFirst () {\n' +
          '        this.checklist001 = [\'China\']\n' +
          '      },\n' +
          '      selectFirstTwo () {\n' +
          '        this.checklist001 = [\'China\', \'Japan\']\n' +
          '      },\n' +
          '      selectLeft () {\n' +
          '        const left = _.without.apply(_, [this.commonList].concat(this.checklist001))\n' +
          '        this.checklist001 = left\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode11 () {
        this.tempCode = '.error {\n' +
          '  padding-left: 15px;\n' +
          '  line-height: 28px;\n' +
          '  color: #888;\n' +
          '  font-size: 12px;\n' +
          '}';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style scoped>
  @c checklist {
    @d wrap {
      .error {
        padding-left: 15px;
        line-height: 28px;
        color: #888;
        font-size: 12px;
      }
    }
  }
</style>
