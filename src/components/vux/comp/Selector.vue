<template lang="jade">
  -var c = 'selector'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(:title="'no placeholder, the current value is : ' + defaultValue")
      selector(ref="defaultValueRef", title="省份", :options="list", v-model="defaultValue")
      selector(ref="defaultValueRef", title="省份", direction="rtl", :options="list", v-model="defaultValue")
    div(style="padding:15px;")
      x-button(type="primary", @click.native="getValue('defaultValueRef')") get full value
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="with placeholder")
      selector(placeholder="请选择省份", v-model="demo01", title="省份", name="district", :options="list", @on-change="onChange")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="without title")
      selector(placeholder="请选择省份", v-model="demo02", :options="list")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group(title="set value=广西")
      selector(v-model="value1", title="省份", :options="plainList", @on-change="onChange")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="readonly, displays just like a cell")
      selector(value="gd", readonly title="省份", :options="list")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br

    group(title="use plain options")
      selector(ref="plainValueRef", value="C", title="Selector", :options="list1", @on-change="onChange")
    div(style="padding:15px;")
      x-button(type="primary", @click.native="getValue('plainValueRef')") get full value
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br

    group(:title="'boolean selector: ' + value3")
      selector(v-model="value3", title="Vux Is Cool", :options="list2")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    br

    group(title="set valueMap for directly using API data", label-width="5em")
      selector(ref="valueMapRef", v-model="valueMapValue", :value-map="['idValue', 'idLabel']", title="Selector", :options="valueMapList", @on-change="onChange")
      cell-box(align-items="flex-start")
        pre {{ valueMapList }}
      cell(title="value", :value="valueMapValue")
    div(style="padding:15px;")
      x-button(type="primary", @click.native="getValue('valueMapRef')") get full value

    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码
    x-button(mini, plain, @click.native="copyCode09()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Selector, Group, Cell, CellBox, XButton } from 'vux';
  export default {
    components: { Selector, Group, Cell, CellBox, XButton },
    data() {
      return {
        tempCode: '',
        demo01: null,
        demo02: '',
        defaultValue: 'gd',
        plainList: ['广东', '广西'],
        list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
        list2: [{key: true, value: '是'}, {key: false, value: '否'}],
        value1: '广西',
        value3: true,
        list1: ['A', 'B', 'C'],
        valueMapValue: 'key01',
        valueMapList: [{
          idValue: 'key01',
          idLabel: 'value01',
          otherProp: 'prop01'
        }, {
          idValue: 'key02',
          idLabel: 'value02',
          otherProp: 'prop02'
        }]
      }
    },
    methods: {
      onChange (val) {
        console.log(val)
      },
      getValue (ref) {
        this.$vux.alert.show({
          title: 'getFullValue',
          content: this.$refs[ref].getFullValue()
        })
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
        this.tempCode = '   group(:title="\'no placeholder, the current value is : \' + defaultValue")\n' +
          '      selector(ref="defaultValueRef", title="省份", :options="list", v-model="defaultValue")\n' +
          '      selector(ref="defaultValueRef", title="省份", direction="rtl", :options="list", v-model="defaultValue")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="getValue(\'defaultValueRef\')") get full value';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  group(title="with placeholder")\n' +
          '      selector(placeholder="请选择省份", v-model="demo01", title="省份", name="district", :options="list", @on-change="onChange") ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '   group(title="without title")\n' +
          '      selector(placeholder="请选择省份", v-model="demo02", :options="list") ';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group(title="set value=广西")\n' +
          '      selector(v-model="value1", title="省份", :options="plainList", @on-change="onChange") ';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = 'group(title="readonly, displays just like a cell")\n' +
          '      selector(value="gd", readonly title="省份", :options="list") ';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = ' group(title="use plain options")\n' +
          '      selector(ref="plainValueRef", value="C", title="Selector", :options="list1", @on-change="onChange")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="getValue(\'plainValueRef\')") get full value ';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '    group(:title="\'boolean selector: \' + value3")\n' +
          '      selector(v-model="value3", title="Vux Is Cool", :options="list2") ';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = 'group(title="set valueMap for directly using API data", label-width="5em")\n' +
          '      selector(ref="valueMapRef", v-model="valueMapValue", :value-map="[\'idValue\', \'idLabel\']", title="Selector", :options="valueMapList", @on-change="onChange")\n' +
          '      cell-box(align-items="flex-start")\n' +
          '        pre {{ valueMapList }}\n' +
          '      cell(title="value", :value="valueMapValue")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="getValue(\'valueMapRef\')") get full value ';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = '  import { Selector, Group, Cell, CellBox, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Selector, Group, Cell, CellBox, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        demo01: null,\n' +
          '        demo02: \'\',\n' +
          '        defaultValue: \'gd\',\n' +
          '        plainList: [\'广东\', \'广西\'],\n' +
          '        list: [{key: \'gd\', value: \'广东\'}, {key: \'gx\', value: \'广西\'}],\n' +
          '        list2: [{key: true, value: \'是\'}, {key: false, value: \'否\'}],\n' +
          '        value1: \'广西\',\n' +
          '        value3: true,\n' +
          '        list1: [\'A\', \'B\', \'C\'],\n' +
          '        valueMapValue: \'key01\',\n' +
          '        valueMapList: [{\n' +
          '          idValue: \'key01\',\n' +
          '          idLabel: \'value01\',\n' +
          '          otherProp: \'prop01\'\n' +
          '        }, {\n' +
          '          idValue: \'key02\',\n' +
          '          idLabel: \'value02\',\n' +
          '          otherProp: \'prop02\'\n' +
          '        }]\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onChange (val) {\n' +
          '        console.log(val)\n' +
          '      },\n' +
          '      getValue (ref) {\n' +
          '        this.$vux.alert.show({\n' +
          '          title: \'getFullValue\',\n' +
          '          content: this.$refs[ref].getFullValue()\n' +
          '        })\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c selector {
    @d wrap {

    }
  }
</style>
