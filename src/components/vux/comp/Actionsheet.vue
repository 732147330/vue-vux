<template lang="jade">
  -var c = 'actionsheet'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-switch(title="一般使用", v-model="show1")
      x-switch(title="安卓风格", v-model="show7")
      x-switch(title="显示取消菜单", v-model="show2")
      x-switch(title="使用数组定义菜单", v-model="show5")
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group(title="点击遮罩区域不自动关闭")
      x-switch(title="一般使用", v-model="show4")
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    group
      x-switch(title="显示提示文字", v-model="show3")
      x-switch(title="使用header slot", v-model="show6")
      x-switch(title="不自动关闭", v-model="show8")
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    //menus 弹窗的菜单选择
    //close-on-clicking-mask 是否点击遮罩层退出弹窗（默认true，是）
    //show-cancel 是否显示取消菜单，即退出弹窗，配合close-on-clicking-mask 使用（默认false，不显示）
    //@on-click-mask 点击遮罩层的时候触发事件
    actionsheet(v-model="show4", :menus="menus1", :close-on-clicking-mask="false", show-cancel,  @on-click-mask="console('on click mask')")

    //@on-click-menu 	点击菜单时触发事件
    //@on-after-hide 	隐藏动画结束时触发事件
    //@on-after-show  显示动画结束时触发事件
    actionsheet(v-model="show1", :menus="menus1", @on-click-menu="click", @on-after-hide="log('after hide')", @on-after-show="log('after show')")

    actionsheet(v-model="show2", :menus="menus2", @on-click-menu="click", show-cancel)

    //@on-click-menu-cancel 点击取消菜单时触发事件
    //@on-click-menu-delete 点击删除菜单时触发事件
    actionsheet(v-model="show3", :menus="menus3", @on-click-menu="click", @on-click-menu-delete="onDelete", show-cancel)

    actionsheet(v-model="show5", :menus="menus5", show-cancel, @on-click-menu="click5")

    actionsheet(v-model="show6", :menus="menus1")
      p(slot="header" v-html="htmlHeader")

    actionsheet(v-model="show7", :menus="menu7", theme="android", @on-click-menu="click", @on-after-hide="log('after hide')", @on-after-show="log('after show')")

    toast(v-model="showSuccess") 删除111222

    div(transfer-dom)
      actionsheet(v-model="show8", :menus="menus8", @on-click-menu="demo8doClose", :close-on-clicking-mask="false", :close-on-clicking-menu="false")

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
   import { XSwitch, Actionsheet, Group, Toast, XButton } from "vux";
   const ActionsheetHeader = '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>';/*定义公共常量*/
   const Delete = '<span style="color:red">删除</span>';
   export default {
     components: { Actionsheet, XSwitch, Group, Toast, XButton },
     data() {
      return {
        tempCode: '',
        htmlHeader: ActionsheetHeader,
        show1: false,
        menus1: {
          menu1: '分享给朋友',
          menu2: '分享到朋友圈'
        },
        show2: false,
        menus2: {
          menu1: '拍照',
          menu2: '从相册里选择'
        },
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        menus5: [{
          label: ActionsheetHeader,
          type: 'info'
        }, {
          label: 'Primary',
          type: 'primary',
          value: 'primary',
          otherProp: 'hey'
        }, {
          label: 'Warn',
          type: 'warn'
        }, {
          label: 'Disabled',
          type: 'disabled'
        }, {
          label: '默认'
        }],
        menu7: {
          menu1: '北京烤鸭',
          menu2: '陕西油泼面',
          menu3: '西安肉夹馍'
        },
        showSuccess: false,
        menus3: {
          'title.noop': ActionsheetHeader,
          delete: Delete
        },
        menus8: {
          menu1: '点我关闭',
          menu2: '点我关闭'
        }
      }
    },
    methods: {
      log (str) {
        console.log(str)
      },
      demo8doClose () {
        this.$vux.loading.show({
          // text: 'processing'
          text: '进行中'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.show8 = false
        }, 1000)
      },
      console (msg) {
        console.log(msg)
      },
      click (key) {
        console.log(key)
      },
      click5 (key, item) {
        console.log(key, item)
      },
      onDelete () {
        this.showSuccess = true
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
        this.tempCode = ' group\n' +
          '      x-switch(title="一般使用", v-model="show1")\n' +
          '      x-switch(title="安卓风格", v-model="show7")\n' +
          '      x-switch(title="显示取消菜单", v-model="show2")\n' +
          '      x-switch(title="使用数组定义菜单", v-model="show5")\n' +
          '\n' +
          '    actionsheet(v-model="show1", :menus="menus1", @on-click-menu="click", @on-after-hide="log(\'after hide\')", @on-after-show="log(\'after show\')")\n' +
          '    actionsheet(v-model="show7", :menus="menu7", theme="android", @on-click-menu="click", @on-after-hide="log(\'after hide\')", @on-after-show="log(\'after show\')")\n' +
          '    actionsheet(v-model="show2", :menus="menus2", @on-click-menu="click", show-cancel)\n' +
          '    actionsheet(v-model="show5", :menus="menus5", show-cancel, @on-click-menu="click5")\n' +
          '\n' +
          '<script>\n' +
          '   import { XSwitch, Actionsheet, Group, Toast, XButton } from \"vux\";\n' +
          '   const Delete = \'<span style="color:red">删除</span>\';\n' +
          '   export default {\n' +
          '     components: { Actionsheet, XSwitch, Group, Toast, XButton },\n' +
          '     data() {\n' +
          '      return {\n' +
          '        tempCode: \'\',\n' +
          '        show1: false,\n' +
          '        menus1: {\n' +
          '          menu1: \'分享给朋友\',\n' +
          '          menu2: \'分享到朋友圈\'\n' +
          '        },\n' +
          '        show2: false,\n' +
          '        menus2: {\n' +
          '          menu1: \'拍照\',\n' +
          '          menu2: \'从相册里选择\'\n' +
          '        },\n' +
          '        show5: false,\n' +
          '        show7: false,\n' +
          '        menus5: [{\n' +
          '          label: ActionsheetHeader,\n' +
          '          type: \'info\'\n' +
          '        }, {\n' +
          '          label: \'Primary\',\n' +
          '          type: \'primary\',\n' +
          '          value: \'primary\',\n' +
          '          otherProp: \'hey\'\n' +
          '        }, {\n' +
          '          label: \'Warn\',\n' +
          '          type: \'warn\'\n' +
          '        }, {\n' +
          '          label: \'Disabled\',\n' +
          '          type: \'disabled\'\n' +
          '        }, {\n' +
          '          label: \'默认\'\n' +
          '        }],\n' +
          '        menu7: {\n' +
          '          menu1: \'北京烤鸭\',\n' +
          '          menu2: \'陕西油泼面\',\n' +
          '          menu3: \'西安肉夹馍\'\n' +
          '        },\n' +
          '        showSuccess: false,\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      log (str) {\n' +
          '        console.log(str)\n' +
          '      },\n' +
          '      demo8doClose () {\n' +
          '        this.$vux.loading.show({\n' +
          '          // text: \'processing\'\n' +
          '          text: \'进行中\'\n' +
          '        })\n' +
          '        setTimeout(() => {\n' +
          '          this.$vux.loading.hide()\n' +
          '          this.show8 = false\n' +
          '        }, 1000)\n' +
          '      },\n' +
          '      console (msg) {\n' +
          '        console.log(msg)\n' +
          '      },\n' +
          '      click (key) {\n' +
          '        console.log(key)\n' +
          '      },\n' +
          '      click5 (key, item) {\n' +
          '        console.log(key, item)\n' +
          '      },\n' +
          '      onDelete () {\n' +
          '        this.showSuccess = true\n' +
          '      },\n' +
          '    },\n' +
          '  }\n' +
          '\n' +
          '<\/script>';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    group(title="点击遮罩区域不自动关闭")\n' +
          '      x-switch(title="一般使用", v-model="show4")\n' +
          '\n' +
          '    actionsheet(v-model="show4", :menus="menus1", :close-on-clicking-mask="false", show-cancel,  @on-click-mask="console(\'on click mask\')")' +
          '\n' +
          '<script>\n' +
          '   import { XSwitch, Actionsheet, Group, Toast, XButton } from \"vux\";\n' +
          '   const Delete = \'<span style="color:red">删除</span>\';\n' +
          '   export default {\n' +
          '     components: { Actionsheet, XSwitch, Group, Toast, XButton },\n' +
          '     data() {\n' +
          '      return {\n' +
          '        menus1: {\n' +
          '          menu1: \'分享给朋友\',\n' +
          '          menu2: \'分享到朋友圈\'\n' +
          '        },\n' +
          '        show4: false,\n' +
          '        showSuccess: false,\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      console (msg) {\n' +
          '        console.log(msg)\n' +
          '      },\n' +
          '      click (key) {\n' +
          '        console.log(key)\n' +
          '      },\n' +
          '      onDelete () {\n' +
          '        this.showSuccess = true\n' +
          '      },\n' +
          '    },\n' +
          '  }\n' +
          '\n' +
          '<\/script>';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    group\n' +
          '      x-switch(title="显示提示文字", v-model="show3")\n' +
          '      x-switch(title="使用header slot", v-model="show6")\n' +
          '      x-switch(title="不自动关闭", v-model="show8")\n' +
          '\n' +
          '   actionsheet(v-model="show3", :menus="menus3", @on-click-menu="click", @on-click-menu-delete="onDelete", show-cancel)\n' +
          '    actionsheet(v-model="show6", :menus="menus1")\n' +
          '      p(slot="header" v-html="htmlHeader")\n' +
          '    toast(v-model="showSuccess") 删除111222\n' +
          '    div(transfer-dom)\n' +
          '      actionsheet(v-model="show8", :menus="menus8", @on-click-menu="demo8doClose", :close-on-clicking-mask="false", :close-on-clicking-menu="false")\n' +
          '\n' +
          '<script>\n' +
          '   import { XSwitch, Actionsheet, Group, Toast, XButton } from \"vux\";\n' +
          '   const ActionsheetHeader = \'确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>\';/*定义公共常量*/\n' +
          '   const Delete = \'<span style="color:red">删除</span>\';\n' +
          '   export default {\n' +
          '     components: { Actionsheet, XSwitch, Group, Toast, XButton },\n' +
          '     data() {\n' +
          '      return {\n' +
          '        htmlHeader: ActionsheetHeader,\n' +
          '        menus1: {\n' +
          '          menu1: \'分享给朋友\',\n' +
          '          menu2: \'分享到朋友圈\'\n' +
          '        },\n' +
          '        menus2: {\n' +
          '          menu1: \'拍照\',\n' +
          '          menu2: \'从相册里选择\'\n' +
          '        },\n' +
          '        show3: false,\n' +
          '        show6: false,\n' +
          '        show8: false,\n' +
          '        showSuccess: false,\n' +
          '        menus3: {\n' +
          '          \'title.noop\': ActionsheetHeader,\n' +
          '          delete: Delete\n' +
          '        },\n' +
          '        menus8: {\n' +
          '          menu1: \'点我关闭\',\n' +
          '          menu2: \'点我关闭\'\n' +
          '        }\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      log (str) {\n' +
          '        console.log(str)\n' +
          '      },\n' +
          '      demo8doClose () {\n' +
          '        this.$vux.loading.show({\n' +
          '          // text: \'processing\'\n' +
          '          text: \'进行中\'\n' +
          '        })\n' +
          '        setTimeout(() => {\n' +
          '          this.$vux.loading.hide()\n' +
          '          this.show8 = false\n' +
          '        }, 1000)\n' +
          '      },\n' +
          '      console (msg) {\n' +
          '        console.log(msg)\n' +
          '      },\n' +
          '      click (key) {\n' +
          '        console.log(key)\n' +
          '      },\n' +
          '      click5 (key, item) {\n' +
          '        console.log(key, item)\n' +
          '      },\n' +
          '      onDelete () {\n' +
          '        this.showSuccess = true\n' +
          '      },\n' +
          '    },\n' +
          '  }\n' +
          '\n' +
          '<\/script>';
        this.copyCodeMethod();
      },

    },
  }

</script>

<style>
  @c actionsheet {
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
</style>
