<template lang="jade">
  -var c = 'rater'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="Normal Usage")
      cell(title="set default score = 5", inline-desc="total 5 stars if not specified")
        rater(v-model="data3")
      cell(title="change color")
        rater(v-model="data3", :max="6", active-color="#04BE02")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码
    br

    group(title="disabled = true")
      cell(title="Your history score")
        rater(v-model="data4", disabled)
      cell(:title="'Decimal score ' + data41 ")
        rater(v-model="data41", active-color="#04BE02", disabled)
      cell(title="custom font-size(15px)")
        rater(v-model="data42", active-color="#04BE02", :font-size="15", disabled)
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码
    br

    group(title="custom star, some symbols like ♥ ❤ are not proper.")
      cell(title="loving")
        rater(v-model="data4", star="♡", active-color="red", :margin="15")
      cell(title="Use html")
        rater(v-model="data41", star="<span>X</span>", active-color="red", :margin="15")
      cell(title="Sunshine")
        rater(v-model="data5", star="☼", active-color="#FF9900", :margin="4")
      cell(title="Smilies")
        rater(v-model="data5", star="☻", active-color="#FF9900", :margin="4")
      cell(title="Different stars")
        rater(v-model="data5", star="✩", active-color="#FF9900", :margin="4")
      cell(title="How embarrass")
        rater(v-model="data5", star="囧", active-color="#FF9900", :margin="4")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码
    br

    group(title="two way binding")
      cell(title="Your history score")
        rater(v-model="data6", active-color="#04BE02")
      cell(title="range", primary="content", :inline-desc="data6 + ''")
        range(v-model="data6", :step="1", :min="0", :max="5")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="set min")
      cell(title="min = 3")
        rater(v-model="data7", :min="3")

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Rater, Group, Cell, Range, XButton } from 'vux';
  export default {
    components: { Rater, Group, Cell, Range, XButton },
    data() {
      return {
        tempCode: '',
        data1: 0,
        data2: 5,
        data3: '5',
        data4: 3,
        data41: 3.7,
        data42: 3.5,
        data5: 3,
        data6: 3,
        data7: 0
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
        this.tempCode = '    group(title="Normal Usage")\n' +
          '      cell(title="set default score = 5", inline-desc="total 5 stars if not specified")\n' +
          '        rater(v-model="data3")\n' +
          '      cell(title="change color")\n' +
          '        rater(v-model="data3", :max="6", active-color="#04BE02")';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  group(title="disabled = true")\n' +
          '      cell(title="Your history score")\n' +
          '        rater(v-model="data4", disabled)\n' +
          '      cell(:title="\'Decimal score \' + data41 ")\n' +
          '        rater(v-model="data41", active-color="#04BE02", disabled)\n' +
          '      cell(title="custom font-size(15px)")\n' +
          '        rater(v-model="data42", active-color="#04BE02", :font-size="15", disabled)';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '  group(title="custom star, some symbols like ♥ ❤ are not proper.")\n' +
          '      cell(title="loving")\n' +
          '        rater(v-model="data4", star="♡", active-color="red", :margin="15")\n' +
          '      cell(title="Use html")\n' +
          '        rater(v-model="data41", star="<span>X</span>", active-color="red", :margin="15")\n' +
          '      cell(title="Sunshine")\n' +
          '        rater(v-model="data5", star="☼", active-color="#FF9900", :margin="4")\n' +
          '      cell(title="Smilies")\n' +
          '        rater(v-model="data5", star="☻", active-color="#FF9900", :margin="4")\n' +
          '      cell(title="Different stars")\n' +
          '        rater(v-model="data5", star="✩", active-color="#FF9900", :margin="4")\n' +
          '      cell(title="How embarrass")\n' +
          '        rater(v-model="data5", star="囧", active-color="#FF9900", :margin="4") ';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group(title="two way binding")\n' +
          '      cell(title="Your history score")\n' +
          '        rater(v-model="data6", active-color="#04BE02")\n' +
          '      cell(title="range", primary="content", :inline-desc="data6 + \'\'")\n' +
          '        range(v-model="data6", :step="1", :min="0", :max="5")';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  group(title="set min")\n' +
          '      cell(title="min = 3")\n' +
          '        rater(v-model="data7", :min="3")';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = ' import { Rater, Group, Cell, Range, XButton } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { Rater, Group, Cell, Range, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        data1: 0,\n' +
          '        data2: 5,\n' +
          '        data3: \'5\',\n' +
          '        data4: 3,\n' +
          '        data41: 3.7,\n' +
          '        data42: 3.5,\n' +
          '        data5: 3,\n' +
          '        data6: 3,\n' +
          '        data7: 0\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c rater {
    @d wrap {

    }
  }
</style>
