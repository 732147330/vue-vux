<template lang="jade">
  -var c = 'drawer'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    h3 左上角那个三道横杆就是可以打开drawer(代码引用详情请参考
      font(color='black') App.vue
      | )

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
  import { XButton } from "vux";
  export default {
    components: { XButton },
    data() {
      return {
        tempCode: '',
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
        this.tempCode = '    drawer(:show.sync="drawerShowValue", :showMode="showModeValue", :placement="showPlacementValue", :drawer-style="{\'background-color\':\'#35495e\', width: \'200px\'}")\n' +
          '      div(slot="drawer")\n' +
          '        div(class="#{menu}")\n' +
          '          group(title="Drawer demo(beta)", style="margin-top:20px;")\n' +
          '            cell(title="组件", link="/", value="Star me", @click.native="drawerShowValue = false")\n' +
          '            cell(title="图表", link="/vux/chart", value="chart", @click.native="drawerShowValue = false")\n' +
          '            cell(title="函数", link="/vux/function", value="function", @click.native="drawerShowValue = false")\n' +
          '          group(title="展示方式")\n' +
          '            radio(v-model="showMode", :options="[\'push\', \'overlay\']", @on-change="onShowModeChange")\n' +
          '          group(title="显示位置")\n' +
          '            radio(v-model="showPlacement", :options="[\'left\', \'right\']", @on-change="onPlacementChange")\n' +
          '      //body-padding-top  用于调节与顶部的距离，相当与顶部的高\n' +
          '      //body-padding-bottom  用于调节与底部的距离，相当与底部的高\n' +
          '      view-box(body-padding-top="46px", body-padding-bottom="150px")\n' +
          '        m-header(:drawerShowValue.sync="drawerShowValue")\n' +
          '        router-view\n' +
          '        m-footer';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import MHeader from \'./views/vux/MHeader\'\n' +
          '  import MFooter from \'./views/vux/MFooter\'\n' +
          '  import { Drawer, ViewBox, Radio, Group, Cell } from \"vux\"\n' +
          '\n' +
          '  export default {\n' +
          '    components: { ViewBox, Drawer, MHeader, MFooter, Radio, Group, Cell },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        drawerShowValue: false,\n' +
          '        showMode: \'push\',\n' +
          '        showModeValue: \'push\',\n' +
          '        showPlacement: \'left\',\n' +
          '        showPlacementValue: \'left\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onShowModeChange (val) {\n' +
          '        /** hide drawer before changing showMode **/\n' +
          '        this.drawerShowValue = false\n' +
          '        setTimeout(one => {\n' +
          '          this.showModeValue = val\n' +
          '        }, 400)\n' +
          '      },\n' +
          '      onPlacementChange (val) {\n' +
          '        /** hide drawer before changing position **/\n' +
          '        this.drawerShowValue = false\n' +
          '        setTimeout(one => {\n' +
          '          this.showPlacementValue = val\n' +
          '        }, 400)\n' +
          '      },\n' +
          '      onHide() {\n' +
          '        // console.log(drawerShowValue);\n' +
          '      }\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' body{\n' +
          '    margin: 0;\n' +
          '    padding: 0;\n' +
          '  }\n' +
          '  @c app {\n' +
          '    @d wrap {\n' +
          '      position: absolute;\n' +
          '      width: 100%;\n' +
          '      height: 100%;\n' +
          '      overflow: hidden;\n' +
          '      .weui-tab__panel {\n' +
          '        background-color: #FBF8FE;\n' +
          '      }\n' +
          '      .weui-cell {\n' +
          '        padding: 3px 15px;\n' +
          '      }\n' +
          '      .vux-drawer-content .weui-cell {\n' +
          '        padding: 0px 15px;\n' +
          '        line-height: 15px;\n' +
          '      }\n' +
          '      .weui-cell:before {\n' +
          '        /*left: 0px;*/\n' +
          '      }\n' +
          '    }\n' +
          '    @d menu {\n' +
          '      width: 200px;\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c drawer {
    @d wrap {
      text-align: center;
      color: red;
    }
  }
</style>
