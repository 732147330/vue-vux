<template lang="jade">
  -var c = 'swipeout'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(class="vux-1px-t")
      swipeout
        swipeout-item(@on-close="handleEvents('on-close')", @on-open="handleEvents('on-open')", transition-mode="follow")
          div(slot="right-menu")
            swipeout-button(@click.native="onButtonClick('fav')", type="primary") 是的
            swipeout-button(@click.native="onButtonClick('delete')", type="warn") 正确
          div(slot="content", class="demo-content vux-1px-t") JavaScript 是最好的语言
        swipeout-item(:threshold=".5", underlay-color="#ccc")
          div(slot="right-menu")
            swipeout-button(@click.native="onButtonClick('fav')", background-color="#336DD6") {{$t('Fav')}}
            swipeout-button(@click.native="onButtonClick('delete')", background-color="#D23934") {{$t('Delete')}}
          div(slot="content", class="demo-content vux-1px-tb") 设置滑动阙值为 0.5
        swipeout-item(:disabled="disabled", ref="swipeoutItem", :right-menu-width="210", :sensitivity="15")
          div(slot="right-menu")
            swipeout-button(@click.native="onButtonClick('fav')", type="primary", :width="70") 收藏
            swipeout-button(@click.native="onButtonClick('delete')", type="warn", :width="70") 删除
            swipeout-button(@click.native="onButtonClick('ignore')", type="default", :width="70") 忽略
          div(slot="left-menu")
            swipeout-button(@click.native="onButtonClick('fav')", type="primary") 收藏
            swipeout-button(@click.native="onButtonClick('delete')", type="warn") 删除
          div(slot="content", class="demo-content vux-1px-b")
            | now
            span(v-if="disabled") 不可操作
            span(v-else="enabled") 可操作
    div(style="padding:15px;")
      x-button(@click.native="disabled = false", type="primary", :disabled="!disabled") 设置可操作
      x-button(@click.native="disabled = true", type="warn", :disabled="disabled") 设置不可操作
      x-button(@click.native="$refs.swipeoutItem.open('left')", type="primary") 打开左菜单
      x-button(@click.native="$refs.swipeoutItem.open('right')", type="primary") 打开右菜单
      x-button(@click.native="$refs.swipeoutItem.close()", type="warn") 关闭菜单
    br
    group-title use vux-1px to style items
    swipeout(class="vux-1px-tb")
      swipeout-item(transition-mode="follow", v-for="i in 3", :key="i")
        div(slot="right-menu")
          swipeout-button(type="primary") 是的
          swipeout-button(type="warn") 正确
        div(slot="content", :class="{'vux-1px-b': i !== 3, 'vux-1px-t': i === 1}", style="padding:12px;") JavaScript 是最好的语言
    br
    br

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode03()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux';
  export default {
    components: { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton },
    data() {
      return {
        tempCode: '',
        disabled: false
      }
    },
    methods: {
      onButtonClick (type) {
        alert('on button click ' + type)
      },
      handleEvents (type) {
        console.log('event: ', type)
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
        this.tempCode = '   div(class="vux-1px-t")\n' +
          '      swipeout\n' +
          '        swipeout-item(@on-close="handleEvents(\'on-close\')", @on-open="handleEvents(\'on-open\')", transition-mode="follow")\n' +
          '          div(slot="right-menu")\n' +
          '            swipeout-button(@click.native="onButtonClick(\'fav\')", type="primary") 是的\n' +
          '            swipeout-button(@click.native="onButtonClick(\'delete\')", type="warn") 正确\n' +
          '          div(slot="content", class="demo-content vux-1px-t") JavaScript 是最好的语言\n' +
          '        swipeout-item(:threshold=".5", underlay-color="#ccc")\n' +
          '          div(slot="right-menu")\n' +
          '            swipeout-button(@click.native="onButtonClick(\'fav\')", background-color="#336DD6") {{$t(\'Fav\')}}\n' +
          '            swipeout-button(@click.native="onButtonClick(\'delete\')", background-color="#D23934") {{$t(\'Delete\')}}\n' +
          '          div(slot="content", class="demo-content vux-1px-tb") 设置滑动阙值为 0.5\n' +
          '        swipeout-item(:disabled="disabled", ref="swipeoutItem", :right-menu-width="210", :sensitivity="15")\n' +
          '          div(slot="right-menu")\n' +
          '            swipeout-button(@click.native="onButtonClick(\'fav\')", type="primary", :width="70") 收藏\n' +
          '            swipeout-button(@click.native="onButtonClick(\'delete\')", type="warn", :width="70") 删除\n' +
          '            swipeout-button(@click.native="onButtonClick(\'ignore\')", type="default", :width="70") 忽略\n' +
          '          div(slot="left-menu")\n' +
          '            swipeout-button(@click.native="onButtonClick(\'fav\')", type="primary") 收藏\n' +
          '            swipeout-button(@click.native="onButtonClick(\'delete\')", type="warn") 删除\n' +
          '          div(slot="content", class="demo-content vux-1px-b")\n' +
          '            | now\n' +
          '            span(v-if="disabled") 不可操作\n' +
          '            span(v-else="enabled") 可操作\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="disabled = false", type="primary", :disabled="!disabled") 设置可操作\n' +
          '      x-button(@click.native="disabled = true", type="warn", :disabled="disabled") 设置不可操作\n' +
          '      x-button(@click.native="$refs.swipeoutItem.open(\'left\')", type="primary") 打开左菜单\n' +
          '      x-button(@click.native="$refs.swipeoutItem.open(\'right\')", type="primary") 打开右菜单\n' +
          '      x-button(@click.native="$refs.swipeoutItem.close()", type="warn") 关闭菜单\n' +
          '    br\n' +
          '    group-title use vux-1px to style items\n' +
          '    swipeout(class="vux-1px-tb")\n' +
          '      swipeout-item(transition-mode="follow", v-for="i in 3", :key="i")\n' +
          '        div(slot="right-menu")\n' +
          '          swipeout-button(type="primary") 是的\n' +
          '          swipeout-button(type="warn") 正确\n' +
          '        div(slot="content", :class="{\'vux-1px-b\': i !== 3, \'vux-1px-t\': i === 1}", style="padding:12px;") JavaScript 是最好的语言\n' +
          '    br\n' +
          '    br';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        disabled: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onButtonClick (type) {\n' +
          '        alert(\'on button click \' + type)\n' +
          '      },\n' +
          '      handleEvents (type) {\n' +
          '        console.log(\'event: \', type)\n' +
          '      },\n' +
          '    }\n' +
          '  } ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  .demo-content {\n' +
          '        padding: 10px 10px;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c swipeout {
    @d wrap {
      .demo-content {
        padding: 10px 10px;
      }
    }
  }
</style>
