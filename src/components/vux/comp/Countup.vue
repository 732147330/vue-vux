<template lang="jade">
  -var c = 'countup'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    countup(:start-val="1", :end-val="1388", :duration="2", class="demo1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    countup(:end-val="88.88", :duration="3", :decimals="2", class="demo1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br
    countup(:end-val="1024", :duration="4", :start="doStart", class="demo1")
    div(style="padding:0 15px;")
     x-button(@click.native="doStart=true", type="primary")  开始
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode05()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Countup, XButton } from "vux";
  export default {
    components: { Countup, XButton },
    data() {
      return {
        tempCode: '',
        doStart: false
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
        this.tempCode = ' countup(:start-val="1", :end-val="1388", :duration="2", class="demo1")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    countup(:end-val="88.88", :duration="3", :decimals="2", class="demo1")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  countup(:end-val="1024", :duration="4", :start="doStart", class="demo1")\n' +
          '    div(style="padding:0 15px;")\n' +
          '     x-button(@click.native="doStart=true", type="primary")  开始';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '  import { Countup, XButton } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { Countup, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        doStart: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = ' text-align:center;\n' +
          '      .demo1 {\n' +
          '        font-family: \'Source Sans Pro\', Helvetica, Arial, sans-serif;\n' +
          '        font-size: 6em;\n' +
          '        color: #04BE02;\n' +
          '      }';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c countup {
    @d wrap {
      text-align:center;
      .demo1 {
        font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
        font-size: 6em;
        color: #04BE02;
      }
    }
  }
</style>
