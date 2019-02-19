<template lang="jade">
  -var c = 'loadMore'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    br
    load-more(tip="正在加载中")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br
    load-more(:show-loading="false", tip="暂无数据", background-color="#fbf9fe")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br
    load-more(:show-loading="false", background-color="#fbf9fe")

    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    x-button(mini, plain, @click.native="copyCode04()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { LoadMore, XButton } from "vux";
  export default {
    components: { LoadMore, XButton },
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
        this.tempCode = '    load-more(tip="正在加载中")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  load-more(:show-loading="false", tip="暂无数据", background-color="#fbf9fe")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    load-more(:show-loading="false", background-color="#fbf9fe")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' import { LoadMore } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { LoadMore },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    },\n' +
          '  }\n';
        this.copyCodeMethod();
      },
    },
  }

</script>

<style>
  @c loadMore {
    @d wrap {

    }
  }
</style>
