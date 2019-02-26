<template lang="jade">
  -var c = 'cell-box'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      cell(title="cell", value="hello", is-link)
      cell-box(is-link)
        | cell-box long long long long long long long
      cell-box
        | cell-box hello world hello world hello world
      cell(title="cell", value="hello", is-link)

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, Cell, CellBox, XButton } from 'vux';
  export default {
    components: { Group, Cell, CellBox, XButton },
    data() {
      return {
        tempCode: '',
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
        this.tempCode = ' group\n' +
          '      cell(title="cell", value="hello", is-link)\n' +
          '      cell-box(is-link)\n' +
          '        | cell-box long long long long long long long\n' +
          '      cell-box\n' +
          '        | cell-box hello world hello world hello world\n' +
          '      cell(title="cell", value="hello", is-link)';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { Group, Cell, CellBox } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Group, Cell, CellBox },\n' +
          '    data() {\n' +
          '      return {\n' +
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
  @c cell-box {
    @d wrap {

    }
  }
</style>
