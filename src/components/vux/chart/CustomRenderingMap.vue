<template lang="jade">
  -var c = 'customRenderingMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(prevent-render,@on-render="renderChart")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, XButton } from 'vux'

  export default {
    components: { VChart, XButton },
    methods: {
      renderChart ({ chart }) {
        const data = [ { x: '1', y: 85 } ]
        chart.source(data, {
          y: {
            max: 100,
            min: 0
          }
        })
        chart.axis(false)
        chart.tooltip(false)
        chart.coord('polar', {
          transposed: true,
          innerRadius: 0.8,
          radius: 0.85
        })
        chart.guide().arc({
          start: [ 0, 0 ],
          end: [ 1, 99.98 ],
          top: false,
          style: {
            lineWidth: 20,
            stroke: '#ccc'
          }
        })
        chart.guide().text({
          position: [ '50%', '50%' ],
          content: '85%',
          style: {
            fontSize: 24,
            fill: '#1890FF'
          }
        })
        chart.interval()
          .position('x*y')
          .size(20)
          .animate({
            appear: {
              duration: 1200,
              easing: 'cubicIn'
            }
          })
        chart.render()
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
        this.tempCode = '     v-chart(prevent-render,@on-render="renderChart")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { VChart } from \'vux\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart },\n' +
          '    methods: {\n' +
          '      renderChart ({ chart }) {\n' +
          '        const data = [ { x: \'1\', y: 85 } ]\n' +
          '        chart.source(data, {\n' +
          '          y: {\n' +
          '            max: 100,\n' +
          '            min: 0\n' +
          '          }\n' +
          '        })\n' +
          '        chart.axis(false)\n' +
          '        chart.tooltip(false)\n' +
          '        chart.coord(\'polar\', {\n' +
          '          transposed: true,\n' +
          '          innerRadius: 0.8,\n' +
          '          radius: 0.85\n' +
          '        })\n' +
          '        chart.guide().arc({\n' +
          '          start: [ 0, 0 ],\n' +
          '          end: [ 1, 99.98 ],\n' +
          '          top: false,\n' +
          '          style: {\n' +
          '            lineWidth: 20,\n' +
          '            stroke: \'#ccc\'\n' +
          '          }\n' +
          '        })\n' +
          '        chart.guide().text({\n' +
          '          position: [ \'50%\', \'50%\' ],\n' +
          '          content: \'85%\',\n' +
          '          style: {\n' +
          '            fontSize: 24,\n' +
          '            fill: \'#1890FF\'\n' +
          '          }\n' +
          '        })\n' +
          '        chart.interval()\n' +
          '          .position(\'x*y\')\n' +
          '          .size(20)\n' +
          '          .animate({\n' +
          '            appear: {\n' +
          '              duration: 1200,\n' +
          '              easing: \'cubicIn\'\n' +
          '            }\n' +
          '          })\n' +
          '        chart.render()\n' +
          '      },\n' +
          '    },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
    data() {
      return {
        tempCode: '',
      }
    }
  }

</script>

<style>
  @c customRenderingMap {
    @d wrap {
    }
  }
</style>
