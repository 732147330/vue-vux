<template lang="jade">
  -var c = 'MaintainingTheUrbanSkyline'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p 在二维数组grid中，grid[i][j]代表位于某处的建筑物的高度。 我们被允许增加任何数量（不同建筑物的数量可能不同）的建筑物的高度。 高度 0 也被认为是建筑物。
      br
      | 最后，从新数组的所有四个方向（即顶部，底部，左侧和右侧）观看的“天际线”必须与原始数组的天际线相同。 城市的天际线是从远处观看时，由所有建筑物形成的矩形的外部轮廓。 请看下面的例子。
      br
      | 建筑物高度可以增加的最大总和是多少？

    group(title="示例：")
      x-textarea(:show-counter="false",v-model="val01", autosize, disabled)

    group(title="说明：")
      ul
        li 1 < grid.length = grid[0].length <= 50。
        li grid[i][j] 的高度范围是： [0, 100]。
        li 一座建筑物占据一个grid[i][j]：换言之，它们是 1 x 1 x grid[i][j] 的长方体。
    group(title="测试：")
      div(slot="other")
        x-button(mini, type="primary", @click.native="commitStr()") 提交
        x-button(mini, type="warn", @click.native="cleanCode()") 清空
      x-input(title="输入grid(二维数组):", label-width="9em", v-model="str1")
      x-input(title="输出(增加最大的总和):", label-width="11em", v-model="str2", disabled)
    group(title="js代码：")
      x-textarea(:show-counter="false", v-model="val02", autosize, disabled)
</template>

<script>
  import { XButton, XTextarea, Group, XInput } from 'vux'

  var maxIncreaseKeepingSkyline = function(grid) {
    let sum = 0;//计算总和
    let grid_vertical = [];//存放竖直方向的天际线
    let grid_horizontal = [];//存放水平方向的天际线

    for(let i = 0; i < grid.length; i++){
      let h = grid[i][0];
      for(let j = 0; j < grid[i].length; j++){
        if(i===0){
          grid_vertical[j] = grid[i][j];
        }

        //竖直方向的天际线筛选
        if(grid_vertical[j] < grid[i][j]){
          grid_vertical[j] = grid[i][j];
        }

        //水平方向的天际线筛选
        if(j+1 < grid[i].length){
          if(h > grid[i][j+1]){
            grid_horizontal[i] = h;
          }else{
            h = grid[i][j+1];
            grid_horizontal[i] = h;
          }
        }
      }
    }

    //进行最大化增高
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        var maxNum = grid_horizontal[i];
        if(grid_vertical[j] < grid_horizontal[i]){
          maxNum = grid_vertical[j];
        }
        sum = sum +(maxNum - grid[i][j])
      }
    }
    return sum;
  };


  export default {
    components: {XButton, XTextarea, Group, XInput},
    data() {
      return {
        val01: '输入： grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]\n' +
          '输出： 35\n' +
          '解释： \n' +
          'The grid is:\n' +
          '[ [3, 0, 8, 4], \n' +
          '  [2, 4, 5, 7],\n' +
          '  [9, 2, 6, 3],\n' +
          '  [0, 3, 1, 0] ]\n' +
          '\n' +
          '从数组竖直方向（即顶部，底部）看“天际线”是：[9, 4, 8, 7]\n' +
          '从水平水平方向（即左侧，右侧）看“天际线”是：[8, 7, 9, 3]\n' +
          '\n' +
          '在不影响天际线的情况下对建筑物进行增高后，新数组如下：\n' +
          '\n' +
          'gridNew = [ [8, 4, 8, 7],\n' +
          '            [7, 4, 7, 7],\n' +
          '            [9, 4, 8, 7],\n' +
          '            [3, 3, 3, 3] ]',
        val02: '  var maxIncreaseKeepingSkyline = function(grid) {\n' +
          '    let sum = 0;//计算总和\n' +
          '    let grid_vertical = [];//存放竖直方向的天际线\n' +
          '    let grid_horizontal = [];//存放水平方向的天际线\n' +
          '\n' +
          '    for(let i = 0; i < grid.length; i++){\n' +
          '      let h = grid[i][0];\n' +
          '      for(let j = 0; j < grid[i].length; j++){\n' +
          '        if(i===0){\n' +
          '          grid_vertical[j] = grid[i][j];\n' +
          '        }\n' +
          '\n' +
          '        //竖直方向的天际线筛选\n' +
          '        if(grid_vertical[j] < grid[i][j]){\n' +
          '          grid_vertical[j] = grid[i][j];\n' +
          '        }\n' +
          '\n' +
          '        //水平方向的天际线筛选\n' +
          '        if(j+1 < grid[i].length){\n' +
          '          if(h > grid[i][j+1]){\n' +
          '            grid_horizontal[i] = h;\n' +
          '          }else{\n' +
          '            h = grid[i][j+1];\n' +
          '            grid_horizontal[i] = h;\n' +
          '          }\n' +
          '        }\n' +
          '      }\n' +
          '    }\n' +
          '\n' +
          '    //进行最大化增高\n' +
          '    for(let i = 0; i < grid.length; i++){\n' +
          '      for(let j = 0; j < grid[i].length; j++){\n' +
          '        var maxNum = grid_horizontal[i];\n' +
          '        if(grid_vertical[j] < grid_horizontal[i]){\n' +
          '          maxNum = grid_vertical[j];\n' +
          '        }\n' +
          '        sum = sum +(maxNum - grid[i][j])\n' +
          '      }\n' +
          '    }\n' +
          '    return sum;\n' +
          '  };',
        str1: ' [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]',
        str2: '',
      }
    },
    methods: {
      commitStr () {
        //将字符串转成二维数组
        var grid = this.str1.replace("[","").replace(/\]/g,"]-").trim().split("]-");
        for(var i = 0; i < grid.length; i++){
          if(grid[i].trim() === ""){
            grid.splice(i,1);
            i--;
            continue;
          }
          var tempArr = grid[i].replace("[","").split(",");
          for(var j = 0; j < tempArr.length; j++){
            if(tempArr[j].trim() === ""){
              tempArr.splice(j,1);
              j--;
              continue;
            }
            tempArr[j] = parseInt(tempArr[j]);
          }
          grid[i] = tempArr;
        }
        var sum = maxIncreaseKeepingSkyline(grid);
        this.str2 = sum;
      },
      cleanCode () {
        this.str1 = '';
        this.str2 = '';
      }
    },
  }

</script>
<style>
  @c MaintainingTheUrbanSkyline {
    @d wrap {
      p{
        text-align: center;
      }
    }
  }
</style>
