<template lang="jade">
  -var c = 'FlattenedToDendritic'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p FlattenedToDendritic
    group(title="扁平化数组")
      x-textarea(:show-counter="false", :rows="5", :height="220" , v-model="flattenedVals", readonly)
    group(title="树状化数组")
      x-textarea(:show-counter="false", :rows="5", :height="220" , v-model="dendriticVals", readonly)
      textarea(id="jadeText", v-model="jsCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")
    x-button(mini, type="primary", @click.native="copyCode()") 复制js逻辑代码


</template>

<script>
  import { XButton, XTextarea, Group } from 'vux'
  //test
  import vuxMenuDataTest from 'assets/json/vux/menu/menuDataTest'

  export default {
    components: {XButton, XTextarea, Group},
    data() {
      return {
        flattenedVals: "[\n" +
          "\n" +
          "  {\n" +
          "    \"name\": \"accounts\",\n" +
          "    \"label\": \"管理员\",\n" +
          "    \"index\": \"1,1\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"modules_list\",\n" +
          "    \"label\": \"模块列表\",\n" +
          "    \"index\": \"1,2,1\",\n" +
          "    \"comp\": null\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"accounts_list\",\n" +
          "    \"label\": \"管理员列表\",\n" +
          "    \"index\": \"1,1,1\",\n" +
          "    \"comp\": null\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"system\",\n" +
          "    \"label\": \"系统管理\",\n" +
          "    \"index\": \"1\",\n" +
          "    \"comp\": null\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"modules\",\n" +
          "    \"label\": \"模块管理\",\n" +
          "    \"index\": \"1,2\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"tests\",\n" +
          "    \"label\": \"test\",\n" +
          "    \"index\": \"1,10\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"tests1111\",\n" +
          "    \"label\": \"test1111\",\n" +
          "    \"index\": \"1,1,2\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"tests1111\",\n" +
          "    \"label\": \"test1111\",\n" +
          "    \"index\": \"1,3\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"tests1111\",\n" +
          "    \"label\": \"test1111\",\n" +
          "    \"index\": \"1,1,2,1\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"tests1111\",\n" +
          "    \"label\": \"test1111\",\n" +
          "    \"index\": \"1,1,2,2\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  },\n" +
          "  {\n" +
          "    \"name\": \"tests1111\",\n" +
          "    \"label\": \"test1111\",\n" +
          "    \"index\": \"1,1,1,1\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  }\n" +
          ",\n" +
          "  {\n" +
          "    \"name\": \"tests1111\",\n" +
          "    \"label\": \"test1111\",\n" +
          "    \"index\": \"1,10,1\",\n" +
          "    \"comp\": \"module01\"\n" +
          "  }\n" +
          "]\n" +
          "\n",
        dendriticVals: "",
        jsCode: " flattenedToDendritic (){\n" +
          "        let list = vuxMenuDataTest;\n" +
          "        let tempObj = {};\n" +
          "        let dataArray= [];\n" +
          "        //自定义下标对象\n" +
          "        for(let i = 0; i < list.length; i++) {\n" +
          "          tempObj[list[i].index] = list[i]\n" +
          "        }\n" +
          "        console.log(tempObj)\n" +
          "        //数组嵌套\n" +
          "        let count1 = 0\n" +
          "        let count2 = 0;\n" +
          "        for(let i in tempObj){\n" +
          "          let en = tempObj[i];\n" +
          "          // let count  = en.index.split(\",\")[en.index.split(\",\").length-1]-1\n" +
          "          let parentIndex = en.index.substring(0,en.index.lastIndexOf(\",\"));\n" +
          "          if(parentIndex != \"\"){\n" +
          "            if(!tempObj[parentIndex].children){\n" +
          "              tempObj[parentIndex].children = [];\n" +
          "              count2 = 0;\n" +
          "            }else{\n" +
          "              count2 = tempObj[parentIndex].children.length;\n" +
          "            }\n" +
          "            tempObj[parentIndex].children[count2] = en;\n" +
          "          }else{\n" +
          "            dataArray[count1] = en;\n" +
          "            count1++;\n" +
          "          }\n" +
          "        }\n" +
          "        console.log(dataArray)\n" +
          "        //递归取数\n" +
          "        function getArray(data){\n" +
          "          for(var i in data){\n" +
          "            console.log(\"index:\"+i);\n" +
          "            console.log(\"data.name:\"+data[i].name);\n" +
          "            console.log(\"data.label:\"+data[i].label);\n" +
          "            console.log(\"data.index:\"+data[i].index);\n" +
          "            console.log(\"data.comp:\"+data[i].comp);\n" +
          "            console.log(\"*****************\");\n" +
          "            getArray(data[i].children)\n" +
          "          }\n" +
          "        }\n" +
          "        getArray(dataArray);\n" +
          "\n" +
          "        // this.flattenedVals = JSON.stringify(vuxMenuDataTest);\n" +
          "        this.dendriticVals = JSON.stringify(dataArray);\n" +
          "      } "
      }
    },
    methods: {
      flattenedToDendritic (){
        let list = vuxMenuDataTest;
        let tempObj = {};
        let dataArray= [];
        //自定义下标对象
        for(let i = 0; i < list.length; i++) {
          tempObj[list[i].index] = list[i];
        }
        // console.log(tempObj)
        //数组嵌套
        let count1 = 0;
        let count2 = 0;
        for(let i in tempObj){
          let en = tempObj[i];
          // let count  = en.index.split(",")[en.index.split(",").length-1]-1
          let parentIndex = en.index.substring(0,en.index.lastIndexOf(","));
          if(parentIndex != ""){
            if(!tempObj[parentIndex].children){
              tempObj[parentIndex].children = [];
              count2 = 0;
            }else{
              count2 = tempObj[parentIndex].children.length;
            }
            tempObj[parentIndex].children[count2] = en;
          }else{
            dataArray[count1] = en;
            count1++;
          }
        }
        // console.log(dataArray)
        //递归取数
        function getArray(data){
          for(var i in data){
            console.log("index:"+i);
            console.log("data.name:"+data[i].name);
            console.log("data.label:"+data[i].label);
            console.log("data.index:"+data[i].index);
            console.log("data.comp:"+data[i].comp);
            console.log("*****************");
            getArray(data[i].children)
          }
        }
        getArray(dataArray);

        // this.flattenedVals = JSON.stringify(vuxMenuDataTest);
        this.dendriticVals = JSON.stringify(dataArray);
      },
      copyCode () {
        var ele = document.getElementById("jadeText");
        ele.select();
        document.execCommand("Copy");
      }
    },
    created() {
      this.flattenedToDendritic();
    }
  }


</script>
<style>
  @c FlattenedToDendritic {
    @d wrap {
      p{
        font-size: 20px;
        text-align: center;
      }
    }
  }
</style>
