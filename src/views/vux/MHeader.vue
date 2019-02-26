<template lang="jade">
  -var c = 'm-header'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    //x-header属性
    //left-options.showBack  是否显示返回文字
    //left-options.backText   返回文字
    //left-options.preventGoBack  是否阻止返回
    //title  标题
    //transition 标题出现的动画
    //right-options.showMore 是否显示右侧的更多图标
    x-header(:left-options="{showBack: true}", :right-options="{showMore: true}", @on-click-more="showMenus = true")
      span VUX
      x-icon(v-if="isHome", slot="overwrite-left", @click="showDrawer", type="navicon", size="35", style="fill:#fff;position:relative;top:-8px;left:-3px;")
    div(transfer-dom)
      actionsheet(:menus="menus", v-model="showMenus", show-cancel)

</template>
<script>
  import { XHeader, Actionsheet } from 'vux';
  export default {
    components: { XHeader, Actionsheet },
    props:['drawerShowValue'],
    data() {
      return {
        isHome: true,
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
    created() {/*如果跳转到非主页页面，刷新的时候，并没有触发watch，导致左上角没有返回按钮*/
    },
    watch: {
      $route(to,from) {
        console.log('路由跳转到'+ this.$route.name);
        if(this.$route.name === 'comp' || this.$route.name === 'chart' || this.$route.name === 'function' || this.$route.name === 'comp-drawer') {
          this.isHome = true;
        }else {
          this.isHome = false;
        }
      }
    },
    methods: {
      showDrawer() {
        this.$emit('update:drawerShowValue',true);
      }

    }
  }
</script>

<style>
  @c m-header {
    @d wrap {
      /*position默认relative*/
      /*display: flex;*/
      position: absolute;
      z-index: 500;
      top: 0;
      width: 100%;

    }
  }
</style>
