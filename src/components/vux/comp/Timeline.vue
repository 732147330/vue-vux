<template lang="jade">
  -var c = 'timeline'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    //color  竖条颜色(默认绿色)
    //isShowIcon 是否显示icon（一个勾）
    timeline(:color="color", :isShowIcon="ShowIcon",id="code01")
      timeline-item
        h4(class="recent") 【广东】 广州市 已发出
        p(class="recent") 2016-04-17 12:00:00
      timeline-item
        h4 申通快递员 广东广州 收件员 xxx 已揽件
        p 2016-04-16 10:23:00
      timeline-item
        h4 商家正在通知快递公司揽件
        p 2016-04-15 9:00:00
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, type="warn", @click.native="copyCode00()") 复制css代码

    timeline
      timeline-item(v-for="(i, index) in count", :key="index")
        h4(:class="[i === 0 ? 'recent' : '']") Timeline Node {{i + 1}}
        p(:class="[i === 0 ? 'recent' : '']") index {{i + 1}}
    x-button(type="primary", @click.native="count = 6") Set to 6 nodes
    x-button(type="primary", @click.native="count = 3") Set to 3 nodes

    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    x-button(mini, plain, type="warn", @click.native="copyCode00()") 复制css代码
    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Timeline, TimelineItem, XButton } from "vux";
  export default {
    components: { TimelineItem, Timeline, XButton },
    data() {
      return {
        color: '#FE9701',
        ShowIcon: true,
        count: 3,
        tempCode: '',
      }
    },
    methods: {
      copyCode01 () {
        this.tempCode = '  timeline(:color="color", :isShowIcon="ShowIcon",id="code01")\n' +
          '      timeline-item\n' +
          '        h4(class="recent") 【广东】 广州市 已发出\n' +
          '        p(class="recent") 2016-04-17 12:00:00\n' +
          '      timeline-item\n' +
          '        h4 申通快递员 广东广州 收件员 xxx 已揽件\n' +
          '        p 2016-04-16 10:23:00\n' +
          '      timeline-item\n' +
          '        h4 商家正在通知快递公司揽件\n' +
          '        p 2016-04-15 9:00:00';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  timeline\n' +
          '      timeline-item(v-for="(i, index) in count", :key="index")\n' +
          '        h4(:class="[i === 0 ? \'recent\' : \'\']") Timeline Node {{i + 1}}\n' +
          '        p(:class="[i === 0 ? \'recent\' : \'\']") index {{i + 1}}\n' +
          '    x-button(type="primary", @click.native="count = 6") Set to 6 nodes\n' +
          '    x-button(type="primary", @click.native="count = 3") Set to 3 nodes\n ' +
          '\n' +
          '<script>\n' +
          '  import { Timeline, TimelineItem, XButton } from \"vux\";\n' +
          '  export default {\n' +
          '    components: { TimelineItem, Timeline, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        color: \'#FE9701\',\n' +
          '        ShowIcon: true,\n' +
          '        count: 3,\n' +
          '      }\n' +
          '    },\n' +
          '  }\n' +
          '<\/script>';
        this.copyCodeMethod();
      },
      copyCode00 () {
        this.tempCode =
          '      ul li {\n' +
          '        margin: 0px !important;\n' +
          '        padding: 0px !important;\n' +
          '      }\n' +
          '      p {\n' +
          '        color: #888;\n' +
          '        font-size: 0.8rem;\n' +
          '      }\n' +
          '      h4 {\n' +
          '        color: #666;\n' +
          '        font-weight: normal;\n' +
          '        margin-top: 0px;\n' +
          '        margin-bottom: 0px;\n' +
          '      }\n' +
          '      .recent {\n' +
          '        color: rgb(4, 190, 2)\n' +
          '      }\n' +
          '    }\n' +
          '  }\n';
        this.copyCodeMethod();
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
    },
  }



</script>

<style>
  @c timeline {
    @d wrap {
      ul li {
        margin: 0px !important;
        padding: 0px !important;
      }
      p {
        color: #888;
        font-size: 0.8rem;
      }
      h4 {
        color: #666;
        font-weight: normal;
        margin-top: 0px;
        margin-bottom: 0px;
      }
      .recent {
        color: rgb(4, 190, 2)
      }
    }
  }
</style>
