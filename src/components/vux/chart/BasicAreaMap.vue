<template lang="jade">
  -var c = 'basicAreaMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, :tick-count="0")
      v-scale(y, :min="0")
      v-tooltip(show-crosshairs, show-x-value)
      v-area
      v-line

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VScale, VAxis, XButton } from 'vux'
  import  data from '../../../assets/json/vux/data/basicAreaMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis, XButton } ,
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
        this.tempCode = '    v-chart(:data="data")\n' +
          '      v-scale(x, :tick-count="0")\n' +
          '      v-scale(y, :min="0")\n' +
          '      v-tooltip(show-crosshairs, show-x-value)\n' +
          '      v-area\n' +
          '      v-line';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VLine, VArea, VTooltip, VScale, VAxis } from \'vux\'\n' +
          '  import  data from \'../../../assets/json/vux/data/basicAreaMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VScale, VAxis } ,\n' +
          '    data() {\n' +
          '      return {\n' +
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
  @c basicAreaMap {
    @d wrap {
    }
  }
</style>
