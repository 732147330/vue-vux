<template lang="jade">
  -var c = 'group'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(label-width="4.5em", label-margin-right="2em", label-align="right")
      cell(title="Cell", value="value", is-link)
      cell(title="Cell", value="value", is-link value-align="left")
      x-input(title="上报人", v-model="value1")
      x-input(placeholder="I'm placeholder")
        img(slot="restricted-label", style="display:inline-block;vertical-align:middle;", src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", width="24", height="24")
      x-input(title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人", v-model="value1")
      x-number(title="Quantity", align="left", v-model="numberValue", button-style="round", :min="0", :max="5")
      datetime(title="时&emsp;&emsp;&nbsp;间", v-model="time1", value-text-align="left")
      selector(title="隐患类别", :options="['工艺技术', '其他']", v-model="value2")
      selector(title="隐患类别", placeholder="Placeholder", :options="['工艺技术', '其他']", v-model="value7")
      selector(title="隐患类别", :options="['工艺技术', '其他']", v-model="value8")
      x-input(title="隐患部位", placeholder="必填", v-model="value3")
      x-input(title="密码", type="password", placeholder="必填", v-model="value4")
      popup-picker(title="请选择", :data="list", v-model="value5", value-text-align="left")
      popup-picker(title="请选择", placeholder="Required", :data="list", v-model="value6", value-text-align="left")
      x-address(title="地址选择", v-model="addressValue", raw-value :list="addressData", value-text-align="left")
      x-textarea(title="详细信息", placeholder="请填写详细信息", :show-counter="false", :rows="3")
      x-textarea(placeholder="请填写详细信息", :show-counter="false", :rows="3")
        img(slot="restricted-label", style="display:inline-block;vertical-align:middle;", src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", width="24", height="24")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group
      group-title(slot="title") I'm a title
        span(style="float:right;") right
      cell(title="cell")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="justify", label-width="5.5em", label-margin-right="2em", label-align="justify")
      cell(title="哈哈", value="value", is-link)
      cell(title="哈哈哈哈哈", value="value", is-link value-align="left")
      x-input(title="上报人", v-model="value1")
      x-number(title="Quantity", align="left", v-model="numberValue", button-style="round", :min="0", :max="5")
      datetime(title="时间", v-model="time1", value-text-align="left")
      selector(title="隐患类别", :options="['工艺技术', '其他']", v-model="value2")
      popup-picker(title="请选择", :data="list", v-model="value5", value-text-align="left")
      x-address(title="地址选择", v-model="addressValue", raw-value :list="addressData", value-text-align="left", label-align="justify")
      x-switch(title="选择")
      x-textarea(title="详细信息", placeholder="请填写详细信息", :show-counter="false", :rows="3")
    br

    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch, XButton } from 'vux';
  export default {
    components: { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch, XButton },
    data() {
      return {
        tempCode: '',
        addressData: ChinaAddressData,
        addressValue: ['广东省', '深圳市', '南山区'],
        value1: '张三',
        value2: '工艺技术',
        value3: '',
        value7: '',
        value8: '',
        value4: '',
        time1: '2017-06-01',
        value5: ['A'],
        value6: [],
        list: [['A', 'B', 'C']],
        numberValue: 0
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
        this.tempCode = '  group(label-width="4.5em", label-margin-right="2em", label-align="right")\n' +
          '      cell(title="Cell", value="value", is-link)\n' +
          '      cell(title="Cell", value="value", is-link value-align="left")\n' +
          '      x-input(title="上报人", v-model="value1")\n' +
          '      x-input(placeholder="I\'m placeholder")\n' +
          '        img(slot="restricted-label", style="display:inline-block;vertical-align:middle;", src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", width="24", height="24")\n' +
          '      x-input(title="上<i class=\'vux-blank-half\'></i>报<i class=\'vux-blank-half\'></i>人", v-model="value1")\n' +
          '      x-number(title="Quantity", align="left", v-model="numberValue", button-style="round", :min="0", :max="5")\n' +
          '      datetime(title="时&emsp;&emsp;&nbsp;间", v-model="time1", value-text-align="left")\n' +
          '      selector(title="隐患类别", :options="[\'工艺技术\', \'其他\']", v-model="value2")\n' +
          '      selector(title="隐患类别", placeholder="Placeholder", :options="[\'工艺技术\', \'其他\']", v-model="value7")\n' +
          '      selector(title="隐患类别", :options="[\'工艺技术\', \'其他\']", v-model="value8")\n' +
          '      x-input(title="隐患部位", placeholder="必填", v-model="value3")\n' +
          '      x-input(title="密码", type="password", placeholder="必填", v-model="value4")\n' +
          '      popup-picker(title="请选择", :data="list", v-model="value5", value-text-align="left")\n' +
          '      popup-picker(title="请选择", placeholder="Required", :data="list", v-model="value6", value-text-align="left")\n' +
          '      x-address(title="地址选择", v-model="addressValue", raw-value :list="addressData", value-text-align="left")\n' +
          '      x-textarea(title="详细信息", placeholder="请填写详细信息", :show-counter="false", :rows="3")\n' +
          '      x-textarea(placeholder="请填写详细信息", :show-counter="false", :rows="3")\n' +
          '        img(slot="restricted-label", style="display:inline-block;vertical-align:middle;", src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", width="24", height="24")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   group\n' +
          '      group-title(slot="title") I\'m a title\n' +
          '        span(style="float:right;") right\n' +
          '      cell(title="cell")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    group(title="justify", label-width="5.5em", label-margin-right="2em", label-align="justify")\n' +
          '      cell(title="哈哈", value="value", is-link)\n' +
          '      cell(title="哈哈哈哈哈", value="value", is-link value-align="left")\n' +
          '      x-input(title="上报人", v-model="value1")\n' +
          '      x-number(title="Quantity", align="left", v-model="numberValue", button-style="round", :min="0", :max="5")\n' +
          '      datetime(title="时间", v-model="time1", value-text-align="left")\n' +
          '      selector(title="隐患类别", :options="[\'工艺技术\', \'其他\']", v-model="value2")\n' +
          '      popup-picker(title="请选择", :data="list", v-model="value5", value-text-align="left")\n' +
          '      x-address(title="地址选择", v-model="addressValue", raw-value :list="addressData", value-text-align="left", label-align="justify")\n' +
          '      x-switch(title="选择")\n' +
          '      x-textarea(title="详细信息", placeholder="请填写详细信息", :show-counter="false", :rows="3")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        addressData: ChinaAddressData,\n' +
          '        addressValue: [\'广东省\', \'深圳市\', \'南山区\'],\n' +
          '        value1: \'张三\',\n' +
          '        value2: \'工艺技术\',\n' +
          '        value3: \'\',\n' +
          '        value7: \'\',\n' +
          '        value8: \'\',\n' +
          '        value4: \'\',\n' +
          '        time1: \'2017-06-01\',\n' +
          '        value5: [\'A\'],\n' +
          '        value6: [],\n' +
          '        list: [[\'A\', \'B\', \'C\']],\n' +
          '        numberValue: 0\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }
</script>

<style>
  @c group {
    @d wrap {

    }
  }
</style>
