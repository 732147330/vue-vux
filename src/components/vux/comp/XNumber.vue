<template lang="jade">
  -var c = 'x-number'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="默认（x-number一定在group组件中使用）")
      x-number(name="Quantity", title="数量")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="监听on-change事件，在调试窗口中输出")
      x-number(title="数量", v-model="changeValue", :min="0", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="设置宽度为100px")
      x-number(title="数量", width="100px")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group(title="圆形按钮")
      x-number(title="数量", v-model="roundValue", button-style="round", :min="0", :max="5")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="设置步长为0.5")
      x-number(title="数量", :step="0.5")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br

    group(title="设置值为1，最小值为-5，最大值为8")
      x-number(title="数量", :min="-5", :max="8", :value="1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br

    group(title="设置可以输入")
      x-number(:value="10", title="数量", fillable)

    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    x-button(mini, plain, @click.native="copyCode08()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, XNumber, XSwitch, Divider, XButton } from 'vux';
  export default {
    components: { Group, XNumber, XSwitch, Divider, XButton },
    data() {
      return {
        tempCode: '',
        changeValue: 0,
        roundValue: 0
      }
    },
    methods: {
      change (val) {
        console.log('change', val)
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
        this.tempCode = ' group(title="默认（x-number一定在group组件中使用）")\n' +
          '      x-number(name="Quantity", title="数量")\n';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode =     '    group(title="监听on-change事件，在调试窗口中输出")\n' +
          '      x-number(title="数量", v-model="changeValue", :min="0", @on-change="change")\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode =    '    group(title="设置宽度为100px")\n' +
          '      x-number(title="数量", width="100px")\n';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode =   '    group(title="圆形按钮")\n' +
          '      x-number(title="数量", v-model="roundValue", button-style="round", :min="0", :max="5")\n' ;
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode =  '    group(title="设置步长为0.5")\n' +
          '      x-number(title="数量", :step="0.5")\n';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode =   '    group(title="设置值为1，最小值为-5，最大值为8")\n' +
          '      x-number(title="数量", :min="-5", :max="8", :value="1")\n';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode =    '    group(title="设置可以输入")\n' +
          '      x-number(:value="10", title="数量", fillable) ';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = 'import { Group, XNumber, XSwitch, Divider, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, XNumber, XSwitch, Divider, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        changeValue: 0,\n' +
          '        roundValue: 0\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      change (val) {\n' +
          '        console.log(\'change\', val)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c x-number {
    @d wrap {

    }
  }
</style>
