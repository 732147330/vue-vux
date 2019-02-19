<template lang="jade">
  -var c = 'gradientGraphMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(:data="data")
      v-scale(x, :tick-count="5", :max="2020")
      v-scale(y, alias="年龄")
      v-line(shape="smooth", :colors="gradient")
      v-guide(type="tag", :options="tag")
      v-area(shape="smooth", :colors="gradient")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VGuide, VLine, VArea, VScale, XButton } from 'vux'
  import data from '../../../assets/json/vux/data/gradientGraphMapData'

  export default {
    components: { VChart, VGuide, VLine, VArea, VScale, XButton },
    data() {
      return {
        tempCode: '',
        gradient: [
          [0, '#F2C587'],
          [0.5, '#ED7973'],
          [1, '#8659AF']
        ],
        tag: {
          position: [ 2017, 30.12 ],
          content: '30.12',
          direct: 'tl',
          offsetY: -5,
          background: {
            fill: '#8659AF'
          },
          pointStyle: {
            fill: '#8659AF'
          }
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
          '      v-scale(x, :tick-count="5", :max="2020")\n' +
          '      v-scale(y, alias="年龄")\n' +
          '      v-line(shape="smooth", :colors="gradient")\n' +
          '      v-guide(type="tag", :options="tag")\n' +
          '      v-area(shape="smooth", :colors="gradient") ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { VChart, VGuide, VLine, VArea, VScale } from \'vux\'\n' +
          '  import data from \'../../../assets/json/vux/data/gradientGraphMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VGuide, VLine, VArea, VScale },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        gradient: [\n' +
          '          [0, \'#F2C587\'],\n' +
          '          [0.5, \'#ED7973\'],\n' +
          '          [1, \'#8659AF\']\n' +
          '        ],\n' +
          '        tag: {\n' +
          '          position: [ 2017, 30.12 ],\n' +
          '          content: \'30.12\',\n' +
          '          direct: \'tl\',\n' +
          '          offsetY: -5,\n' +
          '          background: {\n' +
          '            fill: \'#8659AF\'\n' +
          '          },\n' +
          '          pointStyle: {\n' +
          '            fill: \'#8659AF\'\n' +
          '          }\n' +
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
  @c gradientGraphMap {
    @d wrap {

    }
  }
</style>
