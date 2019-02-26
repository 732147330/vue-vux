<template lang="jade">
  -var c = 'cell'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      cell(title="我的账号", value="保护中", @click.native="onClick")
      cell(title="余额", @click.native="onClick", :is-loading="!money", :value="money")
      cell(title="提现", disabled, is-link)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group(title="'使用is-link显示右边箭头")
      cell(is-link)
        span(slot="title", style="color:green;")
          span(style="vertical-align:middle;") 消息
          badge(text="1")
      cell(title="通知", is-link)
      cell(title="隐私", is-link)
      cell(title="通用", is-link)
        img(slot="icon", width="20", style="display:block;margin-right:5px;", src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    group(label-width="5em", title="Align-items")
      cell(primary="content", title="default", value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long")
      cell(title="flex-start", align-items="flex-start", value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    group(title="折叠")
      cell(title="标题一",  is-link,  :border-intent="false", :arrow-direction="showContent001 ? 'up' : 'down'", @click.native="showContent001 = !showContent001")
      template(v-if="showContent001")
        cell-box(:border-intent="false", class="sub-item", is-link) content 001
        cell-box(class="sub-item", is-link) content 001
        cell-box(class="sub-item", is-link) content 001
      cell(title="标题二", is-link  :border-intent="false", :arrow-direction="showContent002 ? 'up' : 'down'", @click.native="showContent002 = !showContent002")
      template(v-if="showContent002")
        cell-form-preview(:border-intent="false", :list="list")
      cell(title="标题三", is-link, :border-intent="false", :arrow-direction="showContent003 ? 'up' : 'down'", @click.native="showContent003 = !showContent003")
      template(v-if="showContent003")
        cell-box(:border-intent="false", class="sub-item") I'm content 003
      cell(title="动画效果", is-link, :border-intent="false", :arrow-direction="showContent004 ? 'up' : 'down'", @click.native="showContent004 = !showContent004")
      p(class="slide", :class="showContent004 ? 'animate':''") blablabla...
        br
        | blablabla...
        br
        | blablabla...
        br
        | blablabla...
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    group
      cell(title="通知", value="已开启")
    group(title="使用slot显示复杂内容")
      cell(title="slot内容")
        div
          span(style="color: green") 你好哇，感谢关注VUX
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码

    group(title="当设有 link 属性时，会自动产生箭头效果，无需再设置 is-link")
      cell(title="前往Radio页面", link="#", inline-desc='link="/component/radio"')
      cell(title="前往Demo页面", link="#", inline-desc=':link={path:"/demo"}')
      cell(title="站外链接", link="https://vux.li", inline-desc='link="https://vux.li",')

    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    x-button(mini, plain, @click.native="copyCode07()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode08()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Cell, CellBox, CellFormPreview, Group, Badge, XButton } from 'vux';
  export default {
    components: { Cell, CellBox, CellFormPreview, Group, Badge, XButton },
    data() {
      return {
        tempCode: '',
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }],
        money: null,
        showContent001: false,
        showContent002: false,
        showContent003: false,
        showContent004: false
      }
    },
    mounted () {
      setTimeout(() => {
        this.money = -1024
      }, 2000)
    },
    methods: {
      onClick () {
        console.log('on click')
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
        this.tempCode = '    group\n' +
          '      cell(title="我的账号", value="保护中", @click.native="onClick")\n' +
          '      cell(title="余额", @click.native="onClick", :is-loading="!money", :value="money")\n' +
          '      cell(title="提现", disabled, is-link)';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  group(title="\'使用is-link显示右边箭头")\n' +
          '      cell(is-link)\n' +
          '        span(slot="title", style="color:green;")\n' +
          '          span(style="vertical-align:middle;") 消息\n' +
          '          badge(text="1")\n' +
          '      cell(title="通知", is-link)\n' +
          '      cell(title="隐私", is-link)\n' +
          '      cell(title="通用", is-link)\n' +
          '        img(slot="icon", width="20", style="display:block;margin-right:5px;", src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=") ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  group(label-width="5em", title="Align-items")\n' +
          '      cell(primary="content", title="default", value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long")\n' +
          '      cell(title="flex-start", align-items="flex-start", value="long long long longlong longlong longlong longlong longlong longlong longlong longlong long")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = ' group(title="折叠")\n' +
          '      cell(title="标题一",  is-link,  :border-intent="false", :arrow-direction="showContent001 ? \'up\' : \'down\'", @click.native="showContent001 = !showContent001")\n' +
          '      template(v-if="showContent001")\n' +
          '        cell-box(:border-intent="false", class="sub-item", is-link) content 001\n' +
          '        cell-box(class="sub-item", is-link) content 001\n' +
          '        cell-box(class="sub-item", is-link) content 001\n' +
          '      cell(title="标题二", is-link  :border-intent="false", :arrow-direction="showContent002 ? \'up\' : \'down\'", @click.native="showContent002 = !showContent002")\n' +
          '      template(v-if="showContent002")\n' +
          '        cell-form-preview(:border-intent="false", :list="list")\n' +
          '      cell(title="标题三", is-link, :border-intent="false", :arrow-direction="showContent003 ? \'up\' : \'down\'", @click.native="showContent003 = !showContent003")\n' +
          '      template(v-if="showContent003")\n' +
          '        cell-box(:border-intent="false", class="sub-item") I\'m content 003\n' +
          '      cell(title="动画效果", is-link, :border-intent="false", :arrow-direction="showContent004 ? \'up\' : \'down\'", @click.native="showContent004 = !showContent004")\n' +
          '      p(class="slide", :class="showContent004 ? \'animate\':\'\'") blablabla...\n' +
          '        br\n' +
          '        | blablabla...\n' +
          '        br\n' +
          '        | blablabla...\n' +
          '        br\n' +
          '        | blablabla...';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  group\n' +
          '      cell(title="通知", value="已开启")\n' +
          '    group(title="使用slot显示复杂内容")\n' +
          '      cell(title="slot内容")\n' +
          '        div\n' +
          '          span(style="color: green") 你好哇，感谢关注VUX';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '  group(title="当设有 link 属性时，会自动产生箭头效果，无需再设置 is-link")\n' +
          '      cell(title="前往Radio页面", link="#", inline-desc=\'link="/component/radio"\')\n' +
          '      cell(title="前往Demo页面", link="#", inline-desc=\':link={path:"/demo"}\')\n' +
          '      cell(title="站外链接", link="https://vux.li", inline-desc=\'link="https://vux.li",\')';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = ' import { Cell, CellBox, CellFormPreview, Group, Badge, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Cell, CellBox, CellFormPreview, Group, Badge, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        list: [{\n' +
          '          label: \'Apple\',\n' +
          '          value: \'3.29\'\n' +
          '        }, {\n' +
          '          label: \'Banana\',\n' +
          '          value: \'1.04\'\n' +
          '        }, {\n' +
          '          label: \'Fish\',\n' +
          '          value: \'8.00\'\n' +
          '        }],\n' +
          '        money: null,\n' +
          '        showContent001: false,\n' +
          '        showContent002: false,\n' +
          '        showContent003: false,\n' +
          '        showContent004: false\n' +
          '      }\n' +
          '    },\n' +
          '    mounted () {\n' +
          '      setTimeout(() => {\n' +
          '        this.money = -1024\n' +
          '      }, 2000)\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onClick () {\n' +
          '        console.log(\'on click\')\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '  .sub-item {\n' +
          '        color: #888;\n' +
          '      }\n' +
          '      .slide {\n' +
          '        padding: 0 20px;\n' +
          '        overflow: hidden;\n' +
          '        max-height: 0;\n' +
          '        transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;\n' +
          '      }\n' +
          '      .animate {\n' +
          '        max-height: 9999px;\n' +
          '        transition-timing-function: cubic-bezier(0.5, 0, 1, 0);\n' +
          '        transition-delay: 0s;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c cell {
    @d wrap {
      .sub-item {
        color: #888;
      }
      .slide {
        padding: 0 20px;
        overflow: hidden;
        max-height: 0;
        transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
      }
      .animate {
        max-height: 9999px;
        transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
        transition-delay: 0s;
      }
    }
  }
</style>
