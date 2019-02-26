<template lang="jade">
  -var c = 'x-address'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group
      x-address(@on-hide="logHide", @on-show="logShow", :title="title", v-model="value", :list="addressData", @on-shadow-change="onShadowChange", placeholder="请选择地址", inline-desc="可以设置placeholder", :show.sync="showAddress")
      cell(title="上面value值", :value="value")

    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    x-button(mini, plain, @click.native="copyCode02()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Group, XAddress, ChinaAddressV4Data, XButton, Cell, Value2nameFilter as value2name } from 'vux';
  export default {
    components: {  Group, XAddress, XButton, Cell },
    data() {
      return {
        tempCode: '',
        title: '默认为空',
        value_0_1: [],
        value: [],
        title2: '设置值',
        value2: ['天津市', '市辖区', '和平区'],
        value3: ['广东省', '中山市', '--'],
        addressData: ChinaAddressV4Data,
        value4: [],
        value5: ['广东省', '深圳 市', '南山区'],
        showAddress: false
      }
    },
    methods: {
      doShowAddress () {
        this.showAddress = true
        setTimeout(() => {
          this.showAddress = false
        }, 2000)
      },
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      changeData () {
        this.value2 = ['430000', '430400', '430407']
      },
      changeDataByLabels () {
        this.value2 = ['广东省', '广州市', '天河区']
      },
      changeDataByLabels2 () {
        this.value2 = ['广东省', '中山市', '--']
      },
      getName (value) {
        return value2name(value, ChinaAddressV4Data)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
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
        this.tempCode = 'group\n' +
          '      x-address(@on-hide="logHide", @on-show="logShow", :title="title", v-model="value", :list="addressData", @on-shadow-change="onShadowChange", placeholder="请选择地址", inline-desc="可以设置placeholder", :show.sync="showAddress")\n' +
          '      cell(title="上面value值", :value="value")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = ' import { Group, XAddress, ChinaAddressV4Data, XButton, Cell, Value2nameFilter as value2name } from \'vux\';\n' +
          '  export default {\n' +
          '    components: {  Group, XAddress, XButton, Cell },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        title: \'默认为空\',\n' +
          '        value_0_1: [],\n' +
          '        value: [],\n' +
          '        title2: \'设置值\',\n' +
          '        value2: [\'天津市\', \'市辖区\', \'和平区\'],\n' +
          '        value3: [\'广东省\', \'中山市\', \'--\'],\n' +
          '        addressData: ChinaAddressV4Data,\n' +
          '        value4: [],\n' +
          '        value5: [\'广东省\', \'深圳 市\', \'南山区\'],\n' +
          '        showAddress: false\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      doShowAddress () {\n' +
          '        this.showAddress = true\n' +
          '        setTimeout(() => {\n' +
          '          this.showAddress = false\n' +
          '        }, 2000)\n' +
          '      },\n' +
          '      onShadowChange (ids, names) {\n' +
          '        console.log(ids, names)\n' +
          '      },\n' +
          '      changeData () {\n' +
          '        this.value2 = [\'430000\', \'430400\', \'430407\']\n' +
          '      },\n' +
          '      changeDataByLabels () {\n' +
          '        this.value2 = [\'广东省\', \'广州市\', \'天河区\']\n' +
          '      },\n' +
          '      changeDataByLabels2 () {\n' +
          '        this.value2 = [\'广东省\', \'中山市\', \'--\']\n' +
          '      },\n' +
          '      getName (value) {\n' +
          '        return value2name(value, ChinaAddressV4Data)\n' +
          '      },\n' +
          '      logHide (str) {\n' +
          '        console.log(\'on-hide\', str)\n' +
          '      },\n' +
          '      logShow (str) {\n' +
          '        console.log(\'on-show\')\n' +
          '      },\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c x-address {
    @d wrap {

    }
  }
</style>
