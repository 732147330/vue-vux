<template lang="jade">
  -var c = 'SearchInBinarySearchTree'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
    group(title="示例1：")
      x-textarea(:show-counter="false",v-model="val01", autosize, disabled)
    group(title="返回如下子树：")
      x-textarea(:show-counter="false", v-model="val02", autosize, disabled)
    p 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL。
    group(title="测试：")
      div(slot="other")
        x-button(mini, type="primary", @click.native="commitStr()") 提交
        x-button(mini, type="warn", @click.native="cleanCode()") 清空
      x-input(title="输入root:", v-model="str1")
      x-input(title="输入要搜索的值:", v-model="str2")
      x-input(title="输出(搜索的节点子树):", label-width="11em", v-model="str3", disabled)
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

  var searchBST = function(root, val) {
    let tree = null;
    if(root === null) return null;
    if(root.val != val){
        tree = searchBST(root.left, val);
        if(tree === null){
          tree = searchBST(root.right, val)
        }
    }else{
      return root ;
    }
    return tree;
  };

  export default {
    components: {XButton, XTextarea, Group, XInput},
    data() {
      return {
        val01: '给定二叉搜索树:\n' +
          '\n' +
          '        4\n' +
          '       / \\\n' +
          '      2   7\n' +
          '     / \\\n' +
          '    1   3\n' +
          '\n' +
          '和值: 2',
        val02: '      2     \n' +
          '     / \\   \n' +
          '    1   3',
        val03: ' var searchBST = function(root, val) {\n' +
          '    let tree = null;\n' +
          '    if(root === null) return null;\n' +
          '    if(root.val != val){\n' +
          '        tree = searchBST(root.left, val);\n' +
          '        if(tree === null){\n' +
          '          tree = searchBST(root.right, val)\n' +
          '        }\n' +
          '    }else{\n' +
          '      return root ;\n' +
          '    }\n' +
          '    return tree;\n' +
          '  };',
        str1: '[18,2,22,null,null,null,63,null,84,null,null]',
        str2: '63',
        str3: '',
      }
    },
    methods: {
      commitStr () {
        var root = forkArray(this.str1.replace("[","").replace("]","").trim().split(","), {}, new Map(), 1)
        var tree = searchBST(root, parseInt(this.str2))
        var arr = toArray(tree, [], new Map(), 1);
        this.str3 = '[';
        for(let i = 0; i < 3; i++){
          if(i != 2){
            this.str3 = this.str3 + arr[i] +',';
          }else{
            this.str3 = this.str3 + arr[i];
          }

        }
        this.str3 = this.str3 + ']';
      },
      cleanCode () {
        this.str1 = '';
        this.str2 = '';
        this.str3 = '';
      }
    },
  }

</script>
<style>
  @c SearchInBinarySearchTree {
    @d wrap {
      p{
        text-align: center;
      }
    }
  }
</style>
