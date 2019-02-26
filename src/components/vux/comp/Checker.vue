<template lang="jade">
  -var c = 'checker'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider 单选，默认不选中任何项
    div(class="box")
      checker(v-model="demo1", default-item-class="demo1-item", selected-item-class="demo1-item-selected")
        checker-item(value="1") 潘
        checker-item(value="2") 闲
        checker-item(value="3") 邓
        checker-item(value="4") 小
        checker-item(value="5") 驴
      br
      span 当前值为: {{ demo1 }}
      br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    divider radioRequired
    div(class="box")
      checker(v-model="demo1Required", radio-required, default-item-class="demo1-item", selected-item-class="demo1-item-selected")
        checker-item(value="1") 潘
        checker-item(value="2") 闲
        checker-item(value="3") 邓
        checker-item(value="4") 小
        checker-item(value="5") 驴
      br
      span 当前值为: {{ demo1Required }}
      br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    divider 单选：object类型
    div(class="box")
      checker(v-model="demo11", default-item-class="demo1-item", selected-item-class="demo1-item-selected")
        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}
      br
      span 当前值为: {{demo11}}
      br
      br
      checker(v-model="demo12", default-item-class="demo1-item", selected-item-class="demo1-item-selected")
        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}
      br
      span 当前值为: {{demo12}}
      br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    divider 多选：object类型
    div(class="box")
      checker(v-model="demo21", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected")
        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}
      br
      span 当前值为: {{demo21}}
      br
      br
      checker(v-model="demo22", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected")
        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}
      br
      span 当前值为: {{demo22}}
      br
      br
      checker(v-model="demo23", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected", :max="2")
        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}
      br
      span 当前值为: {{demo23}}
      br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    divider 多选
    div(class="box")
      checker(v-model="demo1Checkbox", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected")
        checker-item(:value="1") 白
        checker-item(:value="2") 富
        checker-item(:value="3") 美
      br
      span 当前值为: {{demo1Checkbox}}
      br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码

    divider 多选，最多只能选2个
    div(class="box")
      checker(v-model="demo1CheckboxMax", :max="2", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected")
        checker-item(value="1") 1
        checker-item(value="2") 2
        checker-item(value="3") 3
        br
        span 当前值为: {{demo1CheckboxMax}}
        br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码

    divider 默认值2
    div(class="box")
      checker(v-model="demo2", default-item-class="demo2-item", selected-item-class="demo2-item-selected")
        checker-item(value="1") 1
        checker-item(value="2") 2
        checker-item(value="3") 3
      br
      span 当前值为: {{demo2}}
      br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码

    divider 自定义样式
    div(class="box")
      checker(v-model="demo3", default-item-class="demo3-item", selected-item-class="demo3-item-selected")
        checker-item(value="one")
          img(src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff", alt="")
        checker-item(value="two")
          img(src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff", alt="")
        checker-item(value="three")
          img(src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff", alt="")
      br
      span 当前值为: {{demo3}}
      br
    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码

    divider Popup组件中使用
    group
      cell(title="选择颜色", :value="demo4", is-link, @click.native="showPopup=true")
    div(transfer-dom)
      popup(v-model="showPopup", class="checker-popup")
        div(style="padding:10px 10px 40px 10px;")
          p(style="padding: 5px 5px 5px 2px;color:#888;") Colors
          checker(v-model="demo4", default-item-class="demo4-item", selected-item-class="demo4-item-selected", disabled-item-class="demo4-item-disabled")
            checker-item(value="花跟叶", @on-item-click="onItemClick") 花跟叶
            checker-item(value="鸟与树", @on-item-click="onItemClick") 鸟与树
            checker-item(value="我和你", @on-item-click="onItemClick") 我和你
            checker-item(value="全套礼品装", disabled, @on-item-click="onItemClick") 全套礼品装
    x-button(mini, plain, type="primary", @click.native="copyCode09()") 复制代码

    divider 单选常见例子 {{demo5}}
    checker(v-model="demo5", default-item-class="demo5-item", selected-item-class="demo5-item-selected")
      checker-item(v-for="i in [1, 2, 3]", :key="i", :value="i") ￥{{i*300}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode10()") 复制代码

    divider 多选常见例子 {{demo6}}
    checker(v-model="demo6",  type="checkbox",  default-item-class="demo5-item",  selected-item-class="demo5-item-selected")
      checker-item(v-for="i in [1, 2, 3]", :key="i", :value="i") {{['good', 'nice','awesome'][i - 1]}}

    x-button(mini, plain, type="primary", @click.native="copyCode11()") 复制代码
    x-button(mini, plain, @click.native="copyCode12()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode13()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Checker, CheckerItem, Divider, Group, Cell, Popup, XButton } from 'vux';
  export default {
    components: { Checker, CheckerItem, Divider, Group, Cell, Popup, XButton },
    data() {
      return {
        tempCode: '',
        items1: [{
          key: '1',
          value: 'A'
        }, {
          key: '2',
          value: 'B'
        }, {
          key: '3',
          value: 'C'
        }],
        demo1: '',
        demo1Required: '',
        demo11: null,
        demo12: {key: '2', value: 'B'},
        demo21: null,
        demo22: [{key: '2', value: 'B'}],
        demo23: null,
        demo1Checkbox: [2, 1],
        demo1CheckboxMax: ['2', '3'],
        demo2: '2',
        demo3: '',
        demo4: '花跟叶',
        showPopup: false,
        demo5: 1,
        demo6: [2, 3]
      }
    },
    methods: {
      onItemClick (value, disabled) {
        console.log(value, disabled)
        if (!this.disabled) {
          this.showPopup = false
        }
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
        this.tempCode = '   divider 单选，默认不选中任何项\n' +
          '    div(class="box")\n' +
          '      checker(v-model="demo1", default-item-class="demo1-item", selected-item-class="demo1-item-selected")\n' +
          '        checker-item(value="1") 潘\n' +
          '        checker-item(value="2") 闲\n' +
          '        checker-item(value="3") 邓\n' +
          '        checker-item(value="4") 小\n' +
          '        checker-item(value="5") 驴\n' +
          '      br\n' +
          '      span 当前值为: {{ demo1 }}\n' +
          '      br';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '     divider radioRequired\n' +
          '    div(class="box")\n' +
          '      checker(v-model="demo1Required", radio-required, default-item-class="demo1-item", selected-item-class="demo1-item-selected")\n' +
          '        checker-item(value="1") 潘\n' +
          '        checker-item(value="2") 闲\n' +
          '        checker-item(value="3") 邓\n' +
          '        checker-item(value="4") 小\n' +
          '        checker-item(value="5") 驴\n' +
          '      br\n' +
          '      span 当前值为: {{ demo1Required }}\n' +
          '      br';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  divider 单选：object类型\n' +
          '    div(class="box")\n' +
          '      checker(v-model="demo11", default-item-class="demo1-item", selected-item-class="demo1-item-selected")\n' +
          '        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}\n' +
          '      br\n' +
          '      span 当前值为: {{demo11}}\n' +
          '      br\n' +
          '      br\n' +
          '      checker(v-model="demo12", default-item-class="demo1-item", selected-item-class="demo1-item-selected")\n' +
          '        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}\n' +
          '      br\n' +
          '      span 当前值为: {{demo12}}\n' +
          '      br';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode =  '    divider 多选：object类型\n' +
          '    div(class="box")\n' +
          '      checker(v-model="demo21", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected")\n' +
          '        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}\n' +
          '      br\n' +
          '      span 当前值为: {{demo21}}\n' +
          '      br\n' +
          '      br\n' +
          '      checker(v-model="demo22", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected")\n' +
          '        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}\n' +
          '      br\n' +
          '      span 当前值为: {{demo22}}\n' +
          '      br\n' +
          '      br\n' +
          '      checker(v-model="demo23", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected", :max="2")\n' +
          '        checker-item(:value="item", v-for="(item, index) in items1", :key="index") {{item.value}}\n' +
          '      br\n' +
          '      span 当前值为: {{demo23}}\n' +
          '      br ';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '     divider 多选\n' +
          '    div(class="box")\n' +
          '      checker(v-model="demo1Checkbox", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected")\n' +
          '        checker-item(:value="1") 白\n' +
          '        checker-item(:value="2") 富\n' +
          '        checker-item(:value="3") 美\n' +
          '      br\n' +
          '      span 当前值为: {{demo1Checkbox}}\n' +
          '      br';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '  divider 多选，最多只能选2个\n' +
          '    div(class="box")\n' +
          '      checker(v-model="demo1CheckboxMax", :max="2", type="checkbox", default-item-class="demo1-item", selected-item-class="demo1-item-selected")\n' +
          '        checker-item(value="1") 1\n' +
          '        checker-item(value="2") 2\n' +
          '        checker-item(value="3") 3\n' +
          '        br\n' +
          '        span 当前值为: {{demo1CheckboxMax}}\n' +
          '        br ';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '    divider 默认值2\n' +
          '    div(class="box")\n' +
          '      checker(v-model="demo2", default-item-class="demo2-item", selected-item-class="demo2-item-selected")\n' +
          '        checker-item(value="1") 1\n' +
          '        checker-item(value="2") 2\n' +
          '        checker-item(value="3") 3\n' +
          '      br\n' +
          '      span 当前值为: {{demo2}}\n' +
          '      br ';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '     divider 自定义样式\n' +
          '    div(class="box")\n' +
          '      checker(v-model="demo3", default-item-class="demo3-item", selected-item-class="demo3-item-selected")\n' +
          '        checker-item(value="one")\n' +
          '          img(src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff", alt="")\n' +
          '        checker-item(value="two")\n' +
          '          img(src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff", alt="")\n' +
          '        checker-item(value="three")\n' +
          '          img(src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff", alt="")\n' +
          '      br\n' +
          '      span 当前值为: {{demo3}}\n' +
          '      br';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = '   divider Popup组件中使用\n' +
          '    group\n' +
          '      cell(title="选择颜色", :value="demo4", is-link, @click.native="showPopup=true")\n' +
          '    div(transfer-dom)\n' +
          '      popup(v-model="showPopup", class="checker-popup")\n' +
          '        div(style="padding:10px 10px 40px 10px;")\n' +
          '          p(style="padding: 5px 5px 5px 2px;color:#888;") Colors\n' +
          '          checker(v-model="demo4", default-item-class="demo4-item", selected-item-class="demo4-item-selected", disabled-item-class="demo4-item-disabled")\n' +
          '            checker-item(value="花跟叶", @on-item-click="onItemClick") 花跟叶\n' +
          '            checker-item(value="鸟与树", @on-item-click="onItemClick") 鸟与树\n' +
          '            checker-item(value="我和你", @on-item-click="onItemClick") 我和你\n' +
          '            checker-item(value="全套礼品装", disabled, @on-item-click="onItemClick") 全套礼品装 ';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode = '  divider 单选常见例子 {{demo5}}\n' +
          '    checker(v-model="demo5", default-item-class="demo5-item", selected-item-class="demo5-item-selected")\n' +
          '      checker-item(v-for="i in [1, 2, 3]", :key="i", :value="i") ￥{{i*300}} ';
        this.copyCodeMethod();
      },
      copyCode11 () {
        this.tempCode = '    divider 多选常见例子 {{demo6}}\n' +
          '    checker(v-model="demo6",  type="checkbox",  default-item-class="demo5-item",  selected-item-class="demo5-item-selected")\n' +
          '      checker-item(v-for="i in [1, 2, 3]", :key="i", :value="i") {{[\'good\', \'nice\',\'awesome\'][i - 1]}} ';
        this.copyCodeMethod();
      },
      copyCode12 () {
        this.tempCode = '  import { Checker, CheckerItem, Divider, Group, Cell, Popup, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Checker, CheckerItem, Divider, Group, Cell, Popup, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        items1: [{\n' +
          '          key: \'1\',\n' +
          '          value: \'A\'\n' +
          '        }, {\n' +
          '          key: \'2\',\n' +
          '          value: \'B\'\n' +
          '        }, {\n' +
          '          key: \'3\',\n' +
          '          value: \'C\'\n' +
          '        }],\n' +
          '        demo1: \'\',\n' +
          '        demo1Required: \'\',\n' +
          '        demo11: null,\n' +
          '        demo12: {key: \'2\', value: \'B\'},\n' +
          '        demo21: null,\n' +
          '        demo22: [{key: \'2\', value: \'B\'}],\n' +
          '        demo23: null,\n' +
          '        demo1Checkbox: [2, 1],\n' +
          '        demo1CheckboxMax: [\'2\', \'3\'],\n' +
          '        demo2: \'2\',\n' +
          '        demo3: \'\',\n' +
          '        demo4: \'花跟叶\',\n' +
          '        showPopup: false,\n' +
          '        demo5: 1,\n' +
          '        demo6: [2, 3]\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onItemClick (value, disabled) {\n' +
          '        console.log(value, disabled)\n' +
          '        if (!this.disabled) {\n' +
          '          this.showPopup = false\n' +
          '        }\n' +
          '      },\n' +
          '    }\n' +
          '  } ';
        this.copyCodeMethod();
      },
      copyCode13 () {
        this.tempCode =  'padding: 15px 0;\n' +
          '.box {\n' +
          '  padding: 0 15px;\n' +
          '}\n' +
          '.demo1-item {\n' +
          '  border: 1px solid #ececec;\n' +
          '  padding: 5px 15px;\n' +
          '}\n' +
          '.demo1-item-selected {\n' +
          '  border: 1px solid green;\n' +
          '}\n' +
          '.demo2-item {\n' +
          '  width: 40px;\n' +
          '  height: 40px;\n' +
          '  border: 1px solid #ccc;\n' +
          '  display: inline-block;\n' +
          '  border-radius: 50%;\n' +
          '  line-height: 40px;\n' +
          '  text-align: center;\n' +
          '}\n' +
          '.demo2-item-selected {\n' +
          '  border-color: green;\n' +
          '}\n' +
          '.demo3-item {\n' +
          '  padding: 5px 5px;\n' +
          '  font-size: 0;\n' +
          '}\n' +
          '.demo3-item-selected {\n' +
          '  outline: 1px solid #8B8AEE;\n' +
          '}\n' +
          '.demo4-item {\n' +
          '  background-color: #ddd;\n' +
          '  color: #222;\n' +
          '  font-size: 14px;\n' +
          '  padding: 5px 10px;\n' +
          '  margin-right: 10px;\n' +
          '  line-height: 18px;\n' +
          '  border-radius: 15px;\n' +
          '}\n' +
          '.demo4-item-selected {\n' +
          '  background-color: #FF3B3B;\n' +
          '  color: #fff;\n' +
          '}\n' +
          '.demo4-item-disabled {\n' +
          '  color: #999;\n' +
          '}\n' +
          '.demo5-item {\n' +
          '  width: 100px;\n' +
          '  height: 26px;\n' +
          '  line-height: 26px;\n' +
          '  text-align: center;\n' +
          '  border-radius: 3px;\n' +
          '  border: 1px solid #ccc;\n' +
          '  background-color: #fff;\n' +
          '  margin-right: 6px;\n' +
          '}\n' +
          '.demo5-item-selected {\n' +
          '  background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;\n' +
          '  border-color: #ff4a00;\n' +
          '}';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style scoped>
  @c checker {
    @d wrap {
      padding: 15px 0;
      .box {
        padding: 0 15px;
      }
      .demo1-item {
        border: 1px solid #ececec;
        padding: 5px 15px;
      }
      .demo1-item-selected {
        border: 1px solid green;
      }
      .demo2-item {
        width: 40px;
        height: 40px;
        border: 1px solid #ccc;
        display: inline-block;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
      }
      .demo2-item-selected {
        border-color: green;
      }
      .demo3-item {
        padding: 5px 5px;
        font-size: 0;
      }
      .demo3-item-selected {
        outline: 1px solid #8B8AEE;
      }
      .demo5-item {
        width: 100px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-right: 6px;
      }
      .demo5-item-selected {
        /*background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;*/
        border-color: #ff4a00;
      }
    }
  }
  .demo4-item {
    background-color: #ddd;
    color: #222;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 10px;
    line-height: 18px;
    border-radius: 15px;
  }
  .demo4-item-selected {
    background-color: #FF3B3B;
    color: #fff;
  }
  .demo4-item-disabled {
    color: #999;
  }
</style>
