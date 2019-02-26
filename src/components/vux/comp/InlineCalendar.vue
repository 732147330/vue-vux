<template lang="jade">
  -var c = 'inline-calendar'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    inline-calendar(ref="calendar", @on-change="onChange", @on-view-change="onViewChange", class="inline-calendar-demo", :show.sync="show", v-model="value", start-date="2016-04-01", end-date="2018-05-30", :range="range", :show-last-month="showLastMonth", :show-next-month="showNextMonth", :highlight-weekend="highlightWeekend", :return-six-rows="return6Rows", :hide-header="hideHeader", :hide-week-list="hideWeekList", :replace-text-list="replaceTextList", :weeks-list="weeksList", :render-function="buildSlotFn", :disable-past="disablePast", :disable-future="disableFuture", :disable-weekend="disableWeekend", :disable-date-function="disableDateFunction")
    group
      cell(title="选中值", :value="value")
      cell(title="开始日期", value="2016-04-01")
      cell(title="结束日期", value="2018-05-30")
    div(style="margin: 15px;")
      x-button(type="primary", @click.native="$refs.calendar.switchViewToToday()") switchViewToToday
      x-button(type="primary", @click.native="$refs.calendar.switchViewToMonth(2017, 12)") switchViewToMonth(2017, 12)
      x-button(type="primary", @click.native="$refs.calendar.switchViewToMonth(2018, 10)") switchViewToMonth(2018, 10)
      x-button(type="primary", @click.native="$refs.calendar.switchViewToCurrentValue()") switchViewToCurrentValue
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group(title="控制日期", style="margin-top: 30px;")
      x-switch(v-model="disablePast", title="禁止选择未来的日期")
      x-switch(v-model="disableFuture", title="禁止选择未来的时间")
      x-switch(v-model="disableWeekend", title="禁止选择周末日期")
      x-switch(v-model="showLastMonth", title="$显示上个月")
      x-switch(v-model="showNextMonth", title="显示下个月")
      x-switch(v-model="return6Rows", inline-desc="否则，日历的高度会发生改变", title="固定显示6行")
      x-switch(v-model="highlightWeekend", title="高亮周末")
      cell(title="选中值", :value="value")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    group(title="控制导航部分")
      x-switch(v-model="hideHeader", title="隐藏日历头部")
      x-switch(v-model="hideWeekList", title="隐藏星期列表")
      x-switch(v-model="changeWeeksList", title="切换星期列表")
    group(title="更换文本")
      x-switch(v-model="replace", title="替换日期文本")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    br
    div(style="margin: 15px;")
      x-button(type="primary", @click.native="value='2020-11-11'")  设置为 2020-11-11
      x-button(type="primary", @click.native="value='2020-11-22'")  设置为 2020-11-22
      x-button(type="primary", @click.native="value='2016-08-09'")  设置为 2016-08-09
      x-button(type="primary", @click.native="value='TODAY'")  设置为 today
      x-button(type="primary", @click.native="value='2016-06-05'")  设置为 2016-06-05
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码
    br

    group(title="自定义日期单元格")
      x-switch(v-model="useCustomFn", inline-desc="为带有数字8的日期添加红点", title="在日期单元格中添加自定义内容")
    br
    divider  按月份顺序渲染一系列日期
    group
      cell(title="选中值", :value="listValue")
    br

    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码
    x-button(mini, plain, @click.native="copyCode06()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode07()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { InlineCalendar, Group, XSwitch, Radio, XButton, Cell, Divider } from 'vux';
  export default {
    components: { InlineCalendar, Group, XSwitch, Radio, XButton, Cell, Divider },
    data() {
      return {
        tempCode: '',
        show: true,
        value: '',
        listValue: '',
        range: false,
        showLastMonth: true,
        showNextMonth: true,
        highlightWeekend: false,
        return6Rows: true,
        hideHeader: false,
        hideWeekList: false,
        replaceTextList: {},
        replace: false,
        changeWeeksList: false,
        weeksList: [],
        useCustomFn: false,
        buildSlotFn: () => '',
        disablePast: false,
        disableFuture: false,
        disableWeekend: false,
        disableDateFunction (date) {
          if (date.formatedDate === '2017-10-16') {
            return true
          }
        }
      }
    },
    methods: {
      onChange (val) {
        console.log('on-change', val)
      },
      onViewChange (val, count) {
        console.log('on view change', val, count)
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
        this.tempCode = '    inline-calendar(ref="calendar", @on-change="onChange", @on-view-change="onViewChange", class="inline-calendar-demo", :show.sync="show", v-model="value", start-date="2016-04-01", end-date="2018-05-30", :range="range", :show-last-month="showLastMonth", :show-next-month="showNextMonth", :highlight-weekend="highlightWeekend", :return-six-rows="return6Rows", :hide-header="hideHeader", :hide-week-list="hideWeekList", :replace-text-list="replaceTextList", :weeks-list="weeksList", :render-function="buildSlotFn", :disable-past="disablePast", :disable-future="disableFuture", :disable-weekend="disableWeekend", :disable-date-function="disableDateFunction")\n' +
          '    group\n' +
          '      cell(title="选中值", :value="value")\n' +
          '      cell(title="开始日期", value="2016-04-01")\n' +
          '      cell(title="结束日期", value="2018-05-30")\n' +
          '    div(style="margin: 15px;")\n' +
          '      x-button(type="primary", @click.native="$refs.calendar.switchViewToToday()") switchViewToToday\n' +
          '      x-button(type="primary", @click.native="$refs.calendar.switchViewToMonth(2017, 12)") switchViewToMonth(2017, 12)\n' +
          '      x-button(type="primary", @click.native="$refs.calendar.switchViewToMonth(2018, 10)") switchViewToMonth(2018, 10)\n' +
          '      x-button(type="primary", @click.native="$refs.calendar.switchViewToCurrentValue()") switchViewToCurrentValue ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '  group(title="控制日期", style="margin-top: 30px;")\n' +
          '      x-switch(v-model="disablePast", title="禁止选择未来的日期")\n' +
          '      x-switch(v-model="disableFuture", title="禁止选择未来的时间")\n' +
          '      x-switch(v-model="disableWeekend", title="禁止选择周末日期")\n' +
          '      x-switch(v-model="showLastMonth", title="$显示上个月")\n' +
          '      x-switch(v-model="showNextMonth", title="显示下个月")\n' +
          '      x-switch(v-model="return6Rows", inline-desc="否则，日历的高度会发生改变", title="固定显示6行")\n' +
          '      x-switch(v-model="highlightWeekend", title="高亮周末")\n' +
          '      cell(title="选中值", :value="value") ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '     group(title="控制导航部分")\n' +
          '      x-switch(v-model="hideHeader", title="隐藏日历头部")\n' +
          '      x-switch(v-model="hideWeekList", title="隐藏星期列表")\n' +
          '      x-switch(v-model="changeWeeksList", title="切换星期列表")\n' +
          '    group(title="更换文本")\n' +
          '      x-switch(v-model="replace", title="替换日期文本")';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '     div(style="margin: 15px;")\n' +
          '      x-button(type="primary", @click.native="value=\'2020-11-11\'")  设置为 2020-11-11\n' +
          '      x-button(type="primary", @click.native="value=\'2020-11-22\'")  设置为 2020-11-22\n' +
          '      x-button(type="primary", @click.native="value=\'2016-08-09\'")  设置为 2016-08-09\n' +
          '      x-button(type="primary", @click.native="value=\'TODAY\'")  设置为 today\n' +
          '      x-button(type="primary", @click.native="value=\'2016-06-05\'")  设置为 2016-06-05';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '   group(title="自定义日期单元格")\n' +
          '      x-switch(v-model="useCustomFn", inline-desc="为带有数字8的日期添加红点", title="在日期单元格中添加自定义内容")\n' +
          '    br\n' +
          '    divider  按月份顺序渲染一系列日期\n' +
          '    group\n' +
          '      cell(title="选中值", :value="listValue") ';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '   import { InlineCalendar, Group, XSwitch, Radio, XButton, Cell, Divider } from \'vux\';\n' +
          '  export default {\n' +
          '    components: { InlineCalendar, Group, XSwitch, Radio, XButton, Cell, Divider },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        show: true,\n' +
          '        value: \'\',\n' +
          '        listValue: \'\',\n' +
          '        range: false,\n' +
          '        showLastMonth: true,\n' +
          '        showNextMonth: true,\n' +
          '        highlightWeekend: false,\n' +
          '        return6Rows: true,\n' +
          '        hideHeader: false,\n' +
          '        hideWeekList: false,\n' +
          '        replaceTextList: {},\n' +
          '        replace: false,\n' +
          '        changeWeeksList: false,\n' +
          '        weeksList: [],\n' +
          '        useCustomFn: false,\n' +
          '        buildSlotFn: () => \'\',\n' +
          '        disablePast: false,\n' +
          '        disableFuture: false,\n' +
          '        disableWeekend: false,\n' +
          '        disableDateFunction (date) {\n' +
          '          if (date.formatedDate === \'2017-10-16\') {\n' +
          '            return true\n' +
          '          }\n' +
          '        }\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      onChange (val) {\n' +
          '        console.log(\'on-change\', val)\n' +
          '      },\n' +
          '      onViewChange (val, count) {\n' +
          '        console.log(\'on view change\', val, count)\n' +
          '      },\n' +
          '    },\n' +
          '    watch: {\n' +
          '      replace (val) {\n' +
          '        this.replaceTextList = val ? {\n' +
          '          \'TODAY\': \'今\'\n' +
          '        } : {}\n' +
          '      },\n' +
          '      useCustomFn (val) {\n' +
          '        this.buildSlotFn = val ? (line, index, data) => {\n' +
          '          return /8/.test(data.date) ? \'<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>\' : \'<div style="height:19px;"></div>\'\n' +
          '        } : () => \'\'\n' +
          '      },\n' +
          '      changeWeeksList (val) {\n' +
          '        this.weeksList = val ? [\'日\', \'一\', \'二\', \'三\', \'四\', \'五\', \'六 \'] : [\'Su\', \'Mo\', \'Tu\', \'We\', \'Th\', \'Fr\', \'Sa\']\n' +
          '      }\n' +
          '    },\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '.inline-calendar-demo {\n' +
          '  background: rgba(255,255,255,0.9);\n' +
          '}';
        this.copyCodeMethod();
      },
    },
    watch: {
      replace (val) {
        this.replaceTextList = val ? {
          'TODAY': '今'
        } : {}
      },
      useCustomFn (val) {
        this.buildSlotFn = val ? (line, index, data) => {
          return /8/.test(data.date) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:19px;"></div>'
        } : () => ''
      },
      changeWeeksList (val) {
        this.weeksList = val ? ['日', '一', '二', '三', '四', '五', '六 '] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      }
    },
  }

</script>

<style>
  @c inline-calendar {
    @d wrap {
      .inline-calendar-demo {
        background: rgba(255,255,255,0.9);
      }
    }
  }
</style>
