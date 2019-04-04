<template lang="jade">
  -var c = 'EncodeAndDeCodeOfTinyURL'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.
    group(title="示例1：")
      x-textarea(:show-counter="false",v-model="val01", disabled)
    group(title="要求：")
      p(style="text-align:left;") 设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。
    group(title="测试：")
      div(slot="other")
        x-button(mini, type="primary", @click.native="encodeStr()") 加密
        x-button(mini, type="default", @click.native="decodeStr()") 解密
        x-button(mini, type="warn", @click.native="cleanCode()") 清空
      x-input(title="原longUrl:", v-model="str1")
      x-input(title="加密shortUrl:", v-model="str2", disabled)
      x-input(title="解密longUrl:", v-model="str3", disabled)
    group(title="js代码：")
      x-textarea(:show-counter="false", v-model="val02", autosize, disabled)
</template>

<script>
  import { XButton, XTextarea, Group, XInput } from 'vux'

  var map = new Map();
  var charCode = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var tinyURL_pre = 'http://tinyurl.com/';

  //加密
  var encode = function(longUrl) {
    var shortUrl = tinyURL_pre;
    if(longUrl != ''){
      for(let i = 0; i < 6; i++){
        shortUrl = shortUrl + charCode.charAt(parseInt(Math.random()*charCode.length));
      }
    }
    if(!map.hasOwnProperty(shortUrl)){
      map[shortUrl] = longUrl;
    }else{
      encode(longUrl);
    }
    return shortUrl;
  };

  //解密
  var decode = function(shortUrl) {
    return map[shortUrl];
  };


  export default {
    components: {XButton, XTextarea, Group, XInput},
    data() {
      return {
        val01: '长URL: https://leetcode.com/problems/design-tinyurl\n' +
          '短URL: http://tinyurl.com/4e9iAk\n',
        val02: '  var map = new Map();\n' +
          '  var charCode = \'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\';\n' +
          '  var tinyURL_pre = \'http://tinyurl.com/\';\n' +
          '\n' +
          '  //加密\n' +
          '  var encode = function(longUrl) {\n' +
          '    var shortUrl = tinyURL_pre;\n' +
          '    if(longUrl != \'\'){\n' +
          '      for(let i = 0; i < 6; i++){\n' +
          '        shortUrl = shortUrl + charCode.charAt(parseInt(Math.random()*charCode.length));\n' +
          '      }\n' +
          '    }\n' +
          '    if(!map.hasOwnProperty(shortUrl)){\n' +
          '      map[shortUrl] = longUrl;\n' +
          '    }else{\n' +
          '      encode(longUrl);\n' +
          '    }\n' +
          '    return shortUrl;\n' +
          '  };\n' +
          '\n' +
          '  //解密\n' +
          '  var decode = function(shortUrl) {\n' +
          '    return map[shortUrl];\n' +
          '  };',
        str1: 'https://leetcode.com/problems/design-tinyurl',
        str2: '',
        str3: '',
      }
    },
    methods: {
      encodeStr () {
        this.str2 = encode(this.str1.trim())
      },
      decodeStr () {
        this.str3 = decode(this.str2.trim())
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
  @c EncodeAndDeCodeOfTinyURL {
    @d wrap {
      p{
        text-align: center;
      }
    }
  }
</style>
