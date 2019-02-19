<template lang="jade">
  -var c = 'basicBarMap'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    v-chart(ref="demo", :data="data")
      v-bar
      v-tooltip(:show-item-marker="false")

    x-button(type="primary", plain, @click.native="$refs.demo.rerender()") 重定向

    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton } from 'vux'
  import  data from '../../../assets/json/vux/data/basicBarMapData'

  export default {
    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton },
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
        this.tempCode = '   v-chart(ref="demo", :data="data")\n' +
          '      v-bar\n' +
          '      v-tooltip(:show-item-marker="false")\n' +
          '\n' +
          '    x-button(type="primary", plain, @click.native="$refs.demo.rerender()") 重定向\n';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = 'import { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton } from \'vux\'\n' +
          '  import  data from \'../../../assets/json/vux/data/basicBarMapData\'\n' +
          '\n' +
          '  export default {\n' +
          '    components: { VChart, VLine, VArea, VTooltip, VLegend, VBar, XButton },\n' +
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
  @c basicBarMap {
    @d wrap {
    }
  }
</style>
