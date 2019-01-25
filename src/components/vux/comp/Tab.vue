<template lang="jade">
  -var c = 'buttonTab'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    tab
      tab-item(selected, @on-item-click="onItemClick") 已发货
      tab-item(@on-item-click="onItemClick") 未发货
      tab-item(@on-item-click="onItemClick") 全部订单
    br
    br
    tab(bar-position="top")
      tab-item(selected, @on-item-click="onItemClick") 已发货
      tab-item(@on-item-click="onItemClick") 未发货
      tab-item(@on-item-click="onItemClick") 全部订单
    br
    br
    divider 手动切换(加载)
    tab(v-model="index01", prevent-default, @on-before-index-change="switchTabItem")
      tab-item(selected) 已发货
      tab-item  未发货
      tab-item 全部订单
    br
    br
    divider 定义bar固定宽度
    tab(:line-width="1", custom-bar-width="60px")
      tab-item(selected) 已发货
      tab-item 未发货
      tab-item 全部订单
    br
    br
    divider 使用函数定义bar宽度
    tab(:line-width="1", :custom-bar-width="getBarWidth")
      tab-item(selected) AA
      tab-item AAAA
      tab-item AAAAAAA
    br
    br
    br
    divider 设置bar颜色
    tab(bar-active-color="#668599", :line-width="1")
      tab-item  已发货
      tab-item(selected) 未发货
      tab-item 全部订单
      tab-item 全部订单
      tab-item 全部订单
    br
    br
    br
    divider 不同种类状态
    tab(:animate="false")
      tab-item(active-class="active-6-1") 已发货
      tab-item(active-class="active-6-2", selected) 未发货
      tab-item(active-class="active-6-3") 全部订单
    br
    br
    br
    divider 没有动画效果
    tab(:animate="false")
      tab-item  已发货
      tab-item(selected)  未发货
      tab-item  全部订单
    br
    br
    br
    divider 无法选中
    tab
      tab-item(selected) A
      tab-item B
      tab-item(disabled) Disabled
    br
    br
    br
    divider 选项状态
    tab
      tab-item(selected, badge-label="1") 收到的消息
      tab-item(badge-background="#38C972", badge-color="#fff", badge-label="2") 发出的消息
    br
    br
    br
    divider 滚动效果
    tab
      tab-item(v-for="n in 8", :key="n", :selected="n===1") 已发货{{ n }}
    br
    br
    br
    divider 滚动门槛
    tab(:scroll-threshold="5")
      tab-item(v-for="n in 5", :key="n", :selected="n===1") 已发货{{ n }}
    br
    br
    br

    div
      tab(:line-width=2, active-color='#fc378c', v-model="index")
        tab-item(class="vux-center", :selected="demo2 === item", v-for="(item, index) in list2", @click="demo2 = item", :key="index") {{item}}
      swiper(v-model="index", height="100px", :show-dots="false")
        swiper-item(v-for="(item, index) in list2", :key="index")
          div(class="tab-swiper vux-center") {{item}} Container
    br
    div.box
      x-button(@click.native="index=0", :disabled="index === 0", type="primary") go to 0
      x-button(@click.native="index=1", :disabled="index === 1", type="primary") go to 1
      x-button(@click.native="addTab", :disabled="list2.length === 5", type="primary") Add tab item
      x-button(@click.native="removeTab", :disabled="list2.length <= 2", type="primary") Remove tab item
      x-button(@click.native="next", type="primary") 下一页  当前页: {{index}}
      x-button(@click.native="prev", type="primary") 上一页  当前页: {{index}}

    br
    br
    tab(:line-width="2")
      tab-item(:selected="demo3 === item", v-for="(item, index) in list3", :class="{'vux-1px-r': index===0}", @click="demo3 = item", :key="index") {{item}}
    br
    br
    br
    sticky(scroll-box="vux_view_box_body", :check-sticky-support="false", :offset="46")
      tab(:line-width=1)
        tab-item(:selected="demo4 === item", v-for="(item, index) in list4", @click="demo4 = item", :key="index") {{item}}

    br(v-for="i in 40")

</template>

<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
  const list = () => ['精选', '美食', '电影', '酒店', '外卖']
  export default {
    components:  { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem },
    methods: {
      switchTabItem (index) {
        console.log('on-before-index-change', index)
        this.$vux.loading.show({
          text: '加载中'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.index01 = index
        }, 1000)
      },
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    },
    data() {
      return {
        index01: 0,
        list2: list(),
        demo2: '美食',
        list3: ['收到的消息', '发出的消息'],
        demo3: '收到的消息',
        list4: ['正在放映', '即将上映'],
        demo4: '即将上映',
        demoDisabled: 'A',
        index: 0,
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        }
      }
    },
  }

</script>

<style lang="less">
  @import '../../../plugins/vux/src/styles/1px.less';
  @import '../../../plugins/vux/src/styles/center.less';

  /*@c buttonTab {*/
    /*@d wrap {*/
    /*}*/
  /*}*/

  .box {
    padding: 15px;
  }
  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }
  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }
  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
</style>
