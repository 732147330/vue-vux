<template lang="jade">
  -var c = 'timeline'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    //color  竖条颜色(默认绿色)
    //isShowIcon 是否显示icon（一个勾）
    timeline(:color="color", :isShowIcon="ShowIcon")
      timeline-item
        h4(class="recent") 【广东】 广州市 已发出
        p(class="recent") 2016-04-17 12:00:00
      timeline-item
        h4 申通快递员 广东广州 收件员 xxx 已揽件
        p 2016-04-16 10:23:00
      timeline-item
        h4 商家正在通知快递公司揽件
        p 2016-04-15 9:00:00
    timeline
      timeline-item(v-for="(i, index) in count", :key="index")
        h4(:class="[i === 0 ? 'recent' : '']") Timeline Node {{i + 1}}
        p(:class="[i === 0 ? 'recent' : '']") index {{i + 1}}
    x-button(type="primary", @click.native="count = 6") Set to 6 nodes
    x-button(type="primary", @click.native="count = 3") Set to 3 nodes
</template>

<script>
  import { Timeline, TimelineItem, XButton } from "vux";
  export default {
    components: { TimelineItem, Timeline, XButton },
    data() {
      return {
        color: '#FE9701',
        ShowIcon: true,
        count: 3
      }
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
