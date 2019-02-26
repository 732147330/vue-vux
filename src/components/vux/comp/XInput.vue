<template lang="jade">
  -var c = 'x-input'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="禁用内置验证及显示成功或者错误样式")
      x-input(title="禁用验证", placeholder="I'm placeholder", novalidate, :icon-type="iconType", :show-clear="false", @on-blur="onBlur", placeholder-align="right")
    div(style="padding:15px;")
      x-button(@click.native="iconType = 'success'", type="primary")  set success
      x-button(@click.native="iconType = 'error'", type="primary")  set error
      x-button(@click.native="iconType = ''", type="primary")  set empty
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="is-type传入function")
      x-input(title="必须输入2333", :is-type="be2333", placeholder="I'm placeholder")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="mask")
      x-input(title="手机号码格式化", mask="999 9999 9999", v-model="maskValue", :max="13", is-type="china-mobile")
      cell(title="value", :value="maskValue")
      x-input(title="(99) 9-99", mask="(99) 9-99", v-model="maskValue2", :max="9")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group(title="使用icon代替title")
      x-input(title="必须输入2333", :is-type="be2333", placeholder="I'm placeholder")
        img(slot="label", style="padding-right:10px;display:block;", src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", width="24", height="24")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="max is alias to maxlength")
      x-input(title='max=5', :max="5", @on-change="change", v-model="maxValue")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    br

    group(title="debounce = 1000")
      x-input(title='debounce', :debounce="500", @on-change="change", v-model="debounceValue")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br

    group(title="disabled")
      x-input(title='value', text-align="right", disabled, v-model="disabledValue")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    br

    group(title="set type = tel")
      x-input(title='value' type="tel")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码
    br

    group(title="html title")
      x-input(label-width="4em", :title='`<span style="${style}">hello</span>`', placeholder="I'm placeholder")
    div(style="padding:15px;")
      x-button(@click.native="style = 'color:red;'", type="primary") set red
      x-button(@click.native="style = 'color:green'", type="primary") set green
      x-button(@click.native="style = 'color:#000'", type="primary") set default
    br
    x-button(mini, plain, type="primary", @click.native="copyCode09()") 复制代码
    br

    group(title="Default")
      x-input(title="message", placeholder="I'm placeholder")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode10()") 复制代码
    br

    group(title="不显示清除按钮")
      x-input(title="message", required, placeholder="I'm placeholder", :show-clear="false", autocapitalize="characters")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode11()") 复制代码
    br

    group(title="focus事件")
      x-input(title="focus-handler", placeholder="focus me!", :show-clear="true", @on-focus="onFocus")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode12()") 复制代码
    br

    group(title="set is-type=china-name")
      x-input(title="姓名", name="username", placeholder="请输入姓名", is-type="china-name")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode13()") 复制代码
    br

    group(title="set keyboard=number and is-type=china-mobile")
      x-input(title="手机号码", name="mobile", placeholder="请输入手机号码", keyboard="number", is-type="china-mobile")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode14()") 复制代码
    br

    group(title="set is-type=email")
      x-input(title="邮箱", name="email", placeholder="请输入邮箱地址", is-type="email")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode15()") 复制代码
    br

    group(title="set min=2 and max=5")
      x-input(title="2-5个字符", placeholder="", :min="2", :max="5")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode16()") 复制代码
    br

    group(title="确认输入")
      x-input(title="请输入6位数字", type="text", placeholder="", v-model="password", :min="6", :max="6", @on-change="change")
      x-input(title="请确认6位数字", v-model="password2", type="text", placeholder="", :equal-with="password")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode17()") 复制代码
    br

    group(title="enter事件")
      x-input(title="输入完成后回车", type="text", placeholder="", v-model="enterText", @on-enter="onEnter")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode18()") 复制代码
    br

    group(title="验证码")
      x-input(title="验证码")
        img(slot="right-full-height", src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg")
      x-input(title="发送验证码", class="weui-vcode")
        x-button(slot="right", type="primary", mini) 发送验证码
    br
    x-button(mini, plain, type="primary", @click.native="copyCode19()") 复制代码
    br

    group(title="check if value is valid when required===true")
      x-input(title="message", placeholder="I'm placeholder", ref="input01", required)
      cell(title="click to get valid value", :value="'$valid value:' + valid1", @click.native="getValid1")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode20()") 复制代码
    br

    group(title="check if value is valid when required===false")
      x-input(title="message", placeholder="I'm placeholder", :required="false", ref="input02", @click.native="getValid2")
      cell(title="click to get valid value", :value="'$valid value:' + valid2", @click.native="getValid2")

    x-button(mini, plain, type="primary", @click.native="copyCode21()") 复制代码
    x-button(mini, plain, @click.native="copyCode22()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode23()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { XInput, Group, XButton, Cell } from 'vux';
  export default {
    components: { XInput, Group, XButton, Cell },
    data() {
      return {
        tempCode: '',
        password: '123465',
        password2: '',
        enterText: '',
        valid1: false,
        valid2: false,
        iconType: '',
        be2333: function (value) {
          return {
            valid: value === '2333',
            msg: 'Must be 2333'
          }
        },
        style: '',
        disabledValue: 'hello',
        debounceValue: '',
        maxValue: '',
        maskValue: '13545678910',
        maskValue2: ''
      }
    },
    methods: {
      getValid1 () {
        this.valid1 = this.$refs.input01.valid
      },
      getValid2 () {
        this.valid2 = this.$refs.input02.valid
      },
      change (val) {
        console.log('on change', val)
      },
      onBlur (val) {
        console.log('on blur', val)
      },
      onFocus (val, $event) {
        console.log('on focus', val, $event)
      },
      onEnter (val) {
        console.log('click enter!', val)
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
        this.tempCode = '    group(title="禁用内置验证及显示成功或者错误样式")\n' +
          '      x-input(title="禁用验证", placeholder="I\'m placeholder", novalidate, :icon-type="iconType", :show-clear="false", @on-blur="onBlur", placeholder-align="right")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="iconType = \'success\'", type="primary")  set success\n' +
          '      x-button(@click.native="iconType = \'error\'", type="primary")  set error\n' +
          '      x-button(@click.native="iconType = \'\'", type="primary")  set empty';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '   group(title="is-type传入function")\n' +
          '      x-input(title="必须输入2333", :is-type="be2333", placeholder="I\'m placeholder")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '     group(title="mask")\n' +
          '      x-input(title="手机号码格式化", mask="999 9999 9999", v-model="maskValue", :max="13", is-type="china-mobile")\n' +
          '      cell(title="value", :value="maskValue")\n' +
          '      x-input(title="(99) 9-99", mask="(99) 9-99", v-model="maskValue2", :max="9")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '   group(title="使用icon代替title")\n' +
          '      x-input(title="必须输入2333", :is-type="be2333", placeholder="I\'m placeholder")\n' +
          '        img(slot="label", style="padding-right:10px;display:block;", src="http://dn-placeholder.qbox.me/110x110/FF2D55/000", width="24", height="24")';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  group(title="max is alias to maxlength")\n' +
          '      x-input(title=\'max=5\', :max="5", @on-change="change", v-model="maxValue") ';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '    group(title="debounce = 1000")\n' +
          '      x-input(title=\'debounce\', :debounce="500", @on-change="change", v-model="debounceValue")';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '    group(title="disabled")\n' +
          '      x-input(title=\'value\', text-align="right", disabled, v-model="disabledValue") ';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '   group(title="set type = tel")\n' +
          '      x-input(title=\'value\' type="tel") ';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = 'group(title="html title")\n' +
          '      x-input(label-width="4em", :title=\'`<span style="${style}">hello</span>`\', placeholder="I\'m placeholder")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="style = \'color:red;\'", type="primary") set red\n' +
          '      x-button(@click.native="style = \'color:green\'", type="primary") set green\n' +
          '      x-button(@click.native="style = \'color:#000\'", type="primary") set default ';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode = '    group(title="Default")\n' +
          '      x-input(title="message", placeholder="I\'m placeholder") ';
        this.copyCodeMethod();
      },
      copyCode11 () {
        this.tempCode = '    group(title="不显示清除按钮")\n' +
          '      x-input(title="message", required, placeholder="I\'m placeholder", :show-clear="false", autocapitalize="characters")\n' ;
        this.copyCodeMethod();
      },
      copyCode12 () {
        this.tempCode =
          '    group(title="focus事件")\n' +
          '      x-input(title="focus-handler", placeholder="focus me!", :show-clear="true", @on-focus="onFocus")\n' ;
        this.copyCodeMethod();
      },
      copyCode13 () {
        this.tempCode =   '    group(title="set is-type=china-name")\n' +
          '      x-input(title="姓名", name="username", placeholder="请输入姓名", is-type="china-name")\n';
        this.copyCodeMethod();
      },
      copyCode14 () {
        this.tempCode =   '    group(title="set keyboard=number and is-type=china-mobile")\n' +
          '      x-input(title="手机号码", name="mobile", placeholder="请输入手机号码", keyboard="number", is-type="china-mobile")\n';
        this.copyCodeMethod();
      },
      copyCode15 () {
        this.tempCode =  '    group(title="set is-type=email")\n' +
          '      x-input(title="邮箱", name="email", placeholder="请输入邮箱地址", is-type="email")\n';
        this.copyCodeMethod();
      },
      copyCode16 () {
        this.tempCode =    '    group(title="set min=2 and max=5")\n' +
          '      x-input(title="2-5个字符", placeholder="", :min="2", :max="5")\n';
        this.copyCodeMethod();
      },
      copyCode17 () {
        this.tempCode =  '    group(title="确认输入")\n' +
          '      x-input(title="请输入6位数字", type="text", placeholder="", v-model="password", :min="6", :max="6", @on-change="change")\n' +
          '      x-input(title="请确认6位数字", v-model="password2", type="text", placeholder="", :equal-with="password")\n';
        this.copyCodeMethod();
      },
      copyCode18 () {
        this.tempCode =  '    group(title="enter事件")\n' +
          '      x-input(title="输入完成后回车", type="text", placeholder="", v-model="enterText", @on-enter="onEnter")\n';
        this.copyCodeMethod();
      },
      copyCode19 () {
        this.tempCode =  '    group(title="验证码")\n' +
          '      x-input(title="验证码")\n' +
          '        img(slot="right-full-height", src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg")\n' +
          '      x-input(title="发送验证码", class="weui-vcode")\n' +
          '        x-button(slot="right", type="primary", mini) 发送验证码\n';
        this.copyCodeMethod();
      },
      copyCode20 () {
        this.tempCode = '    group(title="check if value is valid when required===true")\n' +
          '      x-input(title="message", placeholder="I\'m placeholder", ref="input01", required)\n' +
          '      cell(title="click to get valid value", :value="\'$valid value:\' + valid1", @click.native="getValid1")';
        this.copyCodeMethod();
      },
      copyCode21 () {
        this.tempCode =   '     group(title="check if value is valid when required===false")\n' +
          '      x-input(title="message", placeholder="I\'m placeholder", :required="false", ref="input02", @click.native="getValid2")\n' +
          '      cell(title="click to get valid value", :value="\'$valid value:\' + valid2", @click.native="getValid2")';
        this.copyCodeMethod();
      },
      copyCode22 () {
        this.tempCode = ' import { XInput, Group, XButton, Cell } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { XInput, Group, XButton, Cell },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        password: \'123465\',\n' +
          '        password2: \'\',\n' +
          '        enterText: \'\',\n' +
          '        valid1: false,\n' +
          '        valid2: false,\n' +
          '        iconType: \'\',\n' +
          '        be2333: function (value) {\n' +
          '          return {\n' +
          '            valid: value === \'2333\',\n' +
          '            msg: \'Must be 2333\'\n' +
          '          }\n' +
          '        },\n' +
          '        style: \'\',\n' +
          '        disabledValue: \'hello\',\n' +
          '        debounceValue: \'\',\n' +
          '        maxValue: \'\',\n' +
          '        maskValue: \'13545678910\',\n' +
          '        maskValue2: \'\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      getValid1 () {\n' +
          '        this.valid1 = this.$refs.input01.valid\n' +
          '      },\n' +
          '      getValid2 () {\n' +
          '        this.valid2 = this.$refs.input02.valid\n' +
          '      },\n' +
          '      change (val) {\n' +
          '        console.log(\'on change\', val)\n' +
          '      },\n' +
          '      onBlur (val) {\n' +
          '        console.log(\'on blur\', val)\n' +
          '      },\n' +
          '      onFocus (val, $event) {\n' +
          '        console.log(\'on focus\', val, $event)\n' +
          '      },\n' +
          '      onEnter (val) {\n' +
          '        console.log(\'click enter!\', val)\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode23 () {
        this.tempCode = '  .red {\n' +
          '        color: red;\n' +
          '      }\n' +
          '      .green {\n' +
          '        color: green;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c x-input {
    @d wrap {
      .red {
        color: red;
      }
      .green {
        color: green;
      }
    }
  }
</style>
