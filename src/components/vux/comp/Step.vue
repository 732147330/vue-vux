<template lang="jade">
  -var c = 'step'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    div
      step(v-model="step1", background-color='#fbf9fe')
        step-item(title="步骤1", description="step 1")
        step-item(title="步骤2", description="step 2")
        step-item(title="步骤3", description="step 3")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-hr
    div
      step(v-model="step2", background-color='#fbf9fe' gutter="20px")
        step-item(title="确定")
        step-item(title="进行中")
        step-item(title="结束")
      div(class="btn_wrap")
        x-button(type="primary", @click.native="nextStep") 下一步

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, @click.native="copyCode03()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode04()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Step, StepItem, XButton, XHr } from 'vux';
  export default {
    components: { Step, StepItem, XButton, XHr },
    data() {
      return {
        tempCode: '',
        step1: 1,
        step2: 0
      }
    },
    methods: {
      nextStep () {
        this.step2 ++
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
        this.tempCode = '    div\n' +
          '      step(v-model="step1", background-color=\'#fbf9fe\')\n' +
          '        step-item(title="步骤1", description="step 1")\n' +
          '        step-item(title="步骤2", description="step 2")\n' +
          '        step-item(title="步骤3", description="step 3")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = 'x-hr\n' +
          '    div\n' +
          '      step(v-model="step2", background-color=\'#fbf9fe\' gutter="20px")\n' +
          '        step-item(title="确定")\n' +
          '        step-item(title="进行中")\n' +
          '        step-item(title="结束")\n' +
          '      div(class="btn_wrap")\n' +
          '        x-button(type="primary", @click.native="nextStep") 下一步';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = ' import { Step, StepItem, XButton, XHr } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Step, StepItem, XButton, XHr },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        step1: 1,\n' +
          '        step2: 0\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      nextStep () {\n' +
          '        this.step2 ++\n' +
          '      },\n' +
          '    }\n' +
          '  }\n';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  width: 95%;\n' +
          '      margin: 0 auto;\n' +
          '      .btn_wrap {\n' +
          '        padding: 0 1rem;\n' +
          '        margin-top: 2rem;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c step {
    @d wrap {
      width: 95%;
      margin: 0 auto;
      .btn_wrap {
        padding: 0 1rem;
        margin-top: 2rem;
      }
    }
  }
</style>
