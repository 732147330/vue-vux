<template lang="jade">
  -var c = 'picker'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group-title  默认，不设置默认值时选中第一个 {{year1}}
    picker(:data='years', v-model='year1', @on-change='change')
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group-title  异步加载及动态改变数据
    picker(:data='years001', v-model='year001', @on-change='change')
    br
    group
      cell(title="选中值", :value="year001")
    x-button(type="primary", @click.native="changeValue([['1','3','5','7','9','11'],['2','3','4','5'],['a','b','c']])")  Set Data 1
    x-button(type="primary", @click.native="changeValue([['1','3','5','7','9','11'],['2','3','4','5']])") Set Data 2'
    x-button(type="primary", @click.native="changeValue([['2','4','6','8','10','11']])") Set Data 3
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group-title  设置默认值时
    picker(:data='years', v-model='year2', @on-change='change')
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group-title  双向绑定
    picker(:data='years', v-model='year3', @on-change='change3')
    select(v-model='year5')
      option(v-for='one in years[0]', :value='one.value') {{one.name}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group-title  非联动多列
    picker(:data='years1', v-model='year4', @on-change='change')
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br

    group-title  五列
    picker(:data='year6' v-model='year6Value' @on-change='change')
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br

    group-title 地区联动: 选中值 {{year7Value}}
    br
    | 选中值所对应的文字: {{$refs.picker1&&$refs.picker1.getNameValues()}}
    picker(:data='year7', :columns=3, v-model='year7Value', @on-change='change', ref="picker1")
    x-button(@click.native="setData1", type="primary")  Set value to ["USA", "usa002", "0005"]
    x-button(@click.native="setData2", type="primary")  Set value to ["china", "china002", "gz"]
    x-button(@click.native="setList", type="primary") Set List
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    br

    group-title  3列的数据，只显示两列
    picker(:data='year7', :fixed-columns="2", :columns=3, v-model='year8Value', @on-change='change')

    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码
    x-button(mini, plain, @click.native="copyCode09()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Cell, Group, Picker, GroupTitle, XButton } from 'vux';

  let years = []
  for (var i = 2000; i <= 2030; i++) {
    years.push({
      name: i + '年',
      value: i + ''
    })
  }
  export default {
    components: { Cell, Group, Picker, GroupTitle, XButton },
    watch: {
      year5: {
        handler (val) {
          this.year3[0] = val
          // this.year3.$set(0, val)
          this.$set(this.year3, 0, val)
        },
        deep: true
      },
      change3 (value) {
        this.year5 = value[0]
      }
    },
    data() {
      return {
        tempCode: '',
        years: [years],
        years001: [],
        year001: [],
        years1: [years, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
        year1: [''],
        year2: ['2002'],
        year3: ['2005'],
        year4: ['2002', '4'],
        year5: '2005',
        year6: [
          ['你', '我', '他'],
          ['you', 'I', 'him'],
          ['ni', 'wo', 'ta'],
          [1, 2, 3, 4, 5],
          [5, 4, 3, 2, 1]
        ],
        year6Value: ['我', 'him', 'ni', '1', '2'],
        year7: [{
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
          value: 'gz',
          parent: 'china002'
        }, {
          name: '广西002',
          value: 'sz',
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
        year7Value: [],
        year8Value: []
      }
    },
    methods: {
      changeValue (value) {
        this.years001 = value
      },
      change (value) {
        console.log('new Value', value)
      },
      change3 (value) {
        this.year5 = value[0]
      },
      setData1 () {
        this.year7Value = ['USA', 'usa002', '0005']
      },
      setData2 () {
        this.year7Value = ['china', 'china002', 'gz']
      },
      setList () {
        this.year7.push({
          name: '美国002_003',
          value: '0007',
          parent: 'usa002'
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
        this.tempCode = '   group-title  默认，不设置默认值时选中第一个 {{year1}}\n' +
          '    picker(:data=\'years\', v-model=\'year1\', @on-change=\'change\')';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   group-title  异步加载及动态改变数据\n' +
          '    picker(:data=\'years001\', v-model=\'year001\', @on-change=\'change\')\n' +
          '    br\n' +
          '    group\n' +
          '      cell(title="选中值", :value="year001")\n' +
          '    x-button(type="primary", @click.native="changeValue([[\'1\',\'3\',\'5\',\'7\',\'9\',\'11\'],[\'2\',\'3\',\'4\',\'5\'],[\'a\',\'b\',\'c\']])")  Set Data 1\n' +
          '    x-button(type="primary", @click.native="changeValue([[\'1\',\'3\',\'5\',\'7\',\'9\',\'11\'],[\'2\',\'3\',\'4\',\'5\']])") Set Data 2\'\n' +
          '    x-button(type="primary", @click.native="changeValue([[\'2\',\'4\',\'6\',\'8\',\'10\',\'11\']])") Set Data 3';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = 'group-title  设置默认值时\n' +
          '    picker(:data=\'years\', v-model=\'year2\', @on-change=\'change\') ';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group-title  双向绑定\n' +
          '    picker(:data=\'years\', v-model=\'year3\', @on-change=\'change3\')\n' +
          '    select(v-model=\'year5\')\n' +
          '      option(v-for=\'one in years[0]\', :value=\'one.value\') {{one.name}}';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  group-title  非联动多列\n' +
          '    picker(:data=\'years1\', v-model=\'year4\', @on-change=\'change\')';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '   group-title  五列\n' +
          '    picker(:data=\'year6\' v-model=\'year6Value\' @on-change=\'change\') ';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '  group-title 地区联动: 选中值 {{year7Value}}\n' +
          '    br\n' +
          '    | 选中值所对应的文字: {{$refs.picker1&&$refs.picker1.getNameValues()}}\n' +
          '    picker(:data=\'year7\', :columns=3, v-model=\'year7Value\', @on-change=\'change\', ref="picker1")\n' +
          '    x-button(@click.native="setData1", type="primary")  Set value to ["USA", "usa002", "0005"]\n' +
          '    x-button(@click.native="setData2", type="primary")  Set value to ["china", "china002", "gz"]\n' +
          '    x-button(@click.native="setList", type="primary") Set List';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '  group-title  3列的数据，只显示两列\n' +
          '    picker(:data=\'year7\', :fixed-columns="2", :columns=3, v-model=\'year8Value\', @on-change=\'change\')';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = '  import { Cell, Group, Picker, GroupTitle, XButton } from \'vux\';\n' +
          '\n' +
          '  let years = []\n' +
          '  for (var i = 2000; i <= 2030; i++) {\n' +
          '    years.push({\n' +
          '      name: i + \'年\',\n' +
          '      value: i + \'\'\n' +
          '    })\n' +
          '  }\n' +
          '  export default {\n' +
          '    components: { Cell, Group, Picker, GroupTitle, XButton },\n' +
          '    watch: {\n' +
          '      year5: {\n' +
          '        handler (val) {\n' +
          '          this.year3[0] = val\n' +
          '          // this.year3.$set(0, val)\n' +
          '          this.$set(this.year3, 0, val)\n' +
          '        },\n' +
          '        deep: true\n' +
          '      },\n' +
          '      change3 (value) {\n' +
          '        this.year5 = value[0]\n' +
          '      }\n' +
          '    },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        years: [years],\n' +
          '        years001: [],\n' +
          '        year001: [],\n' +
          '        years1: [years, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],\n' +
          '        year1: [\'\'],\n' +
          '        year2: [\'2002\'],\n' +
          '        year3: [\'2005\'],\n' +
          '        year4: [\'2002\', \'4\'],\n' +
          '        year5: \'2005\',\n' +
          '        year6: [\n' +
          '          [\'你\', \'我\', \'他\'],\n' +
          '          [\'you\', \'I\', \'him\'],\n' +
          '          [\'ni\', \'wo\', \'ta\'],\n' +
          '          [1, 2, 3, 4, 5],\n' +
          '          [5, 4, 3, 2, 1]\n' +
          '        ],\n' +
          '        year6Value: [\'我\', \'him\', \'ni\', \'1\', \'2\'],\n' +
          '        year7: [{\n' +
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
          '          value: \'gz\',\n' +
          '          parent: \'china002\'\n' +
          '        }, {\n' +
          '          name: \'广西002\',\n' +
          '          value: \'sz\',\n' +
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
          '        year7Value: [],\n' +
          '        year8Value: []\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      changeValue (value) {\n' +
          '        this.years001 = value\n' +
          '      },\n' +
          '      change (value) {\n' +
          '        console.log(\'new Value\', value)\n' +
          '      },\n' +
          '      change3 (value) {\n' +
          '        this.year5 = value[0]\n' +
          '      },\n' +
          '      setData1 () {\n' +
          '        this.year7Value = [\'USA\', \'usa002\', \'0005\']\n' +
          '      },\n' +
          '      setData2 () {\n' +
          '        this.year7Value = [\'china\', \'china002\', \'gz\']\n' +
          '      },\n' +
          '      setList () {\n' +
          '        this.year7.push({\n' +
          '          name: \'美国002_003\',\n' +
          '          value: \'0007\',\n' +
          '          parent: \'usa002\'\n' +
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
  @c picker {
    @d wrap {

    }
  }
</style>
