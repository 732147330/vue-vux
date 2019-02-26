<template lang="jade">
  -var c = 'wechat-emotion'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    divider 微信表情列表
    div(v-for="item in list", class="vux-center-h")
      emotion {{item}}
      emotion(is-gif) {{item}}

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { WechatEmotion as Emotion, Divider, XButton } from 'vux';
  export default {
    components: { Emotion, Divider, XButton },
    data() {
      return {
        tempCode: '',
        list: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
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
        this.tempCode = 'divider 微信表情列表\n' +
          '    div(v-for="item in list", class="vux-center-h")\n' +
          '      emotion {{item}}\n' +
          '      emotion(is-gif) {{item}}';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { WechatEmotion as Emotion, Divider, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Emotion, Divider, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        list: [\'微笑\', \'撇嘴\', \'色\', \'发呆\', \'得意\', \'流泪\', \'害羞\', \'闭嘴\', \'睡\', \'大哭\', \'尴尬\', \'发怒\', \'调皮\', \'呲牙\', \'惊讶\', \'难过\', \'酷\', \'冷汗\', \'抓狂\', \'吐\', \'偷笑\', \'可爱\', \'白眼\', \'傲慢\', \'饥饿\', \'困\', \'惊恐\', \'流汗\', \'憨笑\', \'大兵\', \'奋斗\', \'咒骂\', \'疑问\', \'嘘\', \'晕\', \'折磨\', \'衰\', \'骷髅\', \'敲打\', \'再见\', \'擦汗\', \'抠鼻\', \'鼓掌\', \'糗大了\', \'坏笑\', \'左哼哼\', \'右哼哼\', \'哈欠\', \'鄙视\', \'委屈\', \'快哭了\', \'阴险\', \'亲亲\', \'吓\', \'可怜\', \'菜刀\', \'西瓜\', \'啤酒\', \'篮球\', \'乒乓\', \'咖啡\', \'饭\', \'猪头\', \'玫瑰\', \'凋谢\', \'示爱\', \'爱心\', \'心碎\', \'蛋糕\', \'闪电\', \'炸弹\', \'刀\', \'足球\', \'瓢虫\', \'便便\', \'月亮\', \'太阳\', \'礼物\', \'拥抱\', \'强\', \'弱\', \'握手\', \'胜利\', \'抱拳\', \'勾引\', \'拳头\', \'差劲\', \'爱你\', \'NO\', \'OK\', \'爱情\', \'飞吻\', \'跳跳\', \'发抖\', \'怄火\', \'转圈\', \'磕头\', \'回头\', \'跳绳\', \'挥手\', \'激动\', \'街舞\', \'献吻\', \'左太极\', \'右太极\']\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }\n';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c wechat-emotion {
    @d wrap {

    }
  }
</style>
