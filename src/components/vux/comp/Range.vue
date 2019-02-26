<template lang="jade">
  -var c = 'range'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="default range")
      cell(title="Default", :inline-desc="'value: '+data1", primary="content")
        range(v-model="data1", @on-change="onChange")
      cell(title="allow decimals", :inline-desc="'value is: '+data2", primary="content")
        range(v-model="data2", decimal)
      cell(title="value=20", :inline-desc="'value is: '+data3", primary="content")
        range(v-model="data3")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="min and max")
      cell(title="min=8", :inline-desc="'value is: '+data4", primary="content")
        range(v-model="data4", :min="8")
      cell(title="max=88", :inline-desc="'value is: '+data5", primary="content")
        range(v-model="data5", :max="88")
      cell(title="min and max", :inline-desc="'value is: '+data6", primary="content")
        range(v-model="data6", :min="7", :max="77")
      cell(title="change min and max", primary="content")
        range(v-model="dynamiValue", :min="min", :max="max", :step="step")
      cell(title="current value", :value="dynamiValue + ''")
    br
    div(style="margin:0 10px;")
      x-button(type="primary", @click.native="update") update min = {{min}}, max = {{max}} and step = {{step}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="Step")
      cell(title="step=10", :inline-desc="'valus is: '+data7", primary="content")
        range(v-model="data7", :min="7", :max="77", :step="10")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group(title="disabled")
      cell(title="disabled=true", :inline-desc="'valus is: '+data8", primary="content")
        range(v-model="data8", disabled)
      cell(title="Opacity", :inline-desc="'valus is: '+data8", primary="content")
        range(v-model="data8", disabled :disabled-opacity="0.1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="bar height")
      cell(title="Line width", :inline-desc="'value is: '+data9", primary="content")
        range(v-model="data9", :range-bar-height="4")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br

    group(title="custom min and max html")
      cell(title="文字大小", :inline-desc="'font size: ' + data10", primary="content")
        range(v-model="data10", :min="12", :max="22", min-HTML="<span style='font-size:12px;'>小</span>", max-HTML="<span style='font-size:22px;'>大</span>")
      cell(title="bcontentness", :inline-desc="'value is: ' + data11 + '%'", primary="content")
        range(v-model="data11", min-HTML="<span style='font-size:16px;color:#F90;'>☼</span>", max-HTML="<span style='font-size:30px;color:#F90;'>☼</span>")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br

    group(title="two way binding")
      cell(title="Default", primary="content")
        range(v-model="data12")
      cell(title="Default", primary="content")
        range(v-model="data12")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    br

    group(:title="'use v-show ' + 'data: ' + data13")
      cell(title="Default", primary="content")
        range(:step="10", v-model="data13", v-show="showData13")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码
    br

    group(title="touchstart and touchend")
      cell(title="Default", primary="content")
        range(:step="1", v-model="data14", @on-touchstart="onTouchstart", @on-touchend="onTouchend")

    x-button(mini, plain, type="primary", @click.native="copyCode09()") 复制代码
    x-button(mini, plain, @click.native="copyCode10()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XButton, Range, Group, GroupTitle, Cell } from 'vux';
  export default {
    components: { XButton, Range, Group, GroupTitle, Cell },
    mounted () {
      setTimeout(() => {
        this.showData13 = true
      }, 2000)
    },
    data() {
      return {
        tempCode: '',
        data1: 0,
        data2: 0,
        data3: 20,
        data4: 18,
        data5: 28,
        data6: 37,
        data7: 17,
        data8: 25,
        data9: 50,
        data10: 14,
        data11: 30,
        data12: 0,
        data13: 10,
        data14: 0,
        showData13: false,
        min: 0,
        max: 100,
        step: 1,
        dynamiValue: 0
      }
    },
    methods: {
      onChange (val) {
        console.log('change', val)
      },
      update () {
        this.min = Math.floor(Math.random() * 30)
        this.max = Math.floor(50 + Math.random() * 100)
        this.step = 1 + Math.floor(Math.random() * 10)
      },
      onTouchstart (e) {
        console.log('touchstart')
      },
      onTouchend (e) {
        console.log('touchend')
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
        this.tempCode = '    group(title="default range")\n' +
          '      cell(title="Default", :inline-desc="\'value: \'+data1", primary="content")\n' +
          '        range(v-model="data1", @on-change="onChange")\n' +
          '      cell(title="allow decimals", :inline-desc="\'value is: \'+data2", primary="content")\n' +
          '        range(v-model="data2", decimal)\n' +
          '      cell(title="value=20", :inline-desc="\'value is: \'+data3", primary="content")\n' +
          '        range(v-model="data3") ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '     group(title="min and max")\n' +
          '      cell(title="min=8", :inline-desc="\'value is: \'+data4", primary="content")\n' +
          '        range(v-model="data4", :min="8")\n' +
          '      cell(title="max=88", :inline-desc="\'value is: \'+data5", primary="content")\n' +
          '        range(v-model="data5", :max="88")\n' +
          '      cell(title="min and max", :inline-desc="\'value is: \'+data6", primary="content")\n' +
          '        range(v-model="data6", :min="7", :max="77")\n' +
          '      cell(title="change min and max", primary="content")\n' +
          '        range(v-model="dynamiValue", :min="min", :max="max", :step="step")\n' +
          '      cell(title="current value", :value="dynamiValue + \'\'")\n' +
          '    br\n' +
          '    div(style="margin:0 10px;")\n' +
          '      x-button(type="primary", @click.native="update") update min = {{min}}, max = {{max}} and step = {{step}} ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' group(title="Step")\n' +
          '      cell(title="step=10", :inline-desc="\'valus is: \'+data7", primary="content")\n' +
          '        range(v-model="data7", :min="7", :max="77", :step="10")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' group(title="disabled")\n' +
          '      cell(title="disabled=true", :inline-desc="\'valus is: \'+data8", primary="content")\n' +
          '        range(v-model="data8", disabled)\n' +
          '      cell(title="Opacity", :inline-desc="\'valus is: \'+data8", primary="content")\n' +
          '        range(v-model="data8", disabled :disabled-opacity="0.1")';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = ' group(title="bar height")\n' +
          '      cell(title="Line width", :inline-desc="\'value is: \'+data9", primary="content")\n' +
          '        range(v-model="data9", :range-bar-height="4")';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '   group(title="custom min and max html")\n' +
          '      cell(title="文字大小", :inline-desc="\'font size: \' + data10", primary="content")\n' +
          '        range(v-model="data10", :min="12", :max="22", min-HTML="<span style=\'font-size:12px;\'>小</span>", max-HTML="<span style=\'font-size:22px;\'>大</span>")\n' +
          '      cell(title="bcontentness", :inline-desc="\'value is: \' + data11 + \'%\'", primary="content")\n' +
          '        range(v-model="data11", min-HTML="<span style=\'font-size:16px;color:#F90;\'>☼</span>", max-HTML="<span style=\'font-size:30px;color:#F90;\'>☼</span>")';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '   group(title="two way binding")\n' +
          '      cell(title="Default", primary="content")\n' +
          '        range(v-model="data12")\n' +
          '      cell(title="Default", primary="content")\n' +
          '        range(v-model="data12")';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '  group(:title="\'use v-show \' + \'data: \' + data13")\n' +
          '      cell(title="Default", primary="content")\n' +
          '        range(:step="10", v-model="data13", v-show="showData13")';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = 'group(title="touchstart and touchend")\n' +
          '      cell(title="Default", primary="content")\n' +
          '        range(:step="1", v-model="data14", @on-touchstart="onTouchstart", @on-touchend="onTouchend")';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode = ' import { XButton, Range, Group, GroupTitle, Cell } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { XButton, Range, Group, GroupTitle, Cell },\n' +
          '    mounted () {\n' +
          '      setTimeout(() => {\n' +
          '        this.showData13 = true\n' +
          '      }, 2000)\n' +
          '    },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        data1: 0,\n' +
          '        data2: 0,\n' +
          '        data3: 20,\n' +
          '        data4: 18,\n' +
          '        data5: 28,\n' +
          '        data6: 37,\n' +
          '        data7: 17,\n' +
          '        data8: 25,\n' +
          '        data9: 50,\n' +
          '        data10: 14,\n' +
          '        data11: 30,\n' +
          '        data12: 0,\n' +
          '        data13: 10,\n' +
          '        data14: 0,\n' +
          '        showData13: false,\n' +
          '        min: 0,\n' +
          '        max: 100,\n' +
          '        step: 1,\n' +
          '        dynamiValue: 0\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onChange (val) {\n' +
          '        console.log(\'change\', val)\n' +
          '      },\n' +
          '      update () {\n' +
          '        this.min = Math.floor(Math.random() * 30)\n' +
          '        this.max = Math.floor(50 + Math.random() * 100)\n' +
          '        this.step = 1 + Math.floor(Math.random() * 10)\n' +
          '      },\n' +
          '      onTouchstart (e) {\n' +
          '        console.log(\'touchstart\')\n' +
          '      },\n' +
          '      onTouchend (e) {\n' +
          '        console.log(\'touchend\')\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c range {
    @d wrap {

    }
  }
</style>
