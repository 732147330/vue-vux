<template lang="jade">
  -var c = 'app'
  -var wrap = c + '__wrap'
  -var menu = c + '__menu'

  div(class="#{wrap}")
    //drawer的属性
    //show 是否展开，默认false（关闭），true（展开）
    //showMode 展示方式，默认overlay（在内容上显示），push（推开内容区域）
    //placement 显示位置，默认left（显示在左边），right（显示在右边）
    drawer(:show.sync="drawerShowValue", :showMode="showModeValue", :placement="showPlacementValue", :drawer-style="{'background-color':'#35495e', width: '200px'}")
      div(slot="drawer")
        div(class="#{menu}")
          group(title="Drawer demo(beta)", style="margin-top:20px;")
            cell(title="组件", link="/", value="Star me", @click.native="drawerShowValue = false")
            cell(title="图表", link="/vux/chart", value="chart", @click.native="drawerShowValue = false")
            cell(title="函数", link="/vux/function", value="function", @click.native="drawerShowValue = false")
          group(title="展示方式")
            radio(v-model="showMode", :options="['push', 'overlay']", @on-change="onShowModeChange")
          group(title="显示位置")
            radio(v-model="showPlacement", :options="['left', 'right']", @on-change="onPlacementChange")
      //body-padding-top  用于调节与顶部的距离，相当与顶部的高
      //body-padding-bottom  用于调节与底部的距离，相当与底部的高
      view-box(body-padding-top="46px", body-padding-bottom="150px",style="height:100%;", ref="viewBox", id="a")
        m-header(:drawerShowValue.sync="drawerShowValue")
        router-view
        m-footer


</template>
<script>
  import MHeader from './views/vux/MHeader'
  import MFooter from './views/vux/MFooter'
  import { Drawer, ViewBox, Radio, Group, Cell } from "vux"
  import  {mapState, mapActions} from 'vuex'
  export default {
    components: { ViewBox, Drawer, MHeader, MFooter, Radio, Group, Cell },
    data() {
      return {
        drawerShowValue: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left'
      }
    },
    methods: {
      onShowModeChange (val) {
        /** hide drawer before changing showMode **/
        this.drawerShowValue = false
        setTimeout(one => {
          this.showModeValue = val
        }, 400)
      },
      onPlacementChange (val) {
        /** hide drawer before changing position **/
        this.drawerShowValue = false
        setTimeout(one => {
          this.showPlacementValue = val
        }, 400)
      },
      onHide () {
        // console.log(drawerShowValue);
      },
    },
    mounted() {
      window.addEventListener("scroll", () => {
        // console.log(this.$route.name)
        if(this.$route.name === "comp" || this.$route.name === "chart"
          || this.$route.name === "function"){
          this.$route.params.scrollTop = this.$refs.viewBox.getScrollTop();
          // console.log(this.$refs.viewBox.scrollTo(2500))
          // console.log(this.$store.state.scrollData)
          // this.$store.state.scrollData = this.$refs.viewBox.getScrollTop();
          // this.$refs.viewBox.scrollTo(this.$store.state.scrollData)
          // this.$store.dispatch('setScrollData', this.$refs.viewBox.getScrollTop())
        }
      },true)

    }
  }
</script>
<style>
  body{
    margin: 0;
    padding: 0;
  }
  @c app {
    @d wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .weui-tab__panel {
        background-color: #FBF8FE;
      }
      .weui-cell {
        padding: 3px 15px;
      }
      .vux-drawer-content .weui-cell {
        padding: 0px 15px;
        line-height: 15px;
      }
      .weui-cell:before {
        /*left: 0px;*/
      }
    }
    @d menu {
      width: 200px;
    }
  }


</style>
