<template lang="jade">
  -var c = 'DisplayCardsInIncrementalOrder'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p 牌组中的每张卡牌都对应有一个唯一的整数。你可以按你想要的顺序对这套卡片进行排序。
      br
      | 最初，这些卡牌在牌组里是正面朝下的（即，未显示状态）。
      br
      | 现在，重复执行以下步骤，直到显示所有卡牌为止：
      br
      | 1. 从牌组顶部抽一张牌，显示它，然后将其从牌组中移出。
      br
      | 2. 如果牌组中仍有牌，则将下一张处于牌组顶部的牌放在牌组的底部。
      br
      | 3. 如果仍有未显示的牌，那么返回步骤 1。否则，停止行动。
      br
      | 返回能以递增顺序显示卡牌的牌组顺序。
      br
      | 答案中的第一张牌被认为处于牌堆顶部。。
    group(title="示例：")
      x-textarea(:show-counter="false",v-model="val01", autosize, disabled)

    group(title="提示：")
      ul
        li 1 <= A.length <= 1000
        li 1 <= A[i] <= 10^6
        li 对于所有的 i != j，A[i] != A[j]
    group(title="测试：")
      div(slot="other")
        x-button(mini, type="primary", @click.native="commitStr()") 提交
        x-button(mini, type="warn", @click.native="cleanCode()") 清空
      x-input(title="输入数组:", v-model="str1")
      x-input(title="输出:", v-model="str2", disabled)
    group(title="js代码：")
      x-textarea(:show-counter="false", v-model="val02", autosize, disabled)
</template>

<script>
  import { XButton, XTextarea, Group, XInput } from 'vux'

  var deckRevealedIncreasing = function(deck) {
    var array = [];

    //倒序
    for (let i = 0; i < deck.length; i++) {
      for (let j = i+1; j < deck.length; j++) {
        var t = [];
        if (deck[i] < deck[j]) {
          t = deck[i];
          deck[i] = deck[j];
          deck[j] = t;
        }
      }
    }

    //递增顺序显示卡牌
    array[0] = deck[0];
    for (let i = 1; i < deck.length; i++) {
      if(i===1){
        array.splice(0,0,deck[i])
      }else{
        array.splice(0,0,deck[i])
        var t = array[array.length-1];
        array.splice(array.length-1,1);
        array.splice(1,0,t);
      }
    }
    return array;
  };


  export default {
    components: {XButton, XTextarea, Group, XInput},
    data() {
      return {
        val01: '输入：[17,13,11,2,3,5,7]\n' +
          '输出：[2,13,3,11,5,17,7]\n' +
          '解释：\n' +
          '我们得到的牌组顺序为 [17,13,11,2,3,5,7]（这个顺序不重要），然后将其重新排序。\n' +
          '重新排序后，牌组以 [2,13,3,11,5,17,7] 开始，其中 2 位于牌组的顶部。\n' +
          '我们显示 2，然后将 13 移到底部。牌组现在是 [3,11,5,17,7,13]。\n' +
          '我们显示 3，并将 11 移到底部。牌组现在是 [5,17,7,13,11]。\n' +
          '我们显示 5，然后将 17 移到底部。牌组现在是 [7,13,11,17]。\n' +
          '我们显示 7，并将 13 移到底部。牌组现在是 [11,17,13]。\n' +
          '我们显示 11，然后将 17 移到底部。牌组现在是 [13,17]。\n' +
          '我们展示 13，然后将 17 移到底部。牌组现在是 [17]。\n' +
          '我们显示 17。\n' +
          '由于所有卡片都是按递增顺序排列显示的，所以答案是正确的。\n',
        val02: ' var deckRevealedIncreasing = function(deck) {\n' +
          '    var array = [];\n' +
          '\n' +
          '    //倒序\n' +
          '    for (let i = 0; i < deck.length; i++) {\n' +
          '      for (let j = i+1; j < deck.length; j++) {\n' +
          '        var t = [];\n' +
          '        if (deck[i] < deck[j]) {\n' +
          '          t = deck[i];\n' +
          '          deck[i] = deck[j];\n' +
          '          deck[j] = t;\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '\n' +
          '    //递增顺序显示卡牌\n' +
          '    array[0] = deck[0];\n' +
          '    for (let i = 1; i < deck.length; i++) {\n' +
          '      if(i===1){\n' +
          '        array.splice(0,0,deck[i])\n' +
          '      }else{\n' +
          '        array.splice(0,0,deck[i])\n' +
          '        var t = array[array.length-1];\n' +
          '        array.splice(array.length-1,1);\n' +
          '        array.splice(1,0,t);\n' +
          '      }\n' +
          '    }\n' +
          '    return array;\n' +
          '  };',
        str1: '[17,13,11,2,3,5,7]',
        str2: '',
      }
    },
    methods: {
      commitStr () {
        var deck = this.str1.replace("[","").replace("]","").trim().split(",");
        for(var i = 0; i < deck.length; i++){
          deck[i] = parseInt(deck[i]);
        }
        this.str2 = "["+deckRevealedIncreasing(deck).join(",")+"]";
      },
      cleanCode () {
        this.str1 = '';
        this.str2 = '';
      }
    },
  }

</script>
<style>
  @c DisplayCardsInIncrementalOrder {
    @d wrap {
      p{
        text-align: center;
      }
    }
  }
</style>
