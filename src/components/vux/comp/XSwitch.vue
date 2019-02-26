<template lang="jade">
  -var c = 'x-switch'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="值转换map")
      x-switch(title="默认true", :value-map="['0', '1']", v-model="stringValue")
      cell(title="value", :value="typeof stringValue + ' ' + stringValue")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="一般使用")
      x-switch(title="默认false")
      x-switch(title="默认true", :inline-desc="value1 + ''", v-model="value1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="禁用")
      x-switch(title="默认false", disabled)
      x-switch(title="默认true", :value="true", disabled)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group(title="防止默认值")
      x-switch(title="默认false", prevent-default, v-model="value2", @on-click="onClick")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="使用html设置title")
      x-switch(disabled, title="<span style=\"color:red\">我是红色</span>")

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XSwitch, Group, Cell, XButton } from 'vux';
  export default {
    components: { XSwitch, Group, Cell, XButton },
    data() {
      return {
        tempCode: '',
        value1: true,
        value2: false,
        stringValue: '0'
      }
    },
    methods: {
      onClick (newVal, oldVal) {
        console.log(newVal, oldVal)
        this.$vux.loading.show({
          text: 'in processing'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.value2 = newVal
        }, 1000)
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
        this.tempCode = 'group(title="值转换map")\n' +
          '      x-switch(title="默认true", :value-map="[\'0\', \'1\']", v-model="stringValue")\n' +
          '      cell(title="value", :value="typeof stringValue + \' \' + stringValue")\n' ;
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode =  '    group(title="一般使用")\n' +
          '      x-switch(title="默认false")\n' +
          '      x-switch(title="默认true", :inline-desc="value1 + \'\'", v-model="value1")\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode =  '    group(title="禁用")\n' +
          '      x-switch(title="默认false", disabled)\n' +
          '      x-switch(title="默认true", :value="true", disabled)\n' ;
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode =   '    group(title="防止默认值")\n' +
          '      x-switch(title="默认false", prevent-default, v-model="value2", @on-click="onClick")\n';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode =   '    group(title="使用html设置title")\n' +
          '      x-switch(disabled, title="<span style=\\"color:red\\">我是红色</span>") ';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = ' import { XSwitch, Group, Cell, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { XSwitch, Group, Cell, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        value1: true,\n' +
          '        value2: false,\n' +
          '        stringValue: \'0\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onClick (newVal, oldVal) {\n' +
          '        console.log(newVal, oldVal)\n' +
          '        this.$vux.loading.show({\n' +
          '          text: \'in processing\'\n' +
          '        })\n' +
          '        setTimeout(() => {\n' +
          '          this.$vux.loading.hide()\n' +
          '          this.value2 = newVal\n' +
          '        }, 1000)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c x-switch {
    @d wrap {

    }
  }
</style>
