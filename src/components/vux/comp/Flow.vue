<template lang="jade">
  -var c = 'flow'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    flow
      flow-state(state="1", title="已付款", is-done)
      flow-line(is-done)

      flow-state(state="2", is-done)
        span(slot="title") 已发货
      flow-line(tip="进行中")

      flow-state(state="3", title="待收货")
      flow-line

      flow-state(state="4", title="完成")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    flow
      flow-state(title="已付款", is-done)
      flow-line(is-done :line-span="15")

      flow-state(title="已发货", is-done)
      flow-line(is-done :line-span="30")

      flow-state(title="待收货", is-done)
      flow-line(tip="进行中", tip-direction="bottom", :line-span="45", :process-span="60")

      flow-state(title="完成")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    flow(orientation="vertical", style="height:250px;")
      flow-state(state="1", title="已付款", is-done)
      flow-line(is-done)

      flow-state(state="2", title="已发货", is-done)
      flow-line(tip="进行中")

      flow-state(state="3", title="待收货")
      flow-line

      flow-state(state="4", title="完成")
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    flow(orientation="vertical", style="height:200px;")
      flow-state(state="1", title="已付款", is-done)
      flow-line(is-done :line-span="15")

      flow-state(state="2", title="已发货", is-done)
      flow-line(:line-span="30")

      flow-state(state="3", title="待收货")
      flow-line(:line-span="45")

      flow-state(state="4", title="完成")


    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    x-button(mini, plain, @click.native="copyCode05()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Flow, FlowState, FlowLine, XButton } from 'vux';
  export default {
    components: { Flow, FlowState, FlowLine, XButton },
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
        this.tempCode = '   flow\n' +
          '      flow-state(state="1", title="已付款", is-done)\n' +
          '      flow-line(is-done)\n' +
          '\n' +
          '      flow-state(state="2", is-done)\n' +
          '        span(slot="title") 已发货\n' +
          '      flow-line(tip="进行中")\n' +
          '\n' +
          '      flow-state(state="3", title="待收货")\n' +
          '      flow-line\n' +
          '\n' +
          '      flow-state(state="4", title="完成")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    flow\n' +
          '      flow-state(title="已付款", is-done)\n' +
          '      flow-line(is-done :line-span="15")\n' +
          '\n' +
          '      flow-state(title="已发货", is-done)\n' +
          '      flow-line(is-done :line-span="30")\n' +
          '\n' +
          '      flow-state(title="待收货", is-done)\n' +
          '      flow-line(tip="进行中", tip-direction="bottom", :line-span="45", :process-span="60")\n' +
          '\n' +
          '      flow-state(title="完成")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' flow(orientation="vertical", style="height:250px;")\n' +
          '      flow-state(state="1", title="已付款", is-done)\n' +
          '      flow-line(is-done)\n' +
          '\n' +
          '      flow-state(state="2", title="已发货", is-done)\n' +
          '      flow-line(tip="进行中")\n' +
          '\n' +
          '      flow-state(state="3", title="待收货")\n' +
          '      flow-line\n' +
          '\n' +
          '      flow-state(state="4", title="完成")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  flow(orientation="vertical", style="height:200px;")\n' +
          '      flow-state(state="1", title="已付款", is-done)\n' +
          '      flow-line(is-done :line-span="15")\n' +
          '\n' +
          '      flow-state(state="2", title="已发货", is-done)\n' +
          '      flow-line(:line-span="30")\n' +
          '\n' +
          '      flow-state(state="3", title="待收货")\n' +
          '      flow-line(:line-span="45")\n' +
          '\n' +
          '      flow-state(state="4", title="完成")';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  import { Flow, FlowState, FlowLine, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Flow, FlowState, FlowLine, XButton },\n' +
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
  @c flow {
    @d wrap {

    }
  }
</style>
