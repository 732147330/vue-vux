<template lang="jade">
  -var c = 'BasicAddAndDel'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    group(title="基础练习")
      div(slot="other")
        x-button(mini, type="primary", @click.native="add()") 添加
        x-button(mini, type="warn", @click.native="del()") 删除
      x-input(title="请随便输入", v-model="val")

    checklist(:title="`数据列表(数量：${active} / ${all})`", :options="arr", v-model="activeArr", @on-change="change" )

    //x-button(mini, type="primary", @click.native="copyJadeCode()") 复制代码
    //复制文本框
    //textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")



</template>

<script>
  import { XButton, XInput, Group, Checklist } from 'vux'

  export default {
    components: {Group, XButton, XInput, Checklist },
    data() {
      return {
        val: '',
        arr: [],
        activeArr: [],
        active: 0,
        all: 0,
        static: '',
      }
    },
    methods: {
      add () {
        if (this.val.trim() === '') {
          return;
        }
        this.arr.push(this.val);
        this.val = '';
        this.static = 'add';
      },
      del () {
        if (this.all === 0) {
          return;
        }
        this.activeArr.filter(v => {
          this.arr = this.arr.filter(v1 => v1!=v)
        });
        this.activeArr = [];
        this.static = 'del';
      },
      change() {
      },
    },
    watch: {
      arr: function(newVal, oldVal){
        this.active = this.activeArr.length;
        this.all = this.arr.length;
        if(this.static != 'add'){
          newVal.forEach(v => {
            document.getElementById('fontStyle_' + this.arr.indexOf(v)).classList.remove("activeClass");
          });
        }
      },
      activeArr: function(newVal, oldVal){
        this.active = this.activeArr.length;
        this.all = this.arr.length;
        oldVal.forEach(v => {
          if( this.arr.indexOf(v) > -1
            && document.getElementById('fontStyle_' + this.arr.indexOf(v)).className.indexOf('activeClass') > -1){
            document.getElementById('fontStyle_' + this.arr.indexOf(v)).classList.remove("activeClass");
          }
        });
        newVal.forEach(v => {
            document.getElementById('fontStyle_' + this.arr.indexOf(v)).classList.add("activeClass");
        });
      },
    },
  }

</script>
<style>
  @c BasicAddAndDel {
    @d wrap {
      .activeClass{
        color: green;
        text-decoration:line-through;
      }
    }
  }
</style>
