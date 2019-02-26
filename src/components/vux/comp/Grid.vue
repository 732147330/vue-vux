<template lang="jade">
  -var c = 'grid'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group-title 2 columns
    grid
      grid-item(label="九宫格", v-for="i in 2", :key="i")
        img(slot="icon", src="../../../assets/img/logo.png")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group-title 3 columns
      grid(:show-lr-borders="false", :show-vertical-dividers="false")
        grid-item(link="/vux/comp/cell", label="跳转到Cell")
          img(slot="icon", src="../../../assets/img/logo.png")
        grid-item(:link="{ path: '/component/cell'}", label="跳转到Cell")
          img(slot="icon", src="../../../assets/img/logo.png")
        grid-item(link="/vux/comp/cell", @on-item-click="onItemClick")
          img(slot="icon", src="../../../assets/img/logo.png")
          span(slot="label") 跳转到Cell
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br


    group-title 4 columns
      grid(:show-lr-borders="false")
        grid-item(label="九宫格", v-for="i in 4", :key="i")
          img(slot="icon", src="../../../assets/img/logo.png")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group-title  自定义内容
      grid(:show-vertical-dividers="false")
        grid-item(v-for="i in 5", :key="i")
          span(class="grid-center") {{i}}
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group-title  自定义列
      grid(:cols="3", :show-lr-borders="false")
        grid-item(v-for="i in 6", :key="i")
          span(class="grid-center") {{i}}

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode07()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Grid, GridItem, GroupTitle, XButton } from 'vux';
  export default {
    components: { Grid, GridItem, GroupTitle, XButton },
    data() {
      return {
        tempCode: '',
      }
    },
    methods: {
      onItemClick () {
        console.log('on item click')
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
        this.tempCode = 'group-title 2 columns\n' +
          '    grid\n' +
          '      grid-item(label="九宫格", v-for="i in 2", :key="i")\n' +
          '        img(slot="icon", src="../assets/grid_icon.png")\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode =    '    group-title 3 columns\n' +
          '      grid(:show-lr-borders="false", :show-vertical-dividers="false")\n' +
          '        grid-item(link="/vux/comp/cell", label="跳转到Cell")\n' +
          '          img(slot="icon", src="../assets/grid_icon.png")\n' +
          '        grid-item(:link="{ path: \'/component/cell\'}", label="跳转到Cell")\n' +
          '          img(slot="icon", src="../assets/grid_icon.png")\n' +
          '        grid-item(link="/vux/comp/cell", @on-item-click="onItemClick")\n' +
          '          img(slot="icon", src="../assets/grid_icon.png")\n' +
          '          span(slot="label") 跳转到Cell\n' +
          '    br\n' ;
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode =    '    group-title 4 columns\n' +
          '      grid(:show-lr-borders="false")\n' +
          '        grid-item(label="九宫格", v-for="i in 4", :key="i")\n' +
          '          img(slot="icon", src="../assets/grid_icon.png")\n' +
          '    br\n';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode =  '    group-title  自定义内容\n' +
          '      grid(:show-vertical-dividers="false")\n' +
          '        grid-item(v-for="i in 5", :key="i")\n' +
          '          span(class="grid-center") {{i}}\n' +
          '    br\n'  ;
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode =  '    group-title  自定义列\n' +
          '      grid(:cols="3", :show-lr-borders="false")\n' +
          '        grid-item(v-for="i in 6", :key="i")\n' +
          '          span(class="grid-center") {{i}}';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = ' import { Grid, GridItem, GroupTitle, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Grid, GridItem, GroupTitle, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onItemClick () {\n' +
          '        console.log(\'on item click\')\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '.grid-center {\n' +
          '  display: block;\n' +
          '  text-align: center;\n' +
          '  color: #666;\n' +
          '}\n' +
          '.weui-grids {\n' +
          '  background-color: #fff;\n' +
          '}';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c grid {
    @d wrap {
      .grid-center {
        display: block;
        text-align: center;
        color: #666;
      }
      .weui-grids {
        background-color: #fff;
      }
    }
  }
</style>
