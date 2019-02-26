<template lang="jade">
  -var c = 'datetime'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div(style="padding:15px;")
      x-button(type="primary", plain, @click.native="showPlugin") 插件形式调用
    br
    x-button(mini, plain, type="primary", @click.native="copyCode01()") 复制代码

    group(title="默认格式: YYYY-MM-DD")
      datetime(v-model="value1", @on-change="change", title="生日", @on-cancel="log('cancel')", @on-confirm="onConfirm", @on-hide="log('hide', $event)")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode02()") 复制代码

    group(title="自定义分钟列表（每15分钟）")
      datetime(v-model="minuteListValue", format="YYYY-MM-DD HH:mm", :minute-list="['00', '15', '30', '45']", @on-change="change", title="生日")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode03()") 复制代码

    group(title="定义小时列表")
      datetime(v-model="hourListValue", format="YYYY-MM-DD HH:mm", :hour-list="['09', '10', '11', '12', '13', '14', '15', '16']", :minute-list="['00', '15', '30', '45']", @on-change="change", title="生日")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode04()") 复制代码

    group(title="Readonly")
      datetime(v-model="valueReadonly", :readonly="readonly", @on-change="change", title="生日")
    div(style="padding:15px")
      x-button(type="primary", plain, @click.native="readonly = !readonly")  切换readonly
    br
    x-button(mini, plain, type="primary", @click.native="copyCode05()") 复制代码

    group(title="格式化显示")
      datetime(v-model="formatValue", :display-format="formatValueFunction", @on-change="change", title="生日")
    div(style="padding:15px;")
      x-button(type="primary", @click.native="formatValue = '2017-11-11'") 设置时间为2017-11-11
    br
    x-button(mini, plain, type="primary", @click.native="copyCode06()") 复制代码

    group(title="限定小时范围")
      datetime(v-model="limitHourValue", format="YYYY-MM-DD HH:mm", :min-hour=9, :max-hour=18, @on-change="change", title="限定小时范围", inline-desc="工作时间为: 09-18")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode07()") 复制代码

    group(title="设置开始时间和结束日期 2015-11-11 ~ 2017-10-11")
      datetime(v-model="limitHourValue", :start-date="startDate", :end-date="endDate", format="YYYY-MM-DD HH:mm", @on-change="change", title="开始时间")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode08()") 复制代码

    group(title="只设置结束时间 2017-10-11")
      datetime(v-model="onlySetEndDateValue", :end-date="onlySetEndDate", format="YYYY-MM-DD HH:mm", @on-change="change", title="开始时间")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode09()") 复制代码

    group(:title="`格式: ${format}`")
      datetime(v-model="value2", :format="format", @on-change="change", title="开始时间")
    div(style="padding:15px;")
      x-button(type="primary", @click.native="toggleFormat") 切换时间格式
    br
    x-button(mini, plain, type="primary", @click.native="copyCode10()") 复制代码

    group(title="noon")
      datetime(title="noon", v-model="noonValue", format="YYYY-MM-DD A")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode11()") 复制代码

    group(title="提示文字")
      datetime(v-model="value3", default-selected-value="2017-06-18 13", format="YYYY-MM-DD HH", placeholder="请选择日期", @on-change="change", title="开始时间")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode12()") 复制代码

    group(title="设置默认选中值为 2017-11-11")
      datetime(v-model="value3_1", default-selected-value="2017-11-11", format="YYYY-MM-DD", placeholder="请选择日期", @on-change="change", title="开始时间", :inline-desc="`选中值: ${value3_1}`")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode13()") 复制代码

    group(title="设置开始和结束年份")
      datetime(v-model="value4", placeholder="请选择日期", :min-year=2000, :max-year=2016, format="YYYY-MM-DD HH:mm", @on-change="change", title="2000年以后的时间")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode14()") 复制代码

    group(title="自定义小时列表生成逻辑")
      datetime(format="YYYY-MM-DD HH", v-model="computeHoursValue", :compute-hours-function="computeHoursFunction", title="生日", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode15()") 复制代码

    group(title="自定义日期列表生成逻辑")
      datetime(format="YYYY-MM-DD HH", v-model="computeDaysValue", :compute-days-function="computeDaysFunction", title="生日", @on-change="change")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode16()") 复制代码

    group(title="自定义中文显示模板")
      datetime(v-model="value5", placeholder="请选择日期", :min-year=2000, :max-year=2016, format="YYYY-MM-DD HH:mm", @on-change="change", title="中文", year-row="{value}年", month-row="{value}月", day-row="{value}日", hour-row="{value}点", minute-row="{value}分", confirm-text="完成", cancel-text="取消")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode17()") 复制代码

    group(title="显示中间的清除按钮")
      datetime(v-model="value6", @on-change="change", title="生日", clear-text="clear", @on-clear="clearValue")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode18()") 复制代码

    group(title="显示中间的设置日期为今天的按钮")
      datetime(v-model="value7", @on-change="change", title="生日", clear-text="today", @on-clear="setToday")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode19()") 复制代码

    group(title="自定义触发内容")
      datetime(v-model="value7", @on-change="change", title="生日", clear-text="today", @on-clear="setToday")
        x-button 点我
    br
    x-button(mini, plain, type="primary", @click.native="copyCode20()") 复制代码

    group(title="'Required")
      datetime(v-model="value8", title="Required", clear-text="clear", @on-clear="clearValue8", :required="true")
    br
    x-button(mini, plain, type="primary", @click.native="copyCode21()") 复制代码

    group(title="使用 prop: show.sync 控制显示 (vue^2.3)")
      datetime(v-model="value9", @on-change="change", title="生日", :show.sync="visibility")
    div(style="padding:15px;")
      x-button(type="primary", plain @click.native="visibility = true") 显示
    br
    x-button(mini, plain, type="primary", @click.native="copyCode22()") 复制代码

    group(title="默认格式: YYYY-MM-DD")
      datetime(:order-map="{ year: 3, month: 2, day: 1}", v-model="value1", @on-change="change", title="customize column order", @on-cancel="log('cancel')", @on-confirm="onConfirm", @on-hide="log('hide', $event)")

    x-button(mini, plain, type="primary", @click.native="copyCode23()") 复制代码
    x-button(mini, plain, @click.native="copyCode24()") 复制js代码
    x-button(mini, plain, type="warn", @click.native="copyCode25()") 复制css代码

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
</template>

<script>
  import { Datetime, Group, XButton } from 'vux';

  export default {
    components: { Datetime, Group, XButton },
    data() {
      return {
        tempCode: '',
        noonValue: '2018-04-13 PM',
        readonly: true,
        minuteListValue: '2017-06-12 09:00',
        hourListValue: '2017-06-12 09:00',
        format: 'YYYY-MM-DD HH:mm',
        value1: '2015-11-12',
        valueReadonly: '2015-11-12',
        value2: '',
        value3: '',
        value3_1: '',
        value4: '',
        value5: '',
        value6: '2016-08-18',
        value7: '',
        value8: '',
        limitHourValue: '',
        startDate: '2015-11-11',
        endDate: '2017-10-11',
        formatValue: '2017-10-11',
        formatValueFunction (val) {
          return val.replace(/-/g, '$')
        },
        value9: '',
        visibility: false,
        computeHoursValue: '',
        computeDaysValue: '',
        computeHoursFunction (date, isToday, generateRange) {
          if (isToday) {
            return generateRange(new Date().getHours(), 23)
          } else {
            return generateRange(0, 23)
          }
        },
        computeDaysFunction (options, generateRange) {
          return [options.month] // if current month is n, days are [n]
        },
        onlySetEndDate: '2017-10-11',
        onlySetEndDateValue: ''
      }
    },
    methods: {
      log (str1, str2 = '') {
        console.log(str1, str2)
      },
      onConfirm (val) {
        console.log('on-confirm arg', val)
        console.log('current value', this.value1)
      },
      showPlugin () {
        console.log(this.$vux)
        this.$vux.datetime.show({
          cancelText: '取消',
          confirmText: '确定',
          format: 'YYYY-MM-DD HH',
          value: '2017-05-20 18',
          onConfirm (val) {
            console.log('plugin confirm', val)
          },
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          }
        })
      },
      toggleFormat () {
        if (this.format === 'YYYY-MM-DD') {
          this.format = 'YYYY-MM-DD HH:mm'
        } else if (this.format === 'YYYY-MM-DD HH:mm') {
          this.format = 'YYYY-MM-DD'
        }
      },
      change (value) {
        console.log('change', value)
      },
      clearValue (value) {
        this.value6 = ''
      },
      clearValue8 (value) {
        this.value8 = ''
      },
      setToday (value) {
        let now = new Date()
        let cmonth = now.getMonth() + 1
        let day = now.getDate()
        if (cmonth < 10) cmonth = '0' + cmonth
        if (day < 10) day = '0' + day
        this.value7 = now.getFullYear() + '-' + cmonth + '-' + day
        console.log('set today ok')
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
        this.tempCode = '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", plain, @click.native="showPlugin") 插件形式调用 ';
        this.copyCodeMethod();
      },
      copyCode02 () {
        this.tempCode = '    group(title="默认格式: YYYY-MM-DD")\n' +
          '      datetime(v-model="value1", @on-change="change", title="生日", @on-cancel="log(\'cancel\')", @on-confirm="onConfirm", @on-hide="log(\'hide\', $event)") ';
        this.copyCodeMethod();
      },
      copyCode03 () {
        this.tempCode = '    group(title="自定义分钟列表（每15分钟）")\n' +
          '      datetime(v-model="minuteListValue", format="YYYY-MM-DD HH:mm", :minute-list="[\'00\', \'15\', \'30\', \'45\']", @on-change="change", title="生日") ';
        this.copyCodeMethod();
      },
      copyCode04 () {
        this.tempCode = '    group(title="定义小时列表")\n' +
          '      datetime(v-model="hourListValue", format="YYYY-MM-DD HH:mm", :hour-list="[\'09\', \'10\', \'11\', \'12\', \'13\', \'14\', \'15\', \'16\']", :minute-list="[\'00\', \'15\', \'30\', \'45\']", @on-change="change", title="生日") ';
        this.copyCodeMethod();
      },
      copyCode05 () {
        this.tempCode = '  group(title="Readonly")\n' +
          '      datetime(v-model="valueReadonly", :readonly="readonly", @on-change="change", title="生日")\n' +
          '    div(style="padding:15px")\n' +
          '      x-button(type="primary", plain, @click.native="readonly = !readonly")  切换readonly';
        this.copyCodeMethod();
      },
      copyCode06 () {
        this.tempCode = '    group(title="格式化显示")\n' +
          '      datetime(v-model="formatValue", :display-format="formatValueFunction", @on-change="change", title="生日")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="formatValue = \'2017-11-11\'") 设置时间为2017-11-11 ';
        this.copyCodeMethod();
      },
      copyCode07 () {
        this.tempCode = '    group(title="限定小时范围")\n' +
          '      datetime(v-model="limitHourValue", format="YYYY-MM-DD HH:mm", :min-hour=9, :max-hour=18, @on-change="change", title="限定小时范围", inline-desc="工作时间为: 09-18")';
        this.copyCodeMethod();
      },
      copyCode08 () {
        this.tempCode = '   group(title="设置开始时间和结束日期 2015-11-11 ~ 2017-10-11")\n' +
          '      datetime(v-model="limitHourValue", :start-date="startDate", :end-date="endDate", format="YYYY-MM-DD HH:mm", @on-change="change", title="开始时间") ';
        this.copyCodeMethod();
      },
      copyCode09 () {
        this.tempCode = '    group(title="只设置结束时间 2017-10-11")\n' +
          '      datetime(v-model="onlySetEndDateValue", :end-date="onlySetEndDate", format="YYYY-MM-DD HH:mm", @on-change="change", title="开始时间") ';
        this.copyCodeMethod();
      },
      copyCode10 () {
        this.tempCode = '  group(:title="`格式: ${format}`")\n' +
          '      datetime(v-model="value2", :format="format", @on-change="change", title="开始时间")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", @click.native="toggleFormat") 切换时间格式 ';
        this.copyCodeMethod();
      },
      copyCode11 () {
        this.tempCode = '    group(title="noon")\n' +
          '      datetime(title="noon", v-model="noonValue", format="YYYY-MM-DD A") ';
        this.copyCodeMethod();
      },
      copyCode12 () {
        this.tempCode = '   group(title="提示文字")\n' +
          '      datetime(v-model="value3", default-selected-value="2017-06-18 13", format="YYYY-MM-DD HH", placeholder="请选择日期", @on-change="change", title="开始时间") ';
        this.copyCodeMethod();
      },
      copyCode13 () {
        this.tempCode = '  group(title="设置默认选中值为 2017-11-11")\n' +
          '      datetime(v-model="value3_1", default-selected-value="2017-11-11", format="YYYY-MM-DD", placeholder="请选择日期", @on-change="change", title="开始时间", :inline-desc="`选中值: ${value3_1}`")';
        this.copyCodeMethod();
      },
      copyCode14 () {
        this.tempCode = '    group(title="设置开始和结束年份")\n' +
          '      datetime(v-model="value4", placeholder="请选择日期", :min-year=2000, :max-year=2016, format="YYYY-MM-DD HH:mm", @on-change="change", title="2000年以后的时间") ';
        this.copyCodeMethod();
      },
      copyCode15 () {
        this.tempCode = '     group(title="自定义小时列表生成逻辑")\n' +
          '      datetime(format="YYYY-MM-DD HH", v-model="computeHoursValue", :compute-hours-function="computeHoursFunction", title="生日", @on-change="change")';
        this.copyCodeMethod();
      },
      copyCode16 () {
        this.tempCode = '   group(title="自定义日期列表生成逻辑")\n' +
          '      datetime(format="YYYY-MM-DD HH", v-model="computeDaysValue", :compute-days-function="computeDaysFunction", title="生日", @on-change="change") ';
        this.copyCodeMethod();
      },
      copyCode17 () {
        this.tempCode = 'group(title="自定义中文显示模板")\n' +
          '      datetime(v-model="value5", placeholder="请选择日期", :min-year=2000, :max-year=2016, format="YYYY-MM-DD HH:mm", @on-change="change", title="中文", year-row="{value}年", month-row="{value}月", day-row="{value}日", hour-row="{value}点", minute-row="{value}分", confirm-text="完成", cancel-text="取消") ';
        this.copyCodeMethod();
      },
      copyCode18 () {
        this.tempCode = ' group(title="显示中间的清除按钮")\n' +
          '      datetime(v-model="value6", @on-change="change", title="生日", clear-text="clear", @on-clear="clearValue")';
        this.copyCodeMethod();
      },
      copyCode19 () {
        this.tempCode = '  group(title="显示中间的设置日期为今天的按钮")\n' +
          '      datetime(v-model="value7", @on-change="change", title="生日", clear-text="today", @on-clear="setToday") ';
        this.copyCodeMethod();
      },
      copyCode20 () {
        this.tempCode = ' group(title="自定义触发内容")\n' +
          '      datetime(v-model="value7", @on-change="change", title="生日", clear-text="today", @on-clear="setToday")\n' +
          '        x-button 点我 ';
        this.copyCodeMethod();
      },
      copyCode21 () {
        this.tempCode = '     group(title="\'Required")\n' +
          '      datetime(v-model="value8", title="Required", clear-text="clear", @on-clear="clearValue8", :required="true")';
        this.copyCodeMethod();
      },
      copyCode22 () {
        this.tempCode = '   group(title="使用 prop: show.sync 控制显示 (vue^2.3)")\n' +
          '      datetime(v-model="value9", @on-change="change", title="生日", :show.sync="visibility")\n' +
          '    div(style="padding:15px;")\n' +
          '      x-button(type="primary", plain @click.native="visibility = true") 显示';
        this.copyCodeMethod();
      },
      copyCode23 () {
        this.tempCode = '   group(title="默认格式: YYYY-MM-DD")\n' +
          '      datetime(:order-map="{ year: 3, month: 2, day: 1}", v-model="value1", @on-change="change", title="customize column order", @on-cancel="log(\'cancel\')", @on-confirm="onConfirm", @on-hide="log(\'hide\', $event)")';
        this.copyCodeMethod();
      },
      copyCode24 () {
        this.tempCode = '   import { Datetime, Group, XButton } from \'vux\';\n' +
          '\n' +
          '  export default {\n' +
          '    components: { Datetime, Group, XButton },\n' +
          '    data() {\n' +
          '      return {\n' +
          '        noonValue: \'2018-04-13 PM\',\n' +
          '        readonly: true,\n' +
          '        minuteListValue: \'2017-06-12 09:00\',\n' +
          '        hourListValue: \'2017-06-12 09:00\',\n' +
          '        format: \'YYYY-MM-DD HH:mm\',\n' +
          '        value1: \'2015-11-12\',\n' +
          '        valueReadonly: \'2015-11-12\',\n' +
          '        value2: \'\',\n' +
          '        value3: \'\',\n' +
          '        value3_1: \'\',\n' +
          '        value4: \'\',\n' +
          '        value5: \'\',\n' +
          '        value6: \'2016-08-18\',\n' +
          '        value7: \'\',\n' +
          '        value8: \'\',\n' +
          '        limitHourValue: \'\',\n' +
          '        startDate: \'2015-11-11\',\n' +
          '        endDate: \'2017-10-11\',\n' +
          '        formatValue: \'2017-10-11\',\n' +
          '        formatValueFunction (val) {\n' +
          '          return val.replace(/-/g, \'$\')\n' +
          '        },\n' +
          '        value9: \'\',\n' +
          '        visibility: false,\n' +
          '        computeHoursValue: \'\',\n' +
          '        computeDaysValue: \'\',\n' +
          '        computeHoursFunction (date, isToday, generateRange) {\n' +
          '          if (isToday) {\n' +
          '            return generateRange(new Date().getHours(), 23)\n' +
          '          } else {\n' +
          '            return generateRange(0, 23)\n' +
          '          }\n' +
          '        },\n' +
          '        computeDaysFunction (options, generateRange) {\n' +
          '          return [options.month] // if current month is n, days are [n]\n' +
          '        },\n' +
          '        onlySetEndDate: \'2017-10-11\',\n' +
          '        onlySetEndDateValue: \'\'\n' +
          '      }\n' +
          '    },\n' +
          '    methods: {\n' +
          '      log (str1, str2 = \'\') {\n' +
          '        console.log(str1, str2)\n' +
          '      },\n' +
          '      onConfirm (val) {\n' +
          '        console.log(\'on-confirm arg\', val)\n' +
          '        console.log(\'current value\', this.value1)\n' +
          '      },\n' +
          '      showPlugin () {\n' +
          '        console.log(this.$vux)\n' +
          '        this.$vux.datetime.show({\n' +
          '          cancelText: \'取消\',\n' +
          '          confirmText: \'确定\',\n' +
          '          format: \'YYYY-MM-DD HH\',\n' +
          '          value: \'2017-05-20 18\',\n' +
          '          onConfirm (val) {\n' +
          '            console.log(\'plugin confirm\', val)\n' +
          '          },\n' +
          '          onShow () {\n' +
          '            console.log(\'plugin show\')\n' +
          '          },\n' +
          '          onHide () {\n' +
          '            console.log(\'plugin hide\')\n' +
          '          }\n' +
          '        })\n' +
          '      },\n' +
          '      toggleFormat () {\n' +
          '        if (this.format === \'YYYY-MM-DD\') {\n' +
          '          this.format = \'YYYY-MM-DD HH:mm\'\n' +
          '        } else if (this.format === \'YYYY-MM-DD HH:mm\') {\n' +
          '          this.format = \'YYYY-MM-DD\'\n' +
          '        }\n' +
          '      },\n' +
          '      change (value) {\n' +
          '        console.log(\'change\', value)\n' +
          '      },\n' +
          '      clearValue (value) {\n' +
          '        this.value6 = \'\'\n' +
          '      },\n' +
          '      clearValue8 (value) {\n' +
          '        this.value8 = \'\'\n' +
          '      },\n' +
          '      setToday (value) {\n' +
          '        let now = new Date()\n' +
          '        let cmonth = now.getMonth() + 1\n' +
          '        let day = now.getDate()\n' +
          '        if (cmonth < 10) cmonth = \'0\' + cmonth\n' +
          '        if (day < 10) day = \'0\' + day\n' +
          '        this.value7 = now.getFullYear() + \'-\' + cmonth + \'-\' + day\n' +
          '        console.log(\'set today ok\')\n' +
          '      }\n' +
          '    }\n' +
          '  }';
        this.copyCodeMethod();
      },
      copyCode25 () {
        this.tempCode = '    .center {\n' +
          '        padding-top: 10px;\n' +
          '        padding-left: 15px;\n' +
          '        color: green;';
        this.copyCodeMethod();
      },
    }
  }

</script>

<style>
  @c datetime {
    @d wrap {
      .center {
        padding-top: 10px;
        padding-left: 15px;
        color: green;
      }
    }
  }
</style>
