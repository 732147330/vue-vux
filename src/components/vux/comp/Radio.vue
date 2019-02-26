<template lang="jade">
  -var c = 'radio'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="default")
      radio(:options="radio001", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="默认值 China（禁用操作）")
      radio(:options="radio001", value="China", disabled)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(:title="'fill mode value is '+radio001Value")
      radio(:selected-label-style="{color: '#FF9900'}", fill-mode :options="radio001", v-model="radio001Value", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group(title="fill mode with custom placeholder and label")
      radio(fill-mode fill-label="Other", fill-placeholder="填写其他的哦", :options="radio001", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="object options")
      radio(fill-mode fill-label="Other", fill-placeholder="other", :options="radio003", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br

    group(title="slot:each-item")
      radio(:options="radio001")
        //     <!-- use scope="props" when vue  < 2.5.0 -->
        template(slot-scope="props", slot="each-item")
          p
            | V{{ props.index + 1 }}
            img(src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", class="vux-radio-icon")
            | {{ props.label }}

    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    x-button(mini, plain, @click.native="copyCode07()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Radio, Group, XButton } from 'vux';
  export default {
    components: { Radio, Group, XButton },
    data() {
      return {
        tempCode: '',
        radio001: [ 'China', 'Japan' ],
        radio001Value: 'China',
        radio002Value: 'Japan',
        radio003: [{
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '001',
          value: 'radio001'
        }, {
          icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
          key: '002',
          value: 'radio002'
        }]
      }
    },
    methods: {
      change (value, label) {
        console.log('change:', value, label)
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
        this.tempCode = '     group(title="default")\n' +
          '      radio(:options="radio001", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   group(title="默认值 China（禁用操作）")\n' +
          '      radio(:options="radio001", value="China", disabled)';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    group(:title="\'fill mode value is \'+radio001Value")\n' +
          '      radio(:selected-label-style="{color: \'#FF9900\'}", fill-mode :options="radio001", v-model="radio001Value", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group(title="fill mode with custom placeholder and label")\n' +
          '      radio(fill-mode fill-label="Other", fill-placeholder="填写其他的哦", :options="radio001", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  group(title="object options")\n' +
          '      radio(fill-mode fill-label="Other", fill-placeholder="other", :options="radio003", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '   group(title="slot:each-item")\n' +
          '      radio(:options="radio001")\n' +
          '        //     <!-- use scope="props" when vue  < 2.5.0 -->\n' +
          '        template(slot-scope="props", slot="each-item")\n' +
          '          p\n' +
          '            | V{{ props.index + 1 }}\n' +
          '            img(src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", class="vux-radio-icon")\n' +
          '            | {{ props.label }}';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = ' import { Radio, Group, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Radio, Group, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        radio001: [ \'China\', \'Japan\' ],\n' +
          '        radio001Value: \'China\',\n' +
          '        radio002Value: \'Japan\',\n' +
          '        radio003: [{\n' +
          '          icon: \'http://dn-placeholder.qbox.me/110x110/FF2D55/000\',\n' +
          '          key: \'001\',\n' +
          '          value: \'radio001\'\n' +
          '        }, {\n' +
          '          icon: \'http://dn-placeholder.qbox.me/110x110/FF2D55/000\',\n' +
          '          key: \'002\',\n' +
          '          value: \'radio002\'\n' +
          '        }]\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      change (value, label) {\n' +
          '        console.log(\'change:\', value, label)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c radio {
    @d wrap {

    }
  }
</style>
