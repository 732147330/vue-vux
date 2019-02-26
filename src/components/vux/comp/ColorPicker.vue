<template lang="jade">
  -var c = 'color-picker'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="padding: 15px;")
      color-picker(:colors="colors1", v-model="color1")
      br
      color-picker(:colors="colors1", v-model="color1", size="middle")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="在cell中使用")
      cell(:title="'Color:' + color1")
        color-picker(:colors="colors1", v-model="color1", size="small")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="不带标题的 cell")
      cell(primary="content")
        color-picker(:colors="colors1", v-model="color1", size="middle")

    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { ColorPicker, Group, Cell, XButton } from 'vux';
  export default {
    components: { ColorPicker, Group, Cell, XButton },
    data() {
      return {
        tempCode: '',
        color1: '#FFEF7D',
        colors1: ['#FF3B3B', '#FFEF7D', '#8AEEB1', '#8B8AEE', '#CC68F8', '#fff']
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
        this.tempCode = 'div(style="padding: 15px;")\n' +
          '      color-picker(:colors="colors1", v-model="color1")\n' +
          '      br\n' +
          '      color-picker(:colors="colors1", v-model="color1", size="middle")\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode =  '    group(title="在cell中使用")\n' +
          '      cell(:title="\'Color:\' + color1")\n' +
          '        color-picker(:colors="colors1", v-model="color1", size="small")\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode =  '    group(title="不带标题的 cell")\n' +
          '      cell(primary="content")\n' +
          '        color-picker(:colors="colors1", v-model="color1", size="middle")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' import { ColorPicker, Group, Cell, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { ColorPicker, Group, Cell, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        color1: \'#FFEF7D\',\n' +
          '        colors1: [\'#FF3B3B\', \'#FFEF7D\', \'#8AEEB1\', \'#8B8AEE\', \'#CC68F8\', \'#fff\']\n' +
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
  @c color-picker {
    @d wrap {

    }
  }
</style>
