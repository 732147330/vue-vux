<template lang="jade">
  -var c = 'smoothGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, type="timeCat", mask="MM/DD", :tick-count="3")
      v-scale(y, :min="0", alias="日均温度", :tick-count="5")
      v-point(:style="{stroke: '#fff',lineWidth: 1}", shape="smooth")
      v-line(shape="smooth")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VTooltip, VLine, VScale, VPoint, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/smoothGraphMapData'

  export default {
    components: { VChart, VTooltip, VLine, VScale, VPoint, XButton },
    data() {
      return {
        tempCode: '',
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
        this.tempCode = '   v-chart(:data="data")\n' +
          '      v-scale(x, type="timeCat", mask="MM/DD", :tick-count="3")\n' +
          '      v-scale(y, :min="0", alias="日均温度", :tick-count="5")\n' +
          '      v-point(:style="{stroke: \'#fff\',lineWidth: 1}", shape="smooth")\n' +
          '      v-line(shape="smooth") ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VTooltip, VLine, VScale, VPoint } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/smoothGraphMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VTooltip, VLine, VScale, VPoint },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        data\n' +
          '      }\n' +
          '    },\n' +
          '    methods:{\n' +
          '    },\n' +
          '  } ';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c smoothGraphMap {
    @d wrap {
    }
  }
</style>
