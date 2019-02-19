<template lang="jade">
  -var c = 'gradientAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, type="timeCat", :tick-count="3")
      v-scale(y, :min="0")
      v-area(:colors="gradient", shape="smooth")
      v-line(:colors="gradient", shape="smooth")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VScale, VAxis, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/gradientAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis, XButton },
    data() {
      return {
        tempCode: '',
        gradient: [
          [0, '#FE6384'],
          [1, '#f7f7f7']
        ],
        data
      }
    },
    methods:{
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
        this.tempCode = '  v-chart(:data="data")\n' +
          '      v-scale(x, type="timeCat", :tick-count="3")\n' +
          '      v-scale(y, :min="0")\n' +
          '      v-area(:colors="gradient", shape="smooth")\n' +
          '      v-line(:colors="gradient", shape="smooth")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { VChart, VLine, VArea, VTooltip, VScale, VAxis } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/gradientAreaMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        gradient: [\n' +
          '          [0, \'#FE6384\'],\n' +
          '          [1, \'#f7f7f7\']\n' +
          '        ],\n' +
          '        data\n' +
          '      }\n' +
          '    },\n' +
          '    methods:{\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c gradientAreaMap {
    @d wrap {

    }
  }
</style>
