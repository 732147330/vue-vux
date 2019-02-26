<template lang="jade">
  -var c = 'cell-form-preview'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      cell(title="合计", value="¥1024")
      cell-form-preview(:list="list")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { CellFormPreview, Group, Cell, XButton } from 'vux';
  export default {
    components: { CellFormPreview, Group, Cell, XButton },
    data() {
      return {
        tempCode: '',
        list: [{
          label: '苹果',
          value: '3.29'
        }, {
          label: '香蕉',
          value: '1.04'
        }, {
          label: '鱼肉',
          value: '8.00'
        }]
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
        this.tempCode = '    group\n' +
          '      cell(title="合计", value="¥1024")\n' +
          '      cell-form-preview(:list="list")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { CellFormPreview, Group, Cell, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { CellFormPreview, Group, Cell, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        list: [{\n' +
          '          label: \'苹果\',\n' +
          '          value: \'3.29\'\n' +
          '        }, {\n' +
          '          label: \'香蕉\',\n' +
          '          value: \'1.04\'\n' +
          '        }, {\n' +
          '          label: \'鱼肉\',\n' +
          '          value: \'8.00\'\n' +
          '        }]\n' +
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
  @c badge {
    @d wrap {

    }
  }
</style>
