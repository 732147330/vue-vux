<template lang="jade">
  -var c = 'popup'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-switch(title="默认popup", v-model="show")
      x-switch(title="全屏popup", v-model="show1")
      x-switch(title="多个popup", v-model="show3")
      x-switch(title="遮罩层无法点击", v-model="show5")
      x-switch(title="popup 地址选择", v-model="show6")
      x-switch(title="默认 最高高度100%", v-model="show12")
      x-switch(title="设置 最高高度50%", v-model="show13")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group
      x-switch(title="打开时，不会强行进入重新加载", v-model="show15")
      x-switch(title="打开时，强行进入重新加载", v-model="show14")
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    group
      x-switch(title="显示时，滚动置顶", inline-desc="默认滚动的div", v-model="show17")
      x-switch(title="显示时，滚动置顶", inline-desc="自定义滚动的div", v-model="show16")
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    popup(v-model="show", @on-hide="log('hide')", @on-show="log('show')")
      div.popup0
        group
          x-switch(title="其他的XSwitch", v-model="show")
          x-switch(title="显示toast", v-model="showToast")

    toast(v-model="showToast")  你做到了！

    popup(v-model="show1", height="100%")
      div.popup1
        group
          x-switch(title="其他的XSwitch", v-model="show1")

    popup(v-model="show3")
      div.popup2
        group
          x-switch(title="多个 Popup (第一个)", v-model="show3")
          x-switch(title="多个 Popup (第二个)", v-model="show4")
        | this is the first popup

    popup(v-model="show4")
      div.popup2
        group
          x-switch(title="多个 Popup (第二个)", v-model="show4")
        | this is the second popup

    popup(v-model="show5", :hide-on-blur="hideOff")
      div.popup2
        group
          x-switch(title="遮罩层点击关闭", v-model="show5")
        | The mask cannot be clicked!

    popup(v-model="show6")
      div.popup1
        group
          x-switch(title="Popup 地址选择", v-model="show6")
        group
        x-address(:title="title6", v-model="value6", :list="addressData", placeholder="请选择地址", inline-desc="可以设置placeholder", :popup-style="{zIndex: 502}")

    group
      x-switch(title="透明背景", v-model="show7")
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    popup(v-model="show7", height="270px", is-transparent, class="pay-style")
      div(style="width: 95%;background-color:#fff;height:100%;margin:0 auto;border-radius:5px;padding-top:10px;")
        group
          cell(title="产品", value="Donate")
          cell(title="总额", value="$10.24")
        div(style="padding:20px 15px;")
          x-button(type="primary") 支付
          x-button(@click.native="show7 = false") 取消

    group(title="设置位置")
      x-switch(title="left(100% width)", v-model="show8")
      x-switch(title="right", v-model="show9")
      x-switch(title="top(no mask)", v-model="show10")
      x-switch(title="bottom", v-model="show11")

    popup(v-model="show8", position="left", width="100%")
      div.position-horizontal-demo
        span(class="vux-close", @click="show8 = false")

    popup(v-model="show9", position="right")
      div(style="width:200px;")

    popup(v-model="show10", position="top", :show-mask="false")
      div.position-vertical-demo  I'm on top. Hide in 1s.

    popup(v-model="show11", position="bottom")
      div.position-vertical-demo  I'm on bottom.

    popup(v-model="show12", position="bottom")
      group
        cell(v-for="i in 20", :key="i", :title="i")
      div(style="padding: 15px;")
        x-button(@click.native="show12 = false", plain, type="primary") Close Me

    popup(v-model="show17", position="bottom", should-scroll-top-on-show)
      group
        cell(v-for="i in 20", :key="i", :title="i")
      div(style="padding: 15px;")
        x-button(@click.native="show17 = false", plain, type="primary") Close Me

    popup(v-model="show14", position="bottom", should-rerender-on-show)
      div
        toggle-text(@click.native="show14 = false")

    popup(v-model="show15", position="bottom")
      div
        toggle-text(@click.native="show15 = false")

    popup(v-model="show16", position="bottom", should-scroll-top-on-show)
      toggle-text(@click.native="show16 = false", scrollable, class="vux-scrollable")

    popup(v-model="show13", position="bottom", max-height="50%")
      group
        cell(v-for="i in 20", :key="i", :title="i")
      div(style="padding: 15px;")
        x-button(@click.native="show13 = false", plain, type="primary") Close Me

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode07()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { ChinaAddressData, Group, Cell, XButton, Popup, XSwitch, Toast, XAddress, } from 'vux'
  import ToggleText from '../other/ToggleText.vue'
  export default {
    components: { Popup, Group, Cell, XButton, XSwitch, Toast, XAddress, ToggleText },
    data() {
      return {
        tempCode: '',
        addressData: ChinaAddressData,
        hideOff: false,
        show: false,
        show1: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        title6: '默认空的',
        value6: [],
        show7: false,
        showToast: false,
        show8: false,
        show9: false,
        show10: false,
        show11: false,
        show12: false,
        show13: false,
        show14: false,
        show15: false,
        show16: false,
        show17: false
      }
    },
    methods: {
      log (str) {
        console.log(str)
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
        this.tempCode = '    group\n' +
          '      x-switch(title="默认popup", v-model="show")\n' +
          '      x-switch(title="全屏popup", v-model="show1")\n' +
          '      x-switch(title="多个popup", v-model="show3")\n' +
          '      x-switch(title="遮罩层无法点击", v-model="show5")\n' +
          '      x-switch(title="popup 地址选择", v-model="show6")\n' +
          '      x-switch(title="默认 最高高度100%", v-model="show12")\n' +
          '      x-switch(title="设置 最高高度50%", v-model="show13")\n' +
          '\n' +
          '    popup(v-model="show", @on-hide="log(\'hide\')", @on-show="log(\'show\')")\n' +
          '      div.popup0\n' +
          '        group\n' +
          '          x-switch(title="其他的XSwitch", v-model="show")\n' +
          '          x-switch(title="显示toast", v-model="showToast")\n' +
          '\n' +
          '    toast(v-model="showToast")  你做到了！\n' +
          '\n' +
          '    popup(v-model="show1", height="100%")\n' +
          '      div.popup1\n' +
          '        group\n' +
          '          x-switch(title="其他的XSwitch", v-model="show1")\n' +
          '\n' +
          '    popup(v-model="show3")\n' +
          '      div.popup2\n' +
          '        group\n' +
          '          x-switch(title="多个 Popup (第一个)", v-model="show3")\n' +
          '          x-switch(title="多个 Popup (第二个)", v-model="show4")\n' +
          '        | this is the first popup\n' +
          '    popup(v-model="show5", :hide-on-blur="hideOff")\n' +
          '      div.popup2\n' +
          '        group\n' +
          '          x-switch(title="遮罩层点击关闭", v-model="show5")\n' +
          '        | The mask cannot be clicked!\n' +
          '\n' +
          '    popup(v-model="show6")\n' +
          '      div.popup1\n' +
          '        group\n' +
          '          x-switch(title="Popup 地址选择", v-model="show6")\n' +
          '        group\n' +
          '        x-address(:title="title6", v-model="value6", :list="addressData", placeholder="请选择地址", inline-desc="可以设置placeholder", :popup-style="{zIndex: 502}")\n' +
          '\n' +
          '    popup(v-model="show12", position="bottom")\n' +
          '      group\n' +
          '        cell(v-for="i in 20", :key="i", :title="i")\n' +
          '      div(style="padding: 15px;")\n' +
          '        x-button(@click.native="show12 = false", plain, type="primary") Close Me\n' +
          '\n' +
          '    popup(v-model="show13", position="bottom", max-height="50%")\n' +
          '      group\n' +
          '        cell(v-for="i in 20", :key="i", :title="i")\n' +
          '      div(style="padding: 15px;")\n' +
          '        x-button(@click.native="show13 = false", plain, type="primary") Close Me';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  group\n' +
          '      x-switch(title="打开时，不会强行进入重新加载", v-model="show15")\n' +
          '      x-switch(title="打开时，强行进入重新加载", v-model="show14")\n' +
          '\n' +
          '  popup(v-model="show14", position="bottom", should-rerender-on-show)\n' +
          '      div\n' +
          '        toggle-text(@click.native="show14 = false")\n' +
          '    popup(v-model="show15", position="bottom")\n' +
          '      div\n' +
          '        toggle-text(@click.native="show15 = false")\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  group\n' +
          '      x-switch(title="显示时，滚动置顶", inline-desc="默认滚动的div", v-model="show17")\n' +
          '      x-switch(title="显示时，滚动置顶", inline-desc="自定义滚动的div", v-model="show16")\n' +
          '\n' +
          '  popup(v-model="show17", position="bottom", should-scroll-top-on-show)\n' +
          '      group\n' +
          '        cell(v-for="i in 20", :key="i", :title="i")\n' +
          '      div(style="padding: 15px;")\n' +
          '        x-button(@click.native="show17 = false", plain, type="primary") Close Me\n' +
          '    popup(v-model="show16", position="bottom", should-scroll-top-on-show)\n' +
          '      toggle-text(@click.native="show16 = false", scrollable, class="vux-scrollable")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  group\n' +
          '      x-switch(title="透明背景", v-model="show7")\n' +
          '\n' +
          '    popup(v-model="show7", height="270px", is-transparent, class="pay-style")\n' +
          '      div(style="width: 95%;background-color:#fff;height:100%;margin:0 auto;border-radius:5px;padding-top:10px;")\n' +
          '        group\n' +
          '          cell(title="产品", value="Donate")\n' +
          '          cell(title="总额", value="$10.24")\n' +
          '        div(style="padding:20px 15px;")\n' +
          '          x-button(type="primary") 支付\n' +
          '          x-button(@click.native="show7 = false") 取消';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '    group(title="设置位置")\n' +
          '      x-switch(title="left(100% width)", v-model="show8")\n' +
          '      x-switch(title="right", v-model="show9")\n' +
          '      x-switch(title="top(no mask)", v-model="show10")\n' +
          '      x-switch(title="bottom", v-model="show11")\n' +
          '\n' +
          '    popup(v-model="show8", position="left", width="100%")\n' +
          '      div.position-horizontal-demo\n' +
          '        span(class="vux-close", @click="show8 = false")\n' +
          '\n' +
          '    popup(v-model="show9", position="right")\n' +
          '      div(style="width:200px;")\n' +
          '\n' +
          '    popup(v-model="show10", position="top", :show-mask="false")\n' +
          '      div.position-vertical-demo  I\'m on top. Hide in 1s.\n' +
          '\n' +
          '    popup(v-model="show11", position="bottom")\n' +
          '      div.position-vertical-demo  I\'m on bottom.\n';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '  import { ChinaAddressData, Group, Cell, XButton, Popup, XSwitch, Toast, XAddress, } from \'vux\'\n' +
          '  import ToggleText from \'../other/ToggleText.vue\'\n' +
          '  export default {\n' +
          '    components: { Popup, Group, Cell, XButton, XSwitch, Toast, XAddress, ToggleText },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        addressData: ChinaAddressData,\n' +
          '        hideOff: false,\n' +
          '        show: false,\n' +
          '        show1: false,\n' +
          '        show3: false,\n' +
          '        show4: false,\n' +
          '        show5: false,\n' +
          '        show6: false,\n' +
          '        title6: \'默认空的\',\n' +
          '        value6: [],\n' +
          '        show7: false,\n' +
          '        showToast: false,\n' +
          '        show8: false,\n' +
          '        show9: false,\n' +
          '        show10: false,\n' +
          '        show11: false,\n' +
          '        show12: false,\n' +
          '        show13: false,\n' +
          '        show14: false,\n' +
          '        show15: false,\n' +
          '        show16: false,\n' +
          '        show17: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      log (str) {\n' +
          '        console.log(str)\n' +
          '      },\n' +
          '    },\n' +
          '    watch: {\n' +
          '      show10 (val) {\n' +
          '        if (val) {\n' +
          '          setTimeout(() => {\n' +
          '            this.show10 = false\n' +
          '          }, 1000)\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '  }\n';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '  @import \'../../../plugins/vux/src/styles/close.less\';\n' +
          '  .popup0 {\n' +
          '    padding-bottom:15px;\n' +
          '    height:200px;\n' +
          '  }\n' +
          '  .popup1 {\n' +
          '    width:100%;\n' +
          '    height:100%;\n' +
          '  }\n' +
          '  .popup2 {\n' +
          '    padding-bottom:15px;\n' +
          '    height:400px;\n' +
          '  }\n' +
          '  .position-vertical-demo {\n' +
          '    background-color: #ffe26d;\n' +
          '    color: #000;\n' +
          '    text-align: center;\n' +
          '    padding: 15px;\n' +
          '  }\n' +
          '  .position-horizontal-demo {\n' +
          '    position: relative;\n' +
          '    height: 100%;\n' +
          '    .vux-close {\n' +
          '      position: absolute;\n' +
          '      top: 50%;\n' +
          '      left: 50%;\n' +
          '      transform: translateX(-50%) translateY(-50%) scale(4);\n' +
          '      color: #000;\n' +
          '    }\n' +
          '  }\n' +
          '  .pay-style .weui-cell {\n' +
          '    padding: 0px 15px;\n' +
          '  }';
        this.copyCodeMethod();
      },
    },
    watch: {
      show10 (val) {
        if (val) {
          setTimeout(() => {
            this.show10 = false
          }, 1000)
        }
      }
    }
  }

</script>

<style>
  @import '../../../plugins/vux/src/styles/close.less';
  @c popup {
    @d wrap {
    }
  }
  .popup0 {
    padding-bottom:15px;
    height:200px;
  }
  .popup1 {
    width:100%;
    height:100%;
  }
  .popup2 {
    padding-bottom:15px;
    height:400px;
  }
  .position-vertical-demo {
    background-color: #ffe26d;
    color: #000;
    text-align: center;
    padding: 15px;
  }
  .position-horizontal-demo {
    position: relative;
    height: 100%;
    .vux-close {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) scale(4);
      color: #000;
    }
  }
  .pay-style .weui-cell {
    padding: 0px 15px;
  }
</style>
