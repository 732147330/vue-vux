<template lang="jade">
  -var c = 'panel'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="切换样式")
      radio(title="type", v-model="type", :options="['1', '2', '3', '4', '5']")
    panel(header="图文组合列表", :footer="footer", :list="list", :type="type", @on-img-error="onImgError")


    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Panel, Group, Radio, XButton } from 'vux';
  export default {
    components: { Panel, Group, Radio, XButton },
    data() {
      return {
        tempCode: '',
        type: '1',
        list: [{
          src: '#',
          fallbackSrc: '#',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '#'
        }, {
          src: '#',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '#',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        footer: {
          title: 'more',
          url: 'http://vux.li'
        }
      }
    },
    methods: {
      onImgError (item, $event) {
        // console.log(item, $event)
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
        this.tempCode = '    group(title="切换样式")\n' +
          '      radio(title="type", v-model="type", :options="[\'1\', \'2\', \'3\', \'4\', \'5\']")\n' +
          '    panel(header="图文组合列表", :footer="footer", :list="list", :type="type", @on-img-error="onImgError")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   import { Panel, Group, Radio, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Panel, Group, Radio, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        type: \'1\',\n' +
          '        list: [{\n' +
          '          src: \'#\',\n' +
          '          fallbackSrc: \'#\',\n' +
          '          title: \'标题一\',\n' +
          '          desc: \'由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。\',\n' +
          '          url: \'#\'\n' +
          '        }, {\n' +
          '          src: \'#\',\n' +
          '          title: \'标题二\',\n' +
          '          desc: \'由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。\',\n' +
          '          url: {\n' +
          '            path: \'#\',\n' +
          '            replace: false\n' +
          '          },\n' +
          '          meta: {\n' +
          '            source: \'来源信息\',\n' +
          '            date: \'时间\',\n' +
          '            other: \'其他信息\'\n' +
          '          }\n' +
          '        }],\n' +
          '        footer: {\n' +
          '          title: \'more\',\n' +
          '          url: \'http://vux.li\'\n' +
          '        }\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onImgError (item, $event) {\n' +
          '        // console.log(item, $event)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },

    }
  }

</script>

<style>
  @c panel {
    @d wrap {
    }
  }
</style>
