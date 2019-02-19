<template lang="jade">
  -var c = 'displayDotGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      //默认 y 轴数值从数据的最小值到最大值，此处重置为从 0 开始
      v-scale(y, :min="0")
      v-point(:styles="{stroke: '#fff',lineWidth: 1}")
      //onShow 为 F2 属性而非事件
      v-tooltip(:show-item-marker="false", :on-show="onShow")
      v-line

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VPoint, VTooltip, VLine, VScale, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/displayDotGraphMapData'

  export default {
    components: { VChart, VPoint, VTooltip, VLine, VScale, XButton },
    data() {
      return {
        tempCode: '',
        onShow (ev) {
          const { items } = ev
          //items[0].name = null
          items[0].name = '价格'
          items[0].value = '$ ' + items[0].value
        },
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
          '      //默认 y 轴数值从数据的最小值到最大值，此处重置为从 0 开始\n' +
          '      v-scale(y, :min="0")\n' +
          '      v-point(:styles="{stroke: \'#fff\',lineWidth: 1}")\n' +
          '      //onShow 为 F2 属性而非事件\n' +
          '      v-tooltip(:show-item-marker="false", :on-show="onShow")\n' +
          '      v-line';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VPoint, VTooltip, VLine, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/displayDotGraphMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VPoint, VTooltip, VLine, VScale },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        onShow (ev) {\n' +
          '          const { items } = ev\n' +
          '          //items[0].name = null\n' +
          '          items[0].name = \'价格\'\n' +
          '          items[0].value = \'$ \' + items[0].value\n' +
          '        },\n' +
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
  @c displayDotGraphMap {
    @d wrap {
    }
  }
</style>
