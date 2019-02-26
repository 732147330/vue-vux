<template lang="jade">
  -var c = 'popup-radio'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      popup-radio(title="options", :options="options1", v-model="option1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group
      popup-radio(title="options", :options="options2", v-model="option2", placeholder="placeholder")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group
      popup-radio(title="options", :options="options3", v-model="option3")
        p(slot="popup-header", class="vux-1px-b demo3-slot") Please select
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group
      popup-radio(title="readonly", readonly :options="options3", v-model="option4")
        p(slot="popup-header", class="vux-1px-b demo3-slot") Please select
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group
      popup-radio(title="slot:each-item", :options="options3", v-model="option5")
        // <!-- use scope="props" when vue < 2.5.0 -->
        template(slot-scope="props", slot="each-item")
          p
            | custom item
            img(src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", class="vux-radio-icon")
            | {{ props.label }}
            br
            span(style="color:#666;") {{ props.index + 1 }} another line

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode07()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, PopupRadio, XButton } from 'vux';
  export default {
    components: { Group, PopupRadio, XButton },
    data() {
      return {
        tempCode: '',
        option1: 'A',
        options1: ['A', 'B', 'C'],
        option2: '',
        options2: [{
          key: 'A',
          value: 'label A'
        }, {
          key: 'B',
          value: 'label B'
        }],
        option3: 'C',
        options3: ['A', 'B', 'C'],
        option4: 'B',
        option5: 'B'
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
        this.tempCode = '     group\n' +
          '      popup-radio(title="options", :options="options1", v-model="option1")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' group\n' +
          '      popup-radio(title="options", :options="options2", v-model="option2", placeholder="placeholder")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  group\n' +
          '      popup-radio(title="options", :options="options3", v-model="option3")\n' +
          '        p(slot="popup-header", class="vux-1px-b demo3-slot") Please select';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group\n' +
          '      popup-radio(title="readonly", readonly :options="options3", v-model="option4")\n' +
          '        p(slot="popup-header", class="vux-1px-b demo3-slot") Please select';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '    group\n' +
          '      popup-radio(title="slot:each-item", :options="options3", v-model="option5")\n' +
          '        // <!-- use scope="props" when vue < 2.5.0 -->\n' +
          '        template(slot-scope="props", slot="each-item")\n' +
          '          p\n' +
          '            | custom item\n' +
          '            img(src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", class="vux-radio-icon")\n' +
          '            | {{ props.label }}\n' +
          '            br\n' +
          '            span(style="color:#666;") {{ props.index + 1 }} another line';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '   import { Group, PopupRadio, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, PopupRadio, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        option1: \'A\',\n' +
          '        options1: [\'A\', \'B\', \'C\'],\n' +
          '        option2: \'\',\n' +
          '        options2: [{\n' +
          '          key: \'A\',\n' +
          '          value: \'label A\'\n' +
          '        }, {\n' +
          '          key: \'B\',\n' +
          '          value: \'label B\'\n' +
          '        }],\n' +
          '        option3: \'C\',\n' +
          '        options3: [\'A\', \'B\', \'C\'],\n' +
          '        option4: \'B\',\n' +
          '        option5: \'B\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '.demo3-slot {\n' +
          '        text-align: center;\n' +
          '        padding: 8px 0;\n' +
          '        color: #888;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c popup-radio {
    @d wrap {
      .demo3-slot {
        text-align: center;
        padding: 8px 0;
        color: #888;
      }
    }
  }
</style>
