<template lang="jade">
  -var c = 'x-textarea'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-textarea(:max="20", placeholder="提示", @on-focus="onEvent('focus')", @on-blur="onEvent('blur')")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="和input一起使用")
      x-input(placeholder="标题")
      x-textarea(:max="200", name="description", placeholder="提示")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="不显示计数器")
      x-textarea(:max="200", name="detail", placeholder="提示", :show-counter="false")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group(title="自动高度")
      x-textarea(placeholder="随便写点什么", :show-counter="false", :rows="1", autosize)
      x-textarea(title="标题", placeholder="随便写点什么", :show-counter="false", :rows="1", autosize)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="设置高度为200像素")
      x-textarea(title="标题", :max="200", placeholder="提示 ", :show-counter="false", :height="200", :rows="8", :cols="30")

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XTextarea, Group, XInput, XButton } from 'vux';
  export default {
    components: { XTextarea, Group, XInput, XButton },
    data() {
      return {
        tempCode: '',
      }
    },
    methods: {
      onEvent (event) {
        console.log('on', event)
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
        this.tempCode = '  group\n' +
          '      x-textarea(:max="20", placeholder="提示", @on-focus="onEvent(\'focus\')", @on-blur="onEvent(\'blur\')")\n';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode =       '    group(title="和input一起使用")\n' +
          '      x-input(placeholder="标题")\n' +
          '      x-textarea(:max="200", name="description", placeholder="提示")\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode =     '    group(title="不显示计数器")\n' +
          '      x-textarea(:max="200", name="detail", placeholder="提示", :show-counter="false")\n' ;
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode =    '    group(title="自动高度")\n' +
          '      x-textarea(placeholder="随便写点什么", :show-counter="false", :rows="1", autosize)\n' +
          '      x-textarea(title="标题", placeholder="随便写点什么", :show-counter="false", :rows="1", autosize)\n';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode =      '    group(title="设置高度为200像素")\n' +
          '      x-textarea(title="标题", :max="200", placeholder="提示 ", :show-counter="false", :height="200", :rows="8", :cols="30")';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '  import { XTextarea, Group, XInput, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { XTextarea, Group, XInput, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onEvent (event) {\n' +
          '        console.log(\'on\', event)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c x-textarea {
    @d wrap {

    }
  }
</style>
