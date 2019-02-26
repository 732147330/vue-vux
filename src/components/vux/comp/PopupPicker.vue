<template lang="jade">
  -var c = 'popup-picke'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="single column", label-width="5em")
      popup-picker(:title="title1", :data="list1", v-model="value1", @on-show="onShow", @on-hide="onHide", @on-change="onChange", placeholder="请选择")
      popup-picker(popup-title="请选择", :title="title1", :data="list1", v-model="value1_1", @on-show="onShow", @on-hide="onHide", @on-change="onChange", placeholder="请选择")
        //<!-- use scope="props" when vue < 2.5.0 -->
        template(slot="title", slot-scope="props")
          span(:class="props.labelClass", :style="props.labelStyle", style="height:24px;")
            span(class="demo-icon demo-icon-big", style="font-size:20px;vertical-align:middle;") 
            span(style="vertical-align:middle;") 手机
      datetime(title="datetime", v-model="date")
    br
    div(class="picker-buttons")
      x-button(type="primary", @click.native="value1=[]") 将值置为空
      x-button(type="primary", @click.native="changeList10") 重新赋值列表
      x-button(type="primary", @click.native="changeList11") push方式更改列表
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="double columns")
      popup-picker(:title="title2", :data="list2", v-model="value2")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="chained columns")
      popup-picker(:title="title3", :data="list3", :columns="3", v-model="value3", ref="picker3")
      cell(title="获取值对应的文字", :value="$refs.picker3&&$refs.picker3.getNameValues()")
      popup-picker(:title="title4", :data="list3", :columns="3", v-model="value4", show-name)
    br
    div(class="picker-buttons")
      x-button(type="primary", @click.native="changeList21") push方式更改列表
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    divider Control the visibility of popup-picker
    div(style="margin: 0 15px;")
      x-button(@click.native="showPopupPicker = true", type="primary") Show PopupPicker. value: {{value5 }}
    group
      popup-picker(:show.sync="showPopupPicker", :show-cell="false", title="TEST", :data="[['1', '2', '3', '4', '5']]", v-model="value5")
    br
    group(title="隐藏时不影响其他popup-picker的mask")
      x-switch(title="ishide popup-picker", v-model="switch6")
      popup-picker(v-if="!switch6", title="显示值", :data="['我不会影响遮罩层'.split('')]", v-model="value6")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="显示格式化")
      popup-picker(title="时间", :inline-desc="`当前值[${formatDemoValue}]`",v-model="formatDemoValue", :data="[['01','02','03'],['11','12','13']]", :display-format="format")

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode07()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Datetime, PopupPicker, Group, Cell, Picker, XButton, Divider, XSwitch } from 'vux';
  export default {
    components: { Datetime, PopupPicker, Group, Cell, Picker, XButton, Divider, XSwitch },
    data() {
      return {
        tempCode: '',
        date: '',
        title1: '手机机型',
        title2: '详细机型',
        title3: '联动显示值',
        title4: '联动显示文字',
        list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
        list2: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你'], ['小米1', 'iPhone2', '华为3', '情怀4', '三星5', '其他6', '不告诉你7']],
        list3: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '美国',
          value: 'USA',
          parent: 0
        }, {
          name: '广东',
          value: 'china001',
          parent: 'china'
        }, {
          name: '广西',
          value: 'china002',
          parent: 'china'
        }, {
          name: '美国001',
          value: 'usa001',
          parent: 'USA'
        }, {
          name: '美国002',
          value: 'usa002',
          parent: 'USA'
        }, {
          name: '广州',
          value: 'gz',
          parent: 'china001'
        }, {
          name: '深圳',
          value: 'sz',
          parent: 'china001'
        }, {
          name: '广西001',
          value: 'gx001',
          parent: 'china002'
        }, {
          name: '广西002',
          value: 'gx002',
          parent: 'china002'
        }, {
          name: '美国001_001',
          value: '0003',
          parent: 'usa001'
        }, {
          name: '美国001_002',
          value: '0004',
          parent: 'usa001'
        }, {
          name: '美国002_001',
          value: '0005',
          parent: 'usa002'
        }, {
          name: '美国002_002',
          value: '0006',
          parent: 'usa002'
        }],
        value1: ['iPhone'],
        value1_1: ['iPhone'],
        value2: ['iPhone', '华为3'],
        value3: [],
        value4: [],
        showPopupPicker: false,
        value5: ['2'],
        switch6: false,
        value6: [],
        formatDemoValue: ['01', '12'],
        format: function (value, name) {
          return `${value[0]}:${value[1]}`
        }
      }
    },
    methods: {
      onChange (val) {
        console.log('val change', val)
      },
      changeList10 () {
        this.list1 = [['小米1', 'iPhone1', '华为1', '情怀1', '三星1', '其他1', '不告诉你1']]
      },
      changeList11 () {
        this.list1[0].push('我是push条目')
      },
      changeList20 () {

      },
      changeList21 () {
        this.list3.push({
          name: '美国002_007',
          value: '0007',
          parent: 'usa002'
        })
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
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
        this.tempCode = '  group(title="single column", label-width="5em")\n' +
          '      popup-picker(:title="title1", :data="list1", v-model="value1", @on-show="onShow", @on-hide="onHide", @on-change="onChange", placeholder="请选择")\n' +
          '      popup-picker(popup-title="请选择", :title="title1", :data="list1", v-model="value1_1", @on-show="onShow", @on-hide="onHide", @on-change="onChange", placeholder="请选择")\n' +
          '        //<!-- use scope="props" when vue < 2.5.0 -->\n' +
          '        template(slot="title", slot-scope="props")\n' +
          '          span(:class="props.labelClass", :style="props.labelStyle", style="height:24px;")\n' +
          '            span(class="demo-icon demo-icon-big", style="font-size:20px;vertical-align:middle;") \n' +
          '            span(style="vertical-align:middle;") 手机\n' +
          '      datetime(title="datetime", v-model="date")\n' +
          '    br\n' +
          '    div(class="picker-buttons")\n' +
          '      x-button(type="primary", @click.native="value1=[]") 将值置为空\n' +
          '      x-button(type="primary", @click.native="changeList10") 重新赋值列表\n' +
          '      x-button(type="primary", @click.native="changeList11") push方式更改列表';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   group(title="double columns")\n' +
          '      popup-picker(:title="title2", :data="list2", v-model="value2") ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    group(title="chained columns")\n' +
          '      popup-picker(:title="title3", :data="list3", :columns="3", v-model="value3", ref="picker3")\n' +
          '      cell(title="获取值对应的文字", :value="$refs.picker3&&$refs.picker3.getNameValues()")\n' +
          '      popup-picker(:title="title4", :data="list3", :columns="3", v-model="value4", show-name)\n' +
          '    br\n' +
          '    div(class="picker-buttons")\n' +
          '      x-button(type="primary", @click.native="changeList21") push方式更改列表';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  divider Control the visibility of popup-picker\n' +
          '    div(style="margin: 0 15px;")\n' +
          '      x-button(@click.native="showPopupPicker = true", type="primary") Show PopupPicker. value: {{value5 }}\n' +
          '    group\n' +
          '      popup-picker(:show.sync="showPopupPicker", :show-cell="false", title="TEST", :data="[[\'1\', \'2\', \'3\', \'4\', \'5\']]", v-model="value5")\n' +
          '    br\n' +
          '    group(title="隐藏时不影响其他popup-picker的mask")\n' +
          '      x-switch(title="ishide popup-picker", v-model="switch6")\n' +
          '      popup-picker(v-if="!switch6", title="显示值", :data="[\'我不会影响遮罩层\'.split(\'\')]", v-model="value6")\n' +
          '    br';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '   group(title="显示格式化")\n' +
          '      popup-picker(title="时间", :inline-desc="`当前值[${formatDemoValue}]`",v-model="formatDemoValue", :data="[[\'01\',\'02\',\'03\'],[\'11\',\'12\',\'13\']]", :display-format="format")';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = ' import { Datetime, PopupPicker, Group, Cell, Picker, XButton, Divider, XSwitchB } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Datetime, PopupPicker, Group, Cell, Picker, XButton, Divider, XSwitch },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        date: \'\',\n' +
          '        title1: \'手机机型\',\n' +
          '        title2: \'详细机型\',\n' +
          '        title3: \'联动显示值\',\n' +
          '        title4: \'联动显示文字\',\n' +
          '        list1: [[\'小米\', \'iPhone\', \'华为\', \'情怀\', \'三星\', \'其他\', \'不告诉你\']],\n' +
          '        list2: [[\'小米\', \'iPhone\', \'华为\', \'情怀\', \'三星\', \'其他\', \'不告诉你\'], [\'小米1\', \'iPhone2\', \'华为3\', \'情怀4\', \'三星5\', \'其他6\', \'不告诉你7\']],\n' +
          '        list3: [{\n' +
          '          name: \'中国\',\n' +
          '          value: \'china\',\n' +
          '          parent: 0\n' +
          '        }, {\n' +
          '          name: \'美国\',\n' +
          '          value: \'USA\',\n' +
          '          parent: 0\n' +
          '        }, {\n' +
          '          name: \'广东\',\n' +
          '          value: \'china001\',\n' +
          '          parent: \'china\'\n' +
          '        }, {\n' +
          '          name: \'广西\',\n' +
          '          value: \'china002\',\n' +
          '          parent: \'china\'\n' +
          '        }, {\n' +
          '          name: \'美国001\',\n' +
          '          value: \'usa001\',\n' +
          '          parent: \'USA\'\n' +
          '        }, {\n' +
          '          name: \'美国002\',\n' +
          '          value: \'usa002\',\n' +
          '          parent: \'USA\'\n' +
          '        }, {\n' +
          '          name: \'广州\',\n' +
          '          value: \'gz\',\n' +
          '          parent: \'china001\'\n' +
          '        }, {\n' +
          '          name: \'深圳\',\n' +
          '          value: \'sz\',\n' +
          '          parent: \'china001\'\n' +
          '        }, {\n' +
          '          name: \'广西001\',\n' +
          '          value: \'gx001\',\n' +
          '          parent: \'china002\'\n' +
          '        }, {\n' +
          '          name: \'广西002\',\n' +
          '          value: \'gx002\',\n' +
          '          parent: \'china002\'\n' +
          '        }, {\n' +
          '          name: \'美国001_001\',\n' +
          '          value: \'0003\',\n' +
          '          parent: \'usa001\'\n' +
          '        }, {\n' +
          '          name: \'美国001_002\',\n' +
          '          value: \'0004\',\n' +
          '          parent: \'usa001\'\n' +
          '        }, {\n' +
          '          name: \'美国002_001\',\n' +
          '          value: \'0005\',\n' +
          '          parent: \'usa002\'\n' +
          '        }, {\n' +
          '          name: \'美国002_002\',\n' +
          '          value: \'0006\',\n' +
          '          parent: \'usa002\'\n' +
          '        }],\n' +
          '        value1: [\'iPhone\'],\n' +
          '        value1_1: [\'iPhone\'],\n' +
          '        value2: [\'iPhone\', \'华为3\'],\n' +
          '        value3: [],\n' +
          '        value4: [],\n' +
          '        showPopupPicker: false,\n' +
          '        value5: [\'2\'],\n' +
          '        switch6: false,\n' +
          '        value6: [],\n' +
          '        formatDemoValue: [\'01\', \'12\'],\n' +
          '        format: function (value, name) {\n' +
          '          return `${value[0]}:${value[1]}`\n' +
          '        }\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onChange (val) {\n' +
          '        console.log(\'val change\', val)\n' +
          '      },\n' +
          '      changeList10 () {\n' +
          '        this.list1 = [[\'小米1\', \'iPhone1\', \'华为1\', \'情怀1\', \'三星1\', \'其他1\', \'不告诉你1\']]\n' +
          '      },\n' +
          '      changeList11 () {\n' +
          '        this.list1[0].push(\'我是push条目\')\n' +
          '      },\n' +
          '      changeList20 () {\n' +
          '\n' +
          '      },\n' +
          '      changeList21 () {\n' +
          '        this.list3.push({\n' +
          '          name: \'美国002_007\',\n' +
          '          value: \'0007\',\n' +
          '          parent: \'usa002\'\n' +
          '        })\n' +
          '      },\n' +
          '      onShow () {\n' +
          '        console.log(\'on show\')\n' +
          '      },\n' +
          '      onHide (type) {\n' +
          '        console.log(\'on hide\', type)\n' +
          '      },\n' +
          '    }\n' +
          '  }\n';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '.picker-buttons {\n' +
          '        margin: 0 15px;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c popup-picke {
    @d wrap {
      .picker-buttons {
        margin: 0 15px;
      }
    }
  }
</style>
