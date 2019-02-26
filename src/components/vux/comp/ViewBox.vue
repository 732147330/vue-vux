<template lang="jade">
  -var c = 'view-box'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    h3 这个视图就是用view-box实现的(代码引用详情请参考
      font(color='black') App.vue
      | )

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")

</template>

<script>
  import { ViewBox, XButton } from "vux";
  export default {
    components: { ViewBox, XButton },
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
        this.tempCode = '  view-box(body-padding-top="46px", body-padding-bottom="150px",style="height:100%;", ref="viewBox", id="a")\n' +
          '        m-header(:drawerShowValue.sync="drawerShowValue")\n' +
          '        router-view\n' +
          '        m-footer';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { ViewBox, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { ViewBox, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c view-box {
    @d wrap {
      text-align: center;
      color: red;
    }
  }
</style>
