<template lang="jade">
  -var c = 'ConversionOfUpperAndLowerCaseLetters'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
    group(title="示例1：")
      x-textarea(:show-counter="false",v-model="val01", disabled)
    group(title="示例2：")
      x-textarea(:show-counter="false", v-model="val02", disabled)
    group(title="示例3：")
      x-textarea(:show-counter="false", v-model="val03", disabled)
    group(title="注意：")
      ul
        li S 和 J 最多含有50个字母。
        li J 中的字符不重复。
    group(title="测试：")
      div(slot="other")
        x-button(mini, type="primary", @click.native="toLower()") 转换小写
        x-button(mini, type="primary", @click.native="toUpper()") 转换大写
        x-button(mini, type="warn", @click.native="cleanCode()") 清空
      x-input(title="输入字符串:", v-model="str1")
      x-input(title="输出(小写字母):", v-model="str2", label-width="9em", disabled)
      x-input(title="输出(大写字母):", v-model="str3", label-width="9em", disabled)
    group(title="js代码：")
      x-textarea(:show-counter="false", v-model="val04", autosize, disabled)
</template>

<script>
  import { XButton, XTextarea, Group, XInput } from 'vux'

  //转换小写
  var toLowerCase = function(str) {
    //大写字母A-Z对应的ASCII码值是65-90
    //小写字母a-z对应的ASCII码值是97-122
    var newStr = '';
    for(let i = 0; i < str.length ; i++){
      var s = str.charAt(i);
      if(s.charCodeAt() >= 65 && s.charCodeAt() <=90){
        newStr = newStr + String.fromCharCode(s.charCodeAt()+32);
      }else{
        newStr = newStr + s;
      }
    }
    return newStr;
  };

  //转换大写
  var toUpperCase = function(str) {
    var newStr = '';
    for(let i = 0; i < str.length ; i++){
      var s = str.charAt(i);
      if(s.charCodeAt() >= 97 && s.charCodeAt() <=122){
        newStr = newStr + String.fromCharCode(s.charCodeAt()-32);
      }else{
        newStr = newStr + s;
      }
    }
    return newStr;
  };

  export default {
    components: {XButton, XTextarea, Group, XInput},
    data() {
      return {
        val01: '输入: "Hello"\n' +
          '输出: "hello"',
        val02: '输入: "here"\n' +
          '输出: "here"',
        val03: '输入: "LOVELY"\n' +
          '输出: "lovely"',
        val04: '  //转换小写\n' +
          '  var toLowerCase = function(str) {\n' +
          '    //大写字母A-Z对应的ASCII码值是65-90\n' +
          '    //小写字母a-z对应的ASCII码值是97-122\n' +
          '    var newStr = \'\';\n' +
          '    for(let i = 0; i < str.length ; i++){\n' +
          '      var s = str.charAt(i);\n' +
          '      if(s.charCodeAt() >= 65 && s.charCodeAt() <=90){\n' +
          '        newStr = newStr + String.fromCharCode(s.charCodeAt()+32);\n' +
          '      }else{\n' +
          '        newStr = newStr + s;\n' +
          '      }\n' +
          '    }\n' +
          '    return newStr;\n' +
          '  };\n' +
          '\n' +
          '  //转换大写\n' +
          '  var toUpperCase = function(str) {\n' +
          '    var newStr = \'\';\n' +
          '    for(let i = 0; i < str.length ; i++){\n' +
          '      var s = str.charAt(i);\n' +
          '      if(s.charCodeAt() >= 97 && s.charCodeAt() <=122){\n' +
          '        newStr = newStr + String.fromCharCode(s.charCodeAt()-32);\n' +
          '      }else{\n' +
          '        newStr = newStr + s;\n' +
          '      }\n' +
          '    }\n' +
          '    return newStr;\n' +
          '  };',
        str1: 'heRe And ThEre',
        str2: '',
        str3: '',
      }
    },
    methods: {
      toLower () {
        this.str2 = toLowerCase(this.str1);
      },
      toUpper() {
        this.str3 = toUpperCase(this.str1);
      },
      cleanCode () {
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
      }
    },
  }

</script>
<style>
  @c ConversionOfUpperAndLowerCaseLetters {
    @d wrap {
      p{
        text-align: center;
      }
    }
  }
</style>
