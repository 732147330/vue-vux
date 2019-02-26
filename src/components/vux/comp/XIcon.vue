<template lang="jade">
  -var c = 'x-icon'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      cell(title="used in cell")
        x-icon(type="ios-plus", class="cell-x-icon", @click="console")
    div(style="padding: 15px;")
      x-icon(type="ios-ionic-outline", size="30")
      x-icon(type="ios-arrow-back", size="30")
      x-icon(type="ios-arrow-forward", size="30")
      x-icon(type="ios-arrow-up", size="30")
      x-icon(type="ios-arrow-right", size="30")
      x-icon(type="ios-arrow-down", size="30")
      x-icon(type="ios-arrow-left", size="30")
      x-icon(type="ios-arrow-thin-up", size="30")
      x-icon(type="ios-arrow-thin-right", size="30")
      x-icon(type="ios-arrow-thin-down", size="30")
      x-icon(type="ios-arrow-thin-left", size="30")
      x-icon(type="ios-circle-filled", size="30")
      x-icon(type="ios-circle-outline", size="30")
      x-icon(type="ios-checkmark-empty", size="30")
      x-icon(type="ios-checkmark-outline", size="30")
      x-icon(type="ios-checkmark", size="30")
      x-icon(type="ios-plus-empty", size="30")
      x-icon(type="ios-plus-outline", size="30")
      x-icon(type="ios-plus", size="30")
      x-icon(type="ios-close-empty", size="30")
      x-icon(type="ios-close-outline", size="30")
      x-icon(type="ios-close", size="30")
      x-icon(type="ios-minus-empty", size="30")
      x-icon(type="ios-minus-outline", size="30")
      x-icon(type="ios-minus", size="30")
      x-icon(type="ios-information-empty", size="30")
      x-icon(type="ios-information-outline", size="30")
      x-icon(type="ios-information", size="30")
      x-icon(type="ios-help-empty", size="30")
      x-icon(type="ios-help-outline", size="30")
      x-icon(type="ios-help", size="30")
      x-icon(type="ios-search", size="30")
      x-icon(type="ios-search-strong", size="30")
      x-icon(type="ios-star", size="30")
      x-icon(type="ios-star-half", size="30")
      x-icon(type="ios-star-outline", size="30")
      x-icon(type="ios-heart", size="30")
      x-icon(type="ios-heart-outline", size="30")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, Cell, XButton } from 'vux';
  export default {
    components: { Group, Cell, XButton },
    data() {
      return {
        tempCode: '',
      }
    },
    methods: {
      console () {
        console.log('click')
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
        this.tempCode = '  group\n' +
          '      cell(title="used in cell")\n' +
          '        x-icon(type="ios-plus", class="cell-x-icon", @click="console")\n' +
          '    div(style="padding: 15px;")\n' +
          '      x-icon(type="ios-ionic-outline", size="30")\n' +
          '      x-icon(type="ios-arrow-back", size="30")\n' +
          '      x-icon(type="ios-arrow-forward", size="30")\n' +
          '      x-icon(type="ios-arrow-up", size="30")\n' +
          '      x-icon(type="ios-arrow-right", size="30")\n' +
          '      x-icon(type="ios-arrow-down", size="30")\n' +
          '      x-icon(type="ios-arrow-left", size="30")\n' +
          '      x-icon(type="ios-arrow-thin-up", size="30")\n' +
          '      x-icon(type="ios-arrow-thin-right", size="30")\n' +
          '      x-icon(type="ios-arrow-thin-down", size="30")\n' +
          '      x-icon(type="ios-arrow-thin-left", size="30")\n' +
          '      x-icon(type="ios-circle-filled", size="30")\n' +
          '      x-icon(type="ios-circle-outline", size="30")\n' +
          '      x-icon(type="ios-checkmark-empty", size="30")\n' +
          '      x-icon(type="ios-checkmark-outline", size="30")\n' +
          '      x-icon(type="ios-checkmark", size="30")\n' +
          '      x-icon(type="ios-plus-empty", size="30")\n' +
          '      x-icon(type="ios-plus-outline", size="30")\n' +
          '      x-icon(type="ios-plus", size="30")\n' +
          '      x-icon(type="ios-close-empty", size="30")\n' +
          '      x-icon(type="ios-close-outline", size="30")\n' +
          '      x-icon(type="ios-close", size="30")\n' +
          '      x-icon(type="ios-minus-empty", size="30")\n' +
          '      x-icon(type="ios-minus-outline", size="30")\n' +
          '      x-icon(type="ios-minus", size="30")\n' +
          '      x-icon(type="ios-information-empty", size="30")\n' +
          '      x-icon(type="ios-information-outline", size="30")\n' +
          '      x-icon(type="ios-information", size="30")\n' +
          '      x-icon(type="ios-help-empty", size="30")\n' +
          '      x-icon(type="ios-help-outline", size="30")\n' +
          '      x-icon(type="ios-help", size="30")\n' +
          '      x-icon(type="ios-search", size="30")\n' +
          '      x-icon(type="ios-search-strong", size="30")\n' +
          '      x-icon(type="ios-star", size="30")\n' +
          '      x-icon(type="ios-star-half", size="30")\n' +
          '      x-icon(type="ios-star-outline", size="30")\n' +
          '      x-icon(type="ios-heart", size="30")\n' +
          '      x-icon(type="ios-heart-outline", size="30")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { Group, Cell, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, Cell, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      console () {\n' +
          '        console.log(\'click\')\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '.vux-x-icon {\n' +
          '  fill: #F70968;\n' +
          '}\n' +
          '.cell-x-icon {\n' +
          '  display: block;\n' +
          '  fill: green;\n' +
          '}';
        this.copyCodeMethod();
      }
    }
  }

</script>

<style>
  @c x-icon {
    @d wrap {
      .vux-x-icon {
        fill: #F70968;
      }
      .cell-x-icon {
        display: block;
        fill: green;
      }
    }
  }
</style>
