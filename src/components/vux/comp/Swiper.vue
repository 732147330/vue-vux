<template lang="jade">
  -var c = 'swiper'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group-title THX to: https://github.com/wechatui/swiper
    group-title list模式下，默认高度为180px, 如果设置aspect-ratio会根据宽度自动计算高度
    swiper(:list="demo01_list", v-model="demo01_index", @on-index-change="demo01_onIndexChange")
    p(class="copyright") Image Source: http://www.gratisography.com/
    p current index: {{demo01_index}}
    x-button(@click.native="demo01_index = 0") go to 0
    x-button(@click.native="demo01_index = 1") go to 1
    x-button(@click.native="demo01_index = 2") go to 2
    br
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    divider 华丽的分割线
    group-title 设置min-moving-distance为120
    swiper(:list="demo01_list", v-model="demo02_index", :min-moving-distance="120", @on-index-change="demo01_onIndexChange")
    br
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    divider 华丽的分割线
    group-title 设置aspect-ratio, 将自动根据宽度计算高度
    swiper(:list="demo02_list", style="width:85%;margin:0 auto;", :aspect-ratio="300/800", dots-position="center")
    br
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    divider 华丽的分割线
    group-title 自动轮播
    swiper(:list="demo03_list", auto style="width:80%;margin:0 auto;", height="180px", dots-class="custom-bottom", dots-position="center")
    br
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    divider 华丽的分割线
    group-title use swiper-item for image list
    swiper(:aspect-ratio="300/800")
      swiper-item(class="swiper-demo-img", v-for="(item, index) in demo04_list", :key="index")
        img(:src="item")
    br
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码

    group-title set index = 1 with swiper-item
    swiper(:aspect-ratio="300/800", @on-index-change="onSwiperItemIndexChange", v-model="swiperItemIndex")
      swiper-item(class="swiper-demo-img", v-for="(item, index) in demo04_list", :key="index")
        img(:src="item")
    br
    | {{ swiperItemIndex }}
    br
    x-button(@click.native="swiperItemIndex = 0") go to 0
    x-button(@click.native="swiperItemIndex = 1") go to 1
    x-button(@click.native="swiperItemIndex = 2") go to 2
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码
    br

    divider 华丽的分割线
    group-title Async setting list data
    swiper(:list="demo05_list", auto height="180px", @on-index-change="demo05_onIndexChange")
    p  current index: {{demo05_index}}
    x-button(@click.native="demo05_onLoad(1)", type="primary", style="margin: 10px 0;") Load list1
    x-button(@click.native="demo05_onLoad(2)", type="primary", style="margin: 10px 0;") Load list2
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码
    br

    divider 华丽的分割线
    group-title 引入swiper-item自定义item内容，用height定义高度
    swiper(auto height="100px")
      swiper-item(class="black")
        h2(class="title fadeInUp animated") 它无孔不入
      swiper-item(class="black")
        h2(class="title fadeInUp animated") 你无处可藏
      swiper-item(class="black")
        h2(class="title fadeInUp animated") 不是它可恶
      swiper-item(class="black")
        h2(class="title fadeInUp animated") 而是它不懂你
      swiper-item(class="black")
        h2(class="title fadeInUp animated") 我们试图
      swiper-item(class="black")
        h2(class="title fadeInUp animated") 做些改变
    br
    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码
    br

    divider 华丽的分割线
    group-title 垂直方向文字滚动
    swiper(auto, height="50px", direction="vertical", :interval=2000 class="text-scroll", :show-dots="false")
      swiper-item
        p 义务爱了 完成传奇世界H5-王者归来任务 获得20金币
      swiper-item
        p 基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币
      swiper-item
        p 零哥章魚 完成传奇世界H5-王者归来任务 获得30金币
      swiper-item
        p 做迎而為 兑换【饿了么】畅享美食红包 消耗20金币
      swiper-item
        p 只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币
      swiper-item
        p 基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币
    br
    x-button(mini, plain, type="primary", @click.native="copyCode09()") 复制代码
    br

    divider 华丽的分割线
    group-title 循环模式
    swiper(loop auto :list="demo06_list", :index="demo06_index", @on-index-change="demo06_onIndexChange")
    p current index: {{demo06_index}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode10()") 复制代码

    group-title 循环模式（只有两个且可点击）
    swiper(loop auto :list="demo07_list", :index="demo07_index", @on-index-change="demo07_onIndexChange")
    p current index: {{demo07_index}}
    br

    x-button(mini, plain, type="primary", @click.native="copyCode11()") 复制代码
    x-button(mini, plain, @click.native="copyCode12()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode13()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux';

  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]

  const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ]

  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`
  }))

  const demoList = imgList.map((one, index) => ({
    url: 'javascript:',
    img: one
  }))

  const only2ClickList = baseList.slice(0, 2).map(item => {
    item.url = 'http://m.baidu.com'
    return item
  })

  export default {
    components: { Swiper, GroupTitle, SwiperItem, XButton, Divider },
    data() {
      return {
        tempCode: '',
        demo01_list: baseList,
        demo02_list: demoList,
        demo03_list: demoList,
        demo04_list: imgList,
        demo05_list: [],
        demo06_list: urlList,
        demo07_list: only2ClickList,
        demo01_index: 0,
        demo02_index: 1,
        demo05_index: 0,
        demo06_index: 0,
        demo07_index: 0,
        swiperItemIndex: 1
      }
    },
    methods: {
      onSwiperItemIndexChange (index) {
        console.log('demo item change', index)
      },
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
      demo05_onIndexChange (index) {
        this.demo05_index = index
      },
      demo05_onLoad (id) {
        this.demo05_list = id === 1 ? baseList : demoList
      },
      demo06_onIndexChange (index) {
        this.demo06_index = index
      },
      demo07_onIndexChange (index) {
        this.demo07_index = index
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
        this.tempCode = '   group-title THX to: https://github.com/wechatui/swiper\n' +
          '    group-title list模式下，默认高度为180px, 如果设置aspect-ratio会根据宽度自动计算高度\n' +
          '    swiper(:list="demo01_list", v-model="demo01_index", @on-index-change="demo01_onIndexChange")\n' +
          '    p(class="copyright") Image Source: http://www.gratisography.com/\n' +
          '    p current index: {{demo01_index}}\n' +
          '    x-button(@click.native="demo01_index = 0") go to 0\n' +
          '    x-button(@click.native="demo01_index = 1") go to 1\n' +
          '    x-button(@click.native="demo01_index = 2") go to 2';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  group-title 设置min-moving-distance为120\n' +
          '    swiper(:list="demo01_list", v-model="demo02_index", :min-moving-distance="120", @on-index-change="demo01_onIndexChange")';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  group-title 设置aspect-ratio, 将自动根据宽度计算高度\n' +
          '    swiper(:list="demo02_list", style="width:85%;margin:0 auto;", :aspect-ratio="300/800", dots-position="center")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group-title 自动轮播\n' +
          '    swiper(:list="demo03_list", auto style="width:80%;margin:0 auto;", height="180px", dots-class="custom-bottom", dots-position="center")';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '    group-title use swiper-item for image list\n' +
          '    swiper(:aspect-ratio="300/800")\n' +
          '      swiper-item(class="swiper-demo-img", v-for="(item, index) in demo04_list", :key="index")\n' +
          '        img(:src="item")';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '   group-title set index = 1 with swiper-item\n' +
          '    swiper(:aspect-ratio="300/800", @on-index-change="onSwiperItemIndexChange", v-model="swiperItemIndex")\n' +
          '      swiper-item(class="swiper-demo-img", v-for="(item, index) in demo04_list", :key="index")\n' +
          '        img(:src="item")\n' +
          '    br\n' +
          '    | {{ swiperItemIndex }}\n' +
          '    br\n' +
          '    x-button(@click.native="swiperItemIndex = 0") go to 0\n' +
          '    x-button(@click.native="swiperItemIndex = 1") go to 1\n' +
          '    x-button(@click.native="swiperItemIndex = 2") go to 2';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '     group-title Async setting list data\n' +
          '    swiper(:list="demo05_list", auto height="180px", @on-index-change="demo05_onIndexChange")\n' +
          '    p  current index: {{demo05_index}}\n' +
          '    x-button(@click.native="demo05_onLoad(1)", type="primary", style="margin: 10px 0;") Load list1\n' +
          '    x-button(@click.native="demo05_onLoad(2)", type="primary", style="margin: 10px 0;") Load list2';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '    group-title 引入swiper-item自定义item内容，用height定义高度\n' +
          '    swiper(auto height="100px")\n' +
          '      swiper-item(class="black")\n' +
          '        h2(class="title fadeInUp animated") 它无孔不入\n' +
          '      swiper-item(class="black")\n' +
          '        h2(class="title fadeInUp animated") 你无处可藏\n' +
          '      swiper-item(class="black")\n' +
          '        h2(class="title fadeInUp animated") 不是它可恶\n' +
          '      swiper-item(class="black")\n' +
          '        h2(class="title fadeInUp animated") 而是它不懂你\n' +
          '      swiper-item(class="black")\n' +
          '        h2(class="title fadeInUp animated") 我们试图\n' +
          '      swiper-item(class="black")\n' +
          '        h2(class="title fadeInUp animated") 做些改变';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = '    group-title 垂直方向文字滚动\n' +
          '    swiper(auto, height="50px", direction="vertical", :interval=2000 class="text-scroll", :show-dots="false")\n' +
          '      swiper-item\n' +
          '        p 义务爱了 完成传奇世界H5-王者归来任务 获得20金币\n' +
          '      swiper-item\n' +
          '        p 基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币\n' +
          '      swiper-item\n' +
          '        p 零哥章魚 完成传奇世界H5-王者归来任务 获得30金币\n' +
          '      swiper-item\n' +
          '        p 做迎而為 兑换【饿了么】畅享美食红包 消耗20金币\n' +
          '      swiper-item\n' +
          '        p 只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币\n' +
          '      swiper-item\n' +
          '        p 基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode = '  group-title 循环模式\n' +
          '    swiper(loop auto :list="demo06_list", :index="demo06_index", @on-index-change="demo06_onIndexChange")\n' +
          '    p current index: {{demo06_index}}';
        this.copyCodeMethod();
      },
      copyCode11 () {
        this.tempCode = '   group-title 循环模式（只有两个且可点击）\n' +
          '    swiper(loop auto :list="demo07_list", :index="demo07_index", @on-index-change="demo07_onIndexChange")\n' +
          '    p current index: {{demo07_index}} ';
        this.copyCodeMethod();
      },
      copyCode12 () {
        this.tempCode = '   import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from \'vux\';\n' +
          '\n' +
          '  const baseList = [{\n' +
          '    url: \'javascript:\',\n' +
          '    img: \'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg\',\n' +
          '    title: \'送你一朵fua\'\n' +
          '  }, {\n' +
          '    url: \'javascript:\',\n' +
          '    img: \'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg\',\n' +
          '    title: \'送你一辆车\'\n' +
          '  }, {\n' +
          '    url: \'javascript:\',\n' +
          '    img: \'https://static.vux.li/demo/5.jpg\', // 404\n' +
          '    title: \'送你一次旅行\',\n' +
          '    fallbackImg: \'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg\'\n' +
          '  }]\n' +
          '\n' +
          '  const imgList = [\n' +
          '    \'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff\',\n' +
          '    \'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff\',\n' +
          '    \'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff\'\n' +
          '  ]\n' +
          '\n' +
          '  const urlList = baseList.map((item, index) => ({\n' +
          '    url: \'http://m.baidu.com\',\n' +
          '    img: item.img,\n' +
          '    fallbackImg: item.fallbackImg,\n' +
          '    title: `(可点击)${item.title}`\n' +
          '  }))\n' +
          '\n' +
          '  const demoList = imgList.map((one, index) => ({\n' +
          '    url: \'javascript:\',\n' +
          '    img: one\n' +
          '  }))\n' +
          '\n' +
          '  const only2ClickList = baseList.slice(0, 2).map(item => {\n' +
          '    item.url = \'http://m.baidu.com\'\n' +
          '    return item\n' +
          '  })\n' +
          '\n' +
          '  export default {\n' +
          '    components: { Swiper, GroupTitle, SwiperItem, XButton, Divider },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        demo01_list: baseList,\n' +
          '        demo02_list: demoList,\n' +
          '        demo03_list: demoList,\n' +
          '        demo04_list: imgList,\n' +
          '        demo05_list: [],\n' +
          '        demo06_list: urlList,\n' +
          '        demo07_list: only2ClickList,\n' +
          '        demo01_index: 0,\n' +
          '        demo02_index: 1,\n' +
          '        demo05_index: 0,\n' +
          '        demo06_index: 0,\n' +
          '        demo07_index: 0,\n' +
          '        swiperItemIndex: 1\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onSwiperItemIndexChange (index) {\n' +
          '        console.log(\'demo item change\', index)\n' +
          '      },\n' +
          '      demo01_onIndexChange (index) {\n' +
          '        this.demo01_index = index\n' +
          '      },\n' +
          '      demo05_onIndexChange (index) {\n' +
          '        this.demo05_index = index\n' +
          '      },\n' +
          '      demo05_onLoad (id) {\n' +
          '        this.demo05_list = id === 1 ? baseList : demoList\n' +
          '      },\n' +
          '      demo06_onIndexChange (index) {\n' +
          '        this.demo06_index = index\n' +
          '      },\n' +
          '      demo07_onIndexChange (index) {\n' +
          '        this.demo07_index = index\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode13 () {
        this.tempCode = '   .copyright {\n' +
          '        font-size: 12px;\n' +
          '        color: #ccc;\n' +
          '        text-align: center;\n' +
          '      }\n' +
          '      .text-scroll {\n' +
          '        border: 1px solid #ddd;\n' +
          '        border-left: none;\n' +
          '        border-right: none;\n' +
          '      }\n' +
          '      .text-scroll p{\n' +
          '        font-size: 12px;\n' +
          '        text-align: center;\n' +
          '        line-height: 10px;\n' +
          '      }\n' +
          '      .black {\n' +
          '        background-color: #000;\n' +
          '      }\n' +
          '      .title{\n' +
          '        line-height: 100px;\n' +
          '        text-align: center;\n' +
          '        color: #fff;\n' +
          '      }\n' +
          '      .animated {\n' +
          '        animation-duration: 1s;\n' +
          '        animation-fill-mode: both;\n' +
          '      }\n' +
          '      .vux-indicator.custom-bottom {\n' +
          '        bottom: 30px;\n' +
          '      }\n' +
          '      @-webkit-keyframes fadeInUp {\n' +
          '        from {\n' +
          '          opacity: 0;\n' +
          '          transform: translate3d(0, 100%, 0);\n' +
          '        }\n' +
          '        100% {\n' +
          '          opacity: 1;\n' +
          '          transform: none;\n' +
          '        }\n' +
          '      }\n' +
          '      @keyframes fadeInUp {\n' +
          '        from {\n' +
          '          opacity: 0;\n' +
          '          transform: translate3d(0, 100%, 0);\n' +
          '        }\n' +
          '        100% {\n' +
          '          opacity: 1;\n' +
          '          transform: none;\n' +
          '        }\n' +
          '      }\n' +
          '      .fadeInUp {\n' +
          '        animation-name: fadeInUp;\n' +
          '      }\n' +
          '      .swiper-demo-img img {\n' +
          '        width: 100%;\n' +
          '      }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style scoped>
  @c swiper {
    @d wrap {
      .copyright {
        font-size: 12px;
        color: #ccc;
        text-align: center;
      }
      .text-scroll {
        border: 1px solid #ddd;
        border-left: none;
        border-right: none;
      }
      .text-scroll p{
        font-size: 12px;
        text-align: center;
        line-height: 10px;
      }
      .black {
        background-color: #000;
      }
      .title{
        line-height: 100px;
        text-align: center;
        color: #fff;
      }
      .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
      }
      .vux-indicator.custom-bottom {
        bottom: 30px;
      }
      @-webkit-keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 100%, 0);
        }
        100% {
          opacity: 1;
          transform: none;
        }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 100%, 0);
        }
        100% {
          opacity: 1;
          transform: none;
        }
      }
      .fadeInUp {
        animation-name: fadeInUp;
      }
      .swiper-demo-img img {
        width: 100%;
      }
    }
  }
</style>
