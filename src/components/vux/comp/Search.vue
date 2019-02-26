<template lang="jade">
  -var c = 'search'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    img(src="https://ws1.sinaimg.cn/large/663d3650gy1fq685v5csyj208c06ygm0.jpg", style="width: 100%")
    search(@result-click="resultClick", @on-change="getResult", :results="results", v-model="value", position="absolute", auto-scroll-to-top, top="46px", @on-focus="onFocus", @on-cancel="onCancel", @on-submit="onSubmit", ref="search")
    group
      cell(title="keyword") {{ value }}

    div(style="padding:15px;")
      x-button(@click.native="setFocus", type="primary") set focus
    group
      cell(title="static position demo", is-link, link="#")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码


    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Search, Group, Cell, XButton } from 'vux';

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }

  export default {
    components: { Search, Group, Cell, XButton },
    data() {
      return {
        tempCode: '',
        results: [],
        value: 'test'
      }
    },
    methods: {
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
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
        this.tempCode = '   img(src="https://ws1.sinaimg.cn/large/663d3650gy1fq685v5csyj208c06ygm0.jpg", style="width: 100%")\n' +
          '    search(@result-click="resultClick", @on-change="getResult", :results="results", v-model="value", position="absolute", auto-scroll-to-top, top="46px", @on-focus="onFocus", @on-cancel="onCancel", @on-submit="onSubmit", ref="search")\n' +
          '    group\n' +
          '      cell(title="keyword") {{ value }}\n' +
          '\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(@click.native="setFocus", type="primary") set focus\n' +
          '    group\n' +
          '      cell(title="static position demo", is-link, link="/component/search-static") ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  import { Search, Group, Cell, XButton } from \'vux\';\n' +
          '\n' +
          '  function getResult (val) {\n' +
          '    let rs = []\n' +
          '    for (let i = 0; i < 20; i++) {\n' +
          '      rs.push({\n' +
          '        title: `${val} result: ${i + 1} `,\n' +
          '        other: i\n' +
          '      })\n' +
          '    }\n' +
          '    return rs\n' +
          '  }\n' +
          '\n' +
          '  export default {\n' +
          '    components: { Search, Group, Cell, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        results: [],\n' +
          '        value: \'test\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      setFocus () {\n' +
          '        this.$refs.search.setFocus()\n' +
          '      },\n' +
          '      resultClick (item) {\n' +
          '        window.alert(\'you click the result item: \' + JSON.stringify(item))\n' +
          '      },\n' +
          '      getResult (val) {\n' +
          '        console.log(\'on-change\', val)\n' +
          '        this.results = val ? getResult(this.value) : []\n' +
          '      },\n' +
          '      onSubmit () {\n' +
          '        this.$refs.search.setBlur()\n' +
          '        this.$vux.toast.show({\n' +
          '          type: \'text\',\n' +
          '          position: \'top\',\n' +
          '          text: \'on submit\'\n' +
          '        })\n' +
          '      },\n' +
          '      onFocus () {\n' +
          '        console.log(\'on focus\')\n' +
          '      },\n' +
          '      onCancel () {\n' +
          '        console.log(\'on cancel\')\n' +
          '      },\n' +
          '    }\n' +
          '  } ';
        this.copyCodeMethod();
      }
    }
  }

</script>

<style>
  @c search {
    @d wrap {
    }
  }
</style>
