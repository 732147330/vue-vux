<template lang="jade">
  -var c = 'RangeSumOfBinarySearchTrees'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
      br
      | 二叉搜索树保证具有唯一的值。
    group(title="示例1：")
      x-textarea(:show-counter="false",v-model="val01", disabled)
    group(title="示例2：")
      x-textarea(:show-counter="false", v-model="val02", disabled)
    group(title="测试：")
      div(slot="other")
        x-button(mini, type="primary", @click.native="commitStr()") 提交
        x-button(mini, type="warn", @click.native="cleanCode()") 清空
      x-input(title="输入root:", v-model="str1")
      x-input(title="输入L:", v-model="str2")
      x-input(title="输入R:", v-model="str3")
      x-input(title="输出(结点之和):", v-model="str4", disabled)
    group(title="js代码：")
      x-textarea(:show-counter="false", v-model="val03", autosize, disabled)
</template>

<script>
  import { XButton, XTextarea, Group, XInput } from 'vux'

  //二叉树类
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  //数组转二叉树
  var forkArray = function(root, tree, map, num) {
    //num:层数
    //map:存储层数的下标
    if(!map.hasOwnProperty(num)){
      map[num] = 0;
    }else{
      map[num]++;
    }
    //index:每层的下标
    let index =  map[num];
    // console.log("当前层数：" + num);
    // console.log("当前下标：" + index);
    // console.log(map);
    if (root.length === 0) {
      return null;
    }
    if (root.length === 1) {
      return new TreeNode(root[0]);
    }

    if(Math.pow(2,num-1)+(index-1) < root.length
      && (Math.pow(2,num-1)+(index-1) >= Math.pow(2,num-1)-1 && Math.pow(2,num-1)+(index-1) <= Math.pow(2,num)-2 )){
      if(root[Math.pow(2,num-1)+(index-1)] === 'null') return null;
      tree = new TreeNode(parseInt(root[Math.pow(2,num-1)+(index-1)]));
    }else{
      return null;
    }

    num++;

    if(!tree.left){
      tree.left = forkArray(root, tree, map, num);
    }
    if(!tree.right){
      tree.right = forkArray(root, tree, map, num);
    }
    return tree;
  };

  var rangeSumBST = function(root, L, R) {
    if(root == null){
      return  0 ;
    }else {
      if(root.val < L){
        return  rangeSumBST(root.right, L, R);
      }else if(root.val > R){
        return  rangeSumBST(root.left, L, R);
      }else if(root.val === L){
        return rangeSumBST(root.right, L, R) + root.val;
      }else if(root.val === R){
        return rangeSumBST(root.left, L, R) + root.val;
      }else{
        return rangeSumBST(root.left, L, R) + root.val + rangeSumBST(root.right, L, R);
      }
    }
  };

  export default {
    components: {XButton, XTextarea, Group, XInput},
    data() {
      return {
        val01: '输入：root = [10,5,15,3,7,null,18], L = 7, R = 15\n' +
          '输出：32',
        val02: '输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10\n' +
          '输出：23',
        val03: 'var rangeSumBST = function(root, L, R) {\n' +
          '    if(root == null){\n' +
          '        return  0 ;\n' +
          '    }else {\n' +
          '        if(root.val < L){\n' +
          '            return  rangeSumBST(root.right, L, R)\n' +
          '        }else if(root.val > R){\n' +
          '            return  rangeSumBST(root.left, L, R) \n' +
          '        }else if(root.val === L){\n' +
          '            return rangeSumBST(root.right, L, R) + root.val\n' +
          '        }else if(root.val === R){\n' +
          '            return rangeSumBST(root.left, L, R) + root.val\n' +
          '        }else{\n' +
          '            return rangeSumBST(root.left, L, R) + root.val + rangeSumBST(root.right, L, R);\n' +
          '        }\n' +
          '    }\n' +
          '};',
        str1: '[10,5,15,3,7,13,18,1,null,6]',
        str2: '6',
        str3: '10',
        str4: '',
      }
    },
    methods: {
      commitStr () {
        var root = forkArray(this.str1.replace("[","").replace("]","").trim().split(","), {}, new Map(), 1)
        this.str4 = rangeSumBST(root, this.str2, this.str3)
      },
      cleanCode () {
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
        this.str4 = '';
      }
    },
  }

</script>
<style>
  @c RangeSumOfBinarySearchTrees {
    @d wrap {
      p{
        text-align: center;
      }
    }
  }
</style>
