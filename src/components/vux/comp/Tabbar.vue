<template lang="jade">
  -var c = 'tabbar'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    h3 最底端的就是tabbar(代码引用详情请参考
      font(color='black') MFooter.vue
      | )
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
  //group
      cell(is-link, title="Simple", link="/component/tabbar-simple")
      cell(is-link, title="Switch icons", link="/component/tabbar-icon")
  //tabbar
      tabbar-item
        img(slot="icon", src="../assets/demo/icon_nav_button.png")
        span(slot="label") Wechat
      tabbar-item(show-dot)
        img(slot="icon", src="../assets/demo/icon_nav_msg.png")
        span(slot="label") Message
      tabbar-item(selected, link="/component/demo")
        img(slot="icon", src="../assets/demo/icon_nav_article.png")
        span(slot="label") Explore
      tabbar-item(badge="2")
        img(slot="icon", src="../assets/demo/icon_nav_cell.png")
        span(slot="label") News

</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell, XButton } from 'vux';
  export default {
    components: { Tabbar, TabbarItem, Group, Cell, XButton },
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
        this.tempCode = ' tabbar\n' +
          '      //tabbar-item属性\n' +
          '      //selected  指定初始状态为选中\n' +
          '      //showDot   是否显示小红点\n' +
          '      //badge  显示右上标数字，不指定则不显示\n' +
          '      //link  指定跳转路由\n' +
          '      //iconClass 指定自定义类样式名\n' +
          '      //slot 插槽（icon 图片显示,可单个使用;icon-active 需要配合icon使用，选中状态为icon-active，不选择则为icon；label 显示文字）\n' +
          '      tabbar-item(:selected="selectComp", link="/")\n' +
          '        img(slot="icon-active" src="../../assets/img/vux/component_show.png")\n' +
          '        img(slot="icon" src="../../assets/img/vux/component_hide.png")\n' +
          '        span(slot="label") 组件\n' +
          '      tabbar-item(:selected="selectChart", :showDot="showDot", link="/vux/chart")\n' +
          '        img(slot="icon-active" src="../../assets/img/vux/chart_show.png")\n' +
          '        img(slot="icon" src="../../assets/img/vux/chart_hide.png")\n' +
          '        span(slot="label") 图表\n' +
          '      tabbar-item(:selected="selectFun", :badge="badge", link="/vux/function")\n' +
          '        img(slot="icon-active" src="../../assets/img/vux/function_show.png")\n' +
          '        img(slot="icon" src="../../assets/img/vux/function_hide.png")\n' +
          '        span(slot="label") 函数';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = 'import { Tabbar, TabbarItem } from \"vux\";\n' +
          '\n' +
          '  export default {\n' +
          '    components: { Tabbar, TabbarItem },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        showDot: true,\n' +
          '        badge: \'2\',\n' +
          '        selectComp: false,\n' +
          '        selectChart: false,\n' +
          '        selectFun: false\n' +
          '      }\n' +
          '    },\n' +
          '    watch: {\n' +
          '      $route(to,from) {//刷新页面后，需要为下面的选项状态做判断\n' +
          '        if(this.$route.name.indexOf(\'comp\') > -1) {\n' +
          '          this.selectComp = true;\n' +
          '          this.selectChart = false;\n' +
          '          this.selectFun = false;\n' +
          '        }else if(this.$route.name.indexOf(\'chart\') > -1 ) {\n' +
          '          this.selectComp = false;\n' +
          '          this.selectChart = true;\n' +
          '          this.selectFun = false;\n' +
          '        }else if(this.$route.name.indexOf(\'function\') > -1) {\n' +
          '          this.selectComp = false;\n' +
          '          this.selectChart = false;\n' +
          '          this.selectFun = true;\n' +
          '        }\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      //...mapActions([\'setRoutingState\']),//自动调用\n' +
          '      //this.$store.dispatch(\'setRoutingState\', val);//手动调用\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' body {\n' +
          '    .weui-tabbar__icon {\n' +
          '      padding-top: 10px;\n' +
          '    }\n' +
          '    .weui-tabbar__label {\n' +
          '      font-size: 15px;\n' +
          '      line-height: 0.1;\n' +
          '      //text-decoration: none;  /*必须根据浏览器给的样式名进行修改*/\n' +
          '    }\n' +
          '    a:-webkit-any-link {\n' +
          '      text-decoration: none;\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c tabbar {
    @d wrap {
      text-align: center;
      color: red;
    }
  }
</style>
