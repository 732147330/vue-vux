<template lang="jade">
  -var c = 'GemsAndStones'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
      br
      | J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
    group(title="示例1：")
      x-textarea(:show-counter="false",v-model="val01", disabled)
    group(title="示例2：")
      x-textarea(:show-counter="false", v-model="val02", disabled)
    group(title="注意：")
      ul
        li S 和 J 最多含有50个字母。
        li J 中的字符不重复。
    group(title="测试：")
      div(slot="other")
        x-button(mini, type="primary", @click.native="commitStr()") 提交
        x-button(mini, type="warn", @click.native="cleanCode()") 清空
      x-input(title="输入J:", v-model="str1")
      x-input(title="输入S:", v-model="str2")
      x-input(title="输出(J在S中的数量):", v-model="str3", label-width="9em", disabled)
    group(title="js代码：")
      x-textarea(:show-counter="false", v-model="val03", autosize, disabled)
</template>

<script>
  import { XButton, XTextarea, Group, XInput } from 'vux'

  var numJewelsInStones = function(J, S) {
    let count = 0;//计数
    for(let i = 0; i < S.length; i++){
      if(J.indexOf(S.charAt(i)) > -1){
        count ++;
      }
    }
    return count;
  };

  var names = [...document.getElementsByTagName("*")].map(v=>v.nodeName)
  // console.log(new Set(names).size);

  export default {
    components: {XButton, XTextarea, Group, XInput},
    data() {
      return {
        val01: '输入: J = "aA", S = "aAAbbbb"\n' +
          '输出: 3\n',
        val02: '输入: J = "z", S = "ZZ"\n' +
          '输出: 0',
        val03: 'var numJewelsInStones = function(J, S) {\n' +
          '    let count = 0;//计数\n' +
          '    for(let i = 0; i < S.length; i++){  \n' +
          '        if(J.indexOf(S.charAt(i)) > -1){\n' +
          '            count ++;\n' +
          '        }\n' +
          '    }\n' +
          '    return count;\n' +
          '};',
        str1: 'aA',
        str2: 'aAAbbbb',
        str3: '',
      }
    },
    methods: {
      commitStr () {
        this.str3 = numJewelsInStones(this.str1,this.str2)
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
  @c GemsAndStones {
    @d wrap {
      p{
        text-align: center;
      }
    }
  }
</style>
