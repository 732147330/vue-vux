<template lang="jade">
  -var c = 'MaximumBinaryTree'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
      br
      | 1、二叉树的根是数组中的最大元素。
      br
      | 2、左子树是通过数组中最大值左边部分构造出的最大二叉树。
      br
      | 3、右子树是通过数组中最大值右边部分构造出的最大二叉树。
      br
      | 通过给定的数组构建最大二叉树，并且输出这个树的根节点。
    group(title="示例1：")
      x-textarea(:show-counter="false",v-model="val01", autosize, disabled)
    group(title="注意：")
      ul
        li 1、给定的数组的大小在 [1, 1000] 之间。
    group(title="测试：")
      div(slot="other")
        x-button(mini, type="primary", @click.native="commitStr()") 提交
        x-button(mini, type="warn", @click.native="cleanCode()") 清空
      x-input(title="输入(不含重复元素的整数数组):", label-width="14em", v-model="str1")
      x-input(title="输出:", v-model="str2", disabled)
    group(title="js代码：")
      x-textarea(:show-counter="false", v-model="val02", autosize, disabled)
</template>

<script>
  import { XButton, XTextarea, Group, XInput } from 'vux'

  //二叉树类
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  //二叉树转数组
  var toArray = function(root, arr, map, num) {
    //num:层数
    //map:存储层数的下标
    if(!map.hasOwnProperty(num)){
      map[num] = 0;
    }else{
      map[num]++;
    }
    //index:每层的下标
    let index =  map[num];

    if(Math.pow(2,num-1)+(index-1) >= Math.pow(2,num-1)-1 && Math.pow(2,num-1)+(index-1) <= Math.pow(2,num)-2){

      if(root != null && root.val !=null) {
        arr[Math.pow(2,num-1)+(index-1)] = root.val;
      }else{
        arr[Math.pow(2,num-1)+(index-1)] = null;
      }
    }else{
      return;
    }

    num++;

    if(root != null){
      toArray(root.left, arr, map, num);
      toArray(root.right, arr, map, num);
    }else {
      return;
    }

    return arr;
  };

  var constructMaximumBinaryTree = function(nums) {
    if(nums.length == 0){
      return null;
    }
    let maxNum = nums[0];
    //最大值筛选
    for(let i = 1; i < nums.length; i++){
      if(maxNum < nums[i]){
        maxNum = nums[i];
      }
    }

    //分左右数组
    let nums_left = [];
    let nums_right = [];
    for(let i = 0; i < nums.length; i++){
      if(i < nums.indexOf(maxNum)){
        nums_left.push(nums[i]);
      }else if (i > nums.indexOf(maxNum)){
        nums_right.push(nums[i]);
      }
    }
    let tree = new TreeNode(maxNum);
    tree.left = constructMaximumBinaryTree(nums_left);
    tree.right = constructMaximumBinaryTree(nums_right);
    return tree;
  };

  export default {
    components: {XButton, XTextarea, Group, XInput},
    data() {
      return {
        val01: '输入: [3,2,1,6,0,5]\n' +
          '输入: 返回下面这棵树的根节点：\n' +
          '\n' +
          '      6\n' +
          '    /   \\\n' +
          '   3     5\n' +
          '    \\    / \n' +
          '     2  0   \n' +
          '       \\\n' +
          '        1',
        val02: '  var constructMaximumBinaryTree = function(nums) {\n' +
          '    if(nums.length == 0){\n' +
          '      return null;\n' +
          '    }\n' +
          '    let maxNum = nums[0];\n' +
          '    //最大值筛选\n' +
          '    for(let i = 1; i < nums.length; i++){\n' +
          '      if(maxNum < nums[i]){\n' +
          '        maxNum = nums[i];\n' +
          '      }\n' +
          '    }\n' +
          '\n' +
          '    //分左右数组\n' +
          '    let nums_left = [];\n' +
          '    let nums_right = [];\n' +
          '    for(let i = 0; i < nums.length; i++){\n' +
          '      if(i < nums.indexOf(maxNum)){\n' +
          '        nums_left.push(nums[i]);\n' +
          '      }else if (i > nums.indexOf(maxNum)){\n' +
          '        nums_right.push(nums[i]);\n' +
          '      }\n' +
          '    }\n' +
          '    let tree = new TreeNode(maxNum);\n' +
          '    tree.left = constructMaximumBinaryTree(nums_left);\n' +
          '    tree.right = constructMaximumBinaryTree(nums_right);\n' +
          '    return tree;\n' +
          '  };',
        str1: '[3,2,1,6,0,5]',
        str2: '',
      }
    },
    methods: {
      commitStr () {
        var nums = this.str1.replace("[","").replace("]","").trim().split(",");
        for(let i = 0; i < nums.length; i++){
          nums[i] = parseInt(nums[i]);
        }
        var root = constructMaximumBinaryTree(nums);
        var arr = toArray(root, [], new Map(), 1);
        var count = nums.length;
        this.str2 = '[';
        for(let i = 0; i < arr.length; i++){
          if(arr[i]!=null){
            count --;
            if(count == 0){
              this.str2 = this.str2 + arr[i] ;
            }else{
              this.str2 = this.str2 + arr[i] + ',';
            }
          }else if(count > 0){
            this.str2 = this.str2 + arr[i] + ',';
          }
        }
        this.str2 = this.str2 + ']';
      },
      cleanCode () {
        this.str1 = '';
        this.str2 = '';
      }
    },
  }

</script>
<style>
  @c MaximumBinaryTree {
    @d wrap {
      p{
        text-align: center;
      }
    }
  }
</style>
