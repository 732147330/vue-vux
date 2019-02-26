<template lang="jade">
  -var c = 'scroller'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider 不带滚动条的水平scroller
    scroller(lock-y, :scrollbar-x=false)
      div(class="box1")
        div(class="box1-item", v-for="i in 7")
          span {{' ' + i + ' '}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    divider 显示滚动条的水平scroller
    scroller(lock-y, scrollbar-x)
      div(class="box1")
        div(class="box1-item", v-for="i in 7")
          span {{' ' + i + ' '}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    divider 没有边缘回滚效果的水平scroller
    scroller(lock-y, scrollbar-x, :bounce=false)
      div(class="box1")
        div(class="box1-item", v-for="i in 7")
          span {{' ' + i + ' '}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    divider 竖向scroller scrollTop: {{scrollTop}}
    scroller(lock-x height="200px", @on-scroll="onScroll", ref="scrollerEvent")
      div(class="box2")
        p(v-for="i in 80") placeholder {{i}}
    x-button(type="primary", @click.native="$refs.scrollerEvent.reset({top:0})") reset
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    divider 检查是否滚动到底部
    scroller(lock-x height="200px", @on-scroll-bottom="onScrollBottom", ref="scrollerBottom", :scroll-bottom-offst="200")
      div(class="box2")
        p(v-for="i in bottomCount") placeholder {{i}}
        load-more(tip="loading")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br

    divider 显示滚动条的竖向scroller
    scroller(lock-x scrollbar-y height="200px", ref="scroller")
      div(class="box2")
        p(v-for="i in 20", v-if="showList1") placeholder {{ i + '' + i }}
        p(v-for="i in 10", v-if="!showList1") placeholder {{ i }}
        x-button(style="margin:10px 0;", type="primary", @click.native="onClickButton") 按钮
        group
          cell(@click.native="onCellClick", title="Title", value="Value")
    br
    x-button(@click.native="changeList", type="primary") 改变显示的内容

    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    x-button(mini, plain, @click.native="copyCode07()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode08()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux';
  export default {
    components: { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore },
    data() {
      return {
        tempCode: '',
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        bottomCount: 20
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scrollerEvent.reset({top: 0})
      })
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      })
    },
    methods: {
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true
          setTimeout(() => {
            this.bottomCount += 10
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
          }, 2000)
        }
      },
      onScroll (pos) {
        this.scrollTop = pos.top
      },
      onCellClick () {
        window.alert('cell click')
      },
      onClickButton () {
        window.alert('click')
      },
      changeList () {
        this.showList1 = false
        this.$nextTick(() => {
          this.$refs.scroller.reset({
            top: 0
          })
        })
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
        this.tempCode = 'divider 不带滚动条的水平scroller\n' +
          '    scroller(lock-y, :scrollbar-x=false)\n' +
          '      div(class="box1")\n' +
          '        div(class="box1-item", v-for="i in 7")\n' +
          '          span {{\' \' + i + \' \'}}\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode =      '    divider 显示滚动条的水平scroller\n' +
          '    scroller(lock-y, scrollbar-x)\n' +
          '      div(class="box1")\n' +
          '        div(class="box1-item", v-for="i in 7")\n' +
          '          span {{\' \' + i + \' \'}}\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode =  '    divider 没有边缘回滚效果的水平scroller\n' +
          '    scroller(lock-y, scrollbar-x, :bounce=false)\n' +
          '      div(class="box1")\n' +
          '        div(class="box1-item", v-for="i in 7")\n' +
          '          span {{\' \' + i + \' \'}}\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode =    '    divider 竖向scroller scrollTop: {{scrollTop}}\n' +
          '    scroller(lock-x height="200px", @on-scroll="onScroll", ref="scrollerEvent")\n' +
          '      div(class="box2")\n' +
          '        p(v-for="i in 80") placeholder {{i}}\n' +
          '    x-button(type="primary", @click.native="$refs.scrollerEvent.reset({top:0})") reset\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode =    '    divider 检查是否滚动到底部\n' +
          '    scroller(lock-x height="200px", @on-scroll-bottom="onScrollBottom", ref="scrollerBottom", :scroll-bottom-offst="200")\n' +
          '      div(class="box2")\n' +
          '        p(v-for="i in bottomCount") placeholder {{i}}\n' +
          '        load-more(tip="loading")\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode =  '    divider 显示滚动条的竖向scroller\n' +
          '    scroller(lock-x scrollbar-y height="200px", ref="scroller")\n' +
          '      div(class="box2")\n' +
          '        p(v-for="i in 20", v-if="showList1") placeholder {{ i + \'\' + i }}\n' +
          '        p(v-for="i in 10", v-if="!showList1") placeholder {{ i }}\n' +
          '        x-button(style="margin:10px 0;", type="primary", @click.native="onClickButton") 按钮\n' +
          '        group\n' +
          '          cell(@click.native="onCellClick", title="Title", value="Value")\n' +
          '    br\n' +
          '    x-button(@click.native="changeList", type="primary") 改变显示的内容';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = ' import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        showList1: true,\n' +
          '        scrollTop: 0,\n' +
          '        onFetching: false,\n' +
          '        bottomCount: 20\n' +
          '      }\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      this.$nextTick(() => {\n' +
          '        this.$refs.scrollerEvent.reset({top: 0})\n' +
          '      })\n' +
          '      this.$nextTick(() => {\n' +
          '        this.$refs.scrollerBottom.reset({top: 0})\n' +
          '      })\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onScrollBottom () {\n' +
          '        if (this.onFetching) {\n' +
          '          // do nothing\n' +
          '        } else {\n' +
          '          this.onFetching = true\n' +
          '          setTimeout(() => {\n' +
          '            this.bottomCount += 10\n' +
          '            this.$nextTick(() => {\n' +
          '              this.$refs.scrollerBottom.reset()\n' +
          '            })\n' +
          '            this.onFetching = false\n' +
          '          }, 2000)\n' +
          '        }\n' +
          '      },\n' +
          '      onScroll (pos) {\n' +
          '        this.scrollTop = pos.top\n' +
          '      },\n' +
          '      onCellClick () {\n' +
          '        window.alert(\'cell click\')\n' +
          '      },\n' +
          '      onClickButton () {\n' +
          '        window.alert(\'click\')\n' +
          '      },\n' +
          '      changeList () {\n' +
          '        this.showList1 = false\n' +
          '        this.$nextTick(() => {\n' +
          '          this.$refs.scroller.reset({\n' +
          '            top: 0\n' +
          '          })\n' +
          '        })\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '.box1 {\n' +
          '  height: 100px;\n' +
          '  position: relative;\n' +
          '  width: 1490px;\n' +
          '}\n' +
          '.box1-item {\n' +
          '  width: 200px;\n' +
          '  height: 100px;\n' +
          '  background-color: #ccc;\n' +
          '  display:inline-block;\n' +
          '  margin-left: 15px;\n' +
          '  float: left;\n' +
          '  text-align: center;\n' +
          '  line-height: 100px;\n' +
          '}\n' +
          '.box1-item:first-child {\n' +
          '  margin-left: 0;\n' +
          '}\n' +
          '.box2-wrap {\n' +
          '  height: 300px;\n' +
          '  overflow: hidden;\n' +
          '}';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c scroller {
    @d wrap {
      .box1 {
        height: 100px;
        position: relative;
        width: 1490px;
      }
      .box1-item {
        width: 200px;
        height: 100px;
        background-color: #ccc;
        display:inline-block;
        margin-left: 15px;
        float: left;
        text-align: center;
        line-height: 100px;
      }
      .box1-item:first-child {
        margin-left: 0;
      }
      .box2-wrap {
        height: 300px;
        overflow: hidden;
      }
    }
  }
</style>
