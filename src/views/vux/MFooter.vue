<template lang="jade">
  -var c = 'm-footer'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    tabbar
      //tabbar-item属性
      //selected  指定初始状态为选中
      //showDot   是否显示小红点
      //badge  显示右上标数字，不指定则不显示
      //link  指定跳转路由
      //iconClass 指定自定义类样式名
      //slot 插槽（icon 图片显示,可单个使用;icon-active 需要配合icon使用，选中状态为icon-active，不选择则为icon；label 显示文字）
      tabbar-item(:selected="selectComp", link="/")
        img(slot="icon-active" src="../../assets/img/vux/component_show.png")
        img(slot="icon" src="../../assets/img/vux/component_hide.png")
        span(slot="label") 组件
      tabbar-item(:selected="selectChart", :showDot="showDot", link="/vux/chart")
        img(slot="icon-active" src="../../assets/img/vux/chart_show.png")
        img(slot="icon" src="../../assets/img/vux/chart_hide.png")
        span(slot="label") 图表
      tabbar-item(:selected="selectFun", :badge="badge", link="/vux/function")
        img(slot="icon-active" src="../../assets/img/vux/function_show.png")
        img(slot="icon" src="../../assets/img/vux/function_hide.png")
        span(slot="label") 函数


</template>

<script>
  import { Tabbar, TabbarItem } from "vux";

  export default {
    components: { Tabbar, TabbarItem },
    data() {
      return {
        showDot: true,
        badge: '2',
        selectComp: false,
        selectChart: false,
        selectFun: false
      }
    },
    watch: {
      $route(to,from) {//刷新页面后，需要为下面的选项状态做判断
        if(this.$route.name.indexOf('comp') > -1) {
          this.selectComp = true;
          this.selectChart = false;
          this.selectFun = false;
        }else if(this.$route.name.indexOf('chart') > -1 ) {
          this.selectComp = false;
          this.selectChart = true;
          this.selectFun = false;
        }else if(this.$route.name.indexOf('function') > -1) {
          this.selectComp = false;
          this.selectChart = false;
          this.selectFun = true;
        }
      }
    },
    methods: {
      //...mapActions(['setRoutingState']),//自动调用
      //this.$store.dispatch('setRoutingState', val);//手动调用
    }
  }
</script>

<style>
  body {
    .weui-tabbar__icon {
      padding-top: 10px;
    }
    a:-webkit-any-link {
      text-decoration: none;
    }
  }
  @c m-footer {
    @d wrap {
      font-size: 15px;
      line-height: 0.1;
      a:-webkit-any-link {
        text-decoration: none;
      }
    }
  }
</style>
