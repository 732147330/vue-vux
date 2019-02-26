<template lang="jade">
  -var c = 'x-table'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    load-more(tip="default", :show-loading="false", background-color="#fbf9fe")
    div(style="padding:0 15px;")
      x-table
        thead
          tr
            th Product
            th Price
        tbody
          tr
            td Apple
            td $1.25
          tr
            td Banana
            td $1.20

    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    div
      load-more(tip="cell-bordered=false", :show-loading="false", background-color="#fbf9fe")
      x-table(:cell-bordered="false", style="background-color:#fff;")
        thead
          tr
            th Product
            th Price
            th Quantity
        tbody
          tr
            td Apple
            td $1.25
            td  x 1
          tr
            td Banana
            td $1.20
            td  x 2
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    load-more(tip="content-bordered=false", :show-loading="false", background-color="#fbf9fe")
    x-table(:cell-bordered="false", :content-bordered="false", style="background-color:#fff;")
      thead
        tr(style="background-color: #F7F7F7")
          th Product
          th Price
          th Quantity
      tbody
        tr
          td Apple
          td $1.25
          td  x 1
        tr
          td Banana
          td $1.20
          td  x 2
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    div(style="padding:15px;")
      load-more(tip="full-bordered", :show-loading="false", background-color="#fbf9fe")
      x-table(full-bordered style="background-color:#fff;")
        thead
          tr
            th Product
            th Price
            th Quantity
        tbody
          tr
            td Apple
            td(colspan="2") $1.25 x 10
          tr
            td Banana
            td $1.20
            td x 08

    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    x-button(mini, plain, @click.native="copyCode05()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XTable, LoadMore, XButton } from 'vux';
  export default {
    components: { XTable, LoadMore, XButton },
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
        this.tempCode = ' load-more(tip="default", :show-loading="false", background-color="#fbf9fe")\n' +
          '    div(style="padding:0 15px;")\n' +
          '      x-table\n' +
          '        thead\n' +
          '          tr\n' +
          '            th Product\n' +
          '            th Price\n' +
          '        tbody\n' +
          '          tr\n' +
          '            td Apple\n' +
          '            td $1.25\n' +
          '          tr\n' +
          '            td Banana\n' +
          '            td $1.20';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' div\n' +
          '      load-more(tip="cell-bordered=false", :show-loading="false", background-color="#fbf9fe")\n' +
          '      x-table(:cell-bordered="false", style="background-color:#fff;")\n' +
          '        thead\n' +
          '          tr\n' +
          '            th Product\n' +
          '            th Price\n' +
          '            th Quantity\n' +
          '        tbody\n' +
          '          tr\n' +
          '            td Apple\n' +
          '            td $1.25\n' +
          '            td  x 1\n' +
          '          tr\n' +
          '            td Banana\n' +
          '            td $1.20';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  load-more(tip="content-bordered=false", :show-loading="false", background-color="#fbf9fe")\n' +
          '    x-table(:cell-bordered="false", :content-bordered="false", style="background-color:#fff;")\n' +
          '      thead\n' +
          '        tr(style="background-color: #F7F7F7")\n' +
          '          th Product\n' +
          '          th Price\n' +
          '          th Quantity\n' +
          '      tbody\n' +
          '        tr\n' +
          '          td Apple\n' +
          '          td $1.25\n' +
          '          td  x 1\n' +
          '        tr\n' +
          '          td Banana\n' +
          '          td $1.20\n' +
          '          td  x 2';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' div(style="padding:15px;")\n' +
          '      load-more(tip="full-bordered", :show-loading="false", background-color="#fbf9fe")\n' +
          '      x-table(full-bordered style="background-color:#fff;")\n' +
          '        thead\n' +
          '          tr\n' +
          '            th Product\n' +
          '            th Price\n' +
          '            th Quantity\n' +
          '        tbody\n' +
          '          tr\n' +
          '            td Apple\n' +
          '            td(colspan="2") $1.25 x 10\n' +
          '          tr\n' +
          '            td Banana\n' +
          '            td $1.20\n' +
          '            td x 08';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = ' import { XTable, LoadMore, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { XTable, LoadMore, XButton },\n' +
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
  @c x-table {
    @d wrap {

    }
  }
</style>
