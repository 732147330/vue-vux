<template lang="jade">
  -var c = 'realTimeGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data", ref="demo")
      v-scale(x, type="timeCat", :tick-count="3", mask="hh:mm:ss")
      v-scale(y, :min="8", :tick-count="5")
      v-tooltip(:show-item-marker="false", show-x-value)
      v-guide(type="html", :options="guide1")
      v-guide(type="html", :options="guide2")
      v-line

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VTooltip, VLine, VScale, VGuide, XButton } from 'vux'

  const data = []

  // 添加数据，模拟数据，可以指定当前时间的偏移的秒
  function getRecord (offset) {
    offset = offset || 0
    return {
      time: new Date().getTime() + offset * 1000,
      value: Math.random() + 10
    }
  }

  data.push(getRecord(-2))
  data.push(getRecord(-1))
  data.push(getRecord())

  export default {
    components: { VChart, VTooltip, VLine, VScale, VGuide, XButton },
    mounted () {
      this.timer = setInterval(() => {
        data.push(getRecord())
      }, 2000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    data() {
      return {
        tempCode: '',
        guide1: {
          position (xScale, yScales) {
            const xValues = xScale.values
            const yValues = yScales[0].values
            const xMax = xValues[xValues.length - 1]
            const yMax = yValues[yValues.length - 1]
            return [ xMax, yMax ]
          },
          html: '<div style="border-radius: 100%;border: none;width: 12px;height: 12px;background-color: rgb(24, 144, 255);transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1);"></div>'
        },
        guide2: {
          position (xScale, yScales) {
            const xValues = xScale.values
            const yValues = yScales[0].values
            const xMax = xValues[xValues.length - 1]
            const yMax = yValues[yValues.length - 1]
            return [ xMax, yMax ]
          },
          html: '<div style="border-radius: 100%;border: none;width: 20px;height: 20px;background-color: rgba(24, 144, 255, 0.5);transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1);"></div>'
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
        this.tempCode = '  v-chart(:data="data", ref="demo")\n' +
          '      v-scale(x, type="timeCat", :tick-count="3", mask="hh:mm:ss")\n' +
          '      v-scale(y, :min="8", :tick-count="5")\n' +
          '      v-tooltip(:show-item-marker="false", show-x-value)\n' +
          '      v-guide(type="html", :options="guide1")\n' +
          '      v-guide(type="html", :options="guide2")\n' +
          '      v-line';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VTooltip, VLine, VScale, VGuide } from \'vux\'\n' +
          '\n' +
          '  const data = []\n' +
          '\n' +
          '  // 添加数据，模拟数据，可以指定当前时间的偏移的秒\n' +
          '  function getRecord (offset) {\n' +
          '    offset = offset || 0\n' +
          '    return {\n' +
          '      time: new Date().getTime() + offset * 1000,\n' +
          '      value: Math.random() + 10\n' +
          '    }\n' +
          '  }\n' +
          '\n' +
          '  data.push(getRecord(-2))\n' +
          '  data.push(getRecord(-1))\n' +
          '  data.push(getRecord())\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VTooltip, VLine, VScale, VGuide },\n' +
          '    mounted () {\n' +
          '      this.timer = setInterval(() => {\n' +
          '        data.push(getRecord())\n' +
          '      }, 2000)\n' +
          '    },\n' +
          '    beforeDestroy () {\n' +
          '      clearInterval(this.timer)\n' +
          '    },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        guide1: {\n' +
          '          position (xScale, yScales) {\n' +
          '            const xValues = xScale.values\n' +
          '            const yValues = yScales[0].values\n' +
          '            const xMax = xValues[xValues.length - 1]\n' +
          '            const yMax = yValues[yValues.length - 1]\n' +
          '            return [ xMax, yMax ]\n' +
          '          },\n' +
          '          html: \'<div style="border-radius: 100%;border: none;width: 12px;height: 12px;background-color: rgb(24, 144, 255);transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1);"></div>\'\n' +
          '        },\n' +
          '        guide2: {\n' +
          '          position (xScale, yScales) {\n' +
          '            const xValues = xScale.values\n' +
          '            const yValues = yScales[0].values\n' +
          '            const xMax = xValues[xValues.length - 1]\n' +
          '            const yMax = yValues[yValues.length - 1]\n' +
          '            return [ xMax, yMax ]\n' +
          '          },\n' +
          '          html: \'<div style="border-radius: 100%;border: none;width: 20px;height: 20px;background-color: rgba(24, 144, 255, 0.5);transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1);"></div>\'\n' +
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
  @c realTimeGraphMap {
    @d wrap {
    }
  }
</style>
