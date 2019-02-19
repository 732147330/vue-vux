<template lang="jade">
  -var c = 'HtmlToJade'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    p Html to Jade auto
    group(title="Html代码")
      div(slot="other")
        x-button(mini, type="warn", @click.native="cleanCode()") 清空代码
        x-button(mini, type="primary", @click.native="copyHtmlCode()") 复制代码
      x-textarea(:show-counter="false", :rows="5", :height="220", @on-change="htmlToJade(htmlCode)",v-model="htmlCode")
    group(title="Jade代码")
      div(slot="other")
        x-button(mini, type="primary", @click.native="copyJadeCode()") 复制代码
      x-textarea(:show-counter="false", :rows="5", :height="220" , v-model="jadeCode", readonly)

    //复制文本框
    textarea(id="codeText", v-model="tempCode", style="width: 0;height: 0;overflow: hidden;border: none;background: transparent; position: absolute;z-index: -1")



</template>

<script>
  import { XButton, XTextarea, Group } from 'vux'

  //全部替代的函数
  let allReplace = (tempString,oldVal,newVal) => {
    if(tempString.search(/\/</i) > -1){
      return tempString;
    }
    let reg = new RegExp(oldVal,"g");
    return tempString.replace(reg,newVal);
  }
  //获取有属性的标签头
  let getLabelHead = (headStr) => {
    let headString = headStr
    let index1 = headString.search(/\s@\w+/i);//@的下标
    let index2 = headString.search(/\s:\w+/i);;//：的下标
    let index3 = headString.search(/\s\w+/i);;//属性字母的下标
    if(index1 == -1 && index2 == -1){
      headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i)+1,headString.search(/\s\w+/i));
    }else if(index2 == -1 && index3 == -1){
      headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i)+1,headString.search(/\s@\w+/i));
    }else if(index1 == -1 && index3 == -1){
      headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i)+1,headString.search(/\s:\w+/i));
    }else if(index1 == -1 && index3 != -1 && index2 != -1){
      if(index3 < index2){
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i)+1,headString.search(/\s\w+/i));
      }else{
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i)+1,headString.search(/\s:\w+/i));
      }
    }else if(index2 == -1 && index3 != -1 && index1 != -1){
      if(index3 < index1){
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i)+1,headString.search(/\s\w+/i));
      }else{
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i)+1,headString.search(/\s@\w+/i));
      }
    }else if(index3 == -1 && index1 != -1 && index2 != -1) {
      if (index1 < index2) {
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i) + 1, headString.search(/\s@\w+/i));
      } else {
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i) + 1, headString.search(/\s:\w+/i));
      }
    }else{
      if (index1 < index2 && index1 < index3) {
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i) + 1, headString.search(/\s@\w+/i));
      } else if (index2 < index1 && index2 < index3 ){
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i) + 1, headString.search(/\s:\w+/i));
      }else if (index3 < index1 && index3 < index2 ){
        headString = headString.substring(headString.search(/<\w+\W*\w*\s*\w+/i)+1,headString.search(/\s\w+/i));
      }
    }
    return headString;
  }

  export default {
    components: {XButton, XTextarea, Group},
    data() {
      return {
        htmlCode: '<datetime-view v-model="value1" ref="datetime" :format="format"></datetime-view>\n' +
          '    <p class="info">{{ $t(\'Current value\') }}: {{ value1 }}</p>\n' +
          '    <div style="padding:15px;">\n' +
          '      <x-button @click.native="changeValue(\'2017-11-11\')" :disabled="format !== \'YYYY-MM-DD\'" type="primary"> {{ $t(\'Set 2017-11-11\') }} </x-button>\n' +
          '      <x-button @click.native="changeValue(\'2016-08-08\')" :disabled="format !== \'YYYY-MM-DD\'" type="primary"> {{ $t(\'Set 2016-08-08\') }} </x-button>\n' +
          '      <x-button @click.native="toggleFormat" :disabled="format === \'YYYY-MM-DD HH\'" type="primary"> {{ $t(\'Toggle format\') }} </x-button>\n' +
          '      <x-button @click.native="changeFormatAndValue" type="primary"> {{ $t(\'Format 2019-10-23 10\') }} </x-button>\n' +
          '      <x-button @click.native="showPopup = true" type="primary"> {{ $t(\'Show popup with datetime-view\') }} </x-button>\n' +
          '    </div>\n' +
          '    <div v-transfer-dom>\n' +
          '      <popup v-model="showPopup">\n' +
          '        <datetime-view v-model="value2"></datetime-view>\n' +
          '      </popup>\n' +
          '    </div>',
        jadeCode: '',
        tempCode: '',
      }
    },
    methods: {
      htmlToJade (htmlCode) {
        let specialAttributeArr = ['required'];//针对处理特殊的单个属性，如：required
        let oldStrArray = htmlCode.replace(/\n/g,"<br111>").split("<br111>");
        let tabStrArray = [];
        let classStrArray = [];
        let newStrArray = [];
        let labelArray = [];
        let classCountArray = [];//阶级权重
        let classCount = 0;
        let scriptFlag = false;//判断是否是script标签
        let innerFlag =false;//判断是否还在标签内
        let i = 0;
        //进行分行
        oldStrArray.forEach( v => {
          let codeString = v;
          codeString = allReplace(codeString,"<","<br111><")
          let classArray = codeString.split("<br111>")
          if(classArray.length > 0){
            classArray.forEach( v1 => {
              if(v1.trim("").length == 0){
                return;
              }
              tabStrArray[i] = v1;
              i++
            });
          }else{
            tabStrArray[i] = codeString;
            i++;
          }
        });

        //进行分级
        let c = 0;
        let rank = 0;//目前所在等级
        tabStrArray.forEach( v => {
          let codeString = v;
          let labelString = "";
          if(codeString.search(/<\w+\W*\w*>/i) > -1){
            labelString = codeString.substring(codeString.search(/<\w+\W*\w*/i)+1,codeString.search(/\s*>/i)).replace(/\//i,"");
            labelArray[classCount] = labelString.trim();
            classCountArray[classCount] = classCount;
            classCount++;
            rank++;
          }else if(codeString.search(/<\w+\W*\w*\s*\w+/i) > -1){
            labelString = codeString.substring(codeString.search(/<\w+\W*\w*\s*\w*/i),codeString.search(/\s*>/i)+1);
            labelString = getLabelHead(labelString);
            labelArray[classCount] = labelString.trim();
            classCountArray[classCount] = classCount;
            classCount++;
            rank++;
          }
          if(codeString.search(/<\/\w+\W*\w*/i) > -1){
            rank--;
            labelString = codeString.substring(codeString.search(/<\/\w+\W*\w*/i)+2,codeString.search(/\s*>/i));
            if(labelArray.length > 0){
              let c1 = labelArray.length ;
              for( ;c1 >= 0 ; c1--){
                if(labelString == labelArray[c1]){
                  labelArray.splice(c1,1,"");
                  break;
                }
              }
              classCountArray[c1] = rank;
            }
          }
          if(codeString.search(/\/\s*>/i) > -1){//自闭标签
            rank--;
            labelArray.splice(classCount-1,1,"");
            classCountArray[classCount-1]=rank;
          }
          classStrArray[c] = v
          c++;
        });

        //进行转换
        let j = 0;
        classStrArray.forEach( v => {
          let codeString = v;
          let labelFlag = false;//判断是否是有标签

          if(codeString.search(/<!DOCTYPE html>/i) > -1){//特殊处理<!DOCTYPE html>标签
            codeString = codeString.replace(/<!/i,"").replace(/>/i," ");
            labelFlag = true;
          }
          if(codeString.search(/<script\s\w/i) > -1 || codeString.search(/<script/i) > -1){//特殊处理script标签
            scriptFlag = true;
          }
          if(codeString.search(/<\/script>/i) > -1){//特殊处理script标签
            scriptFlag = false;
          }
          if(codeString.search(/<\w+\W*\w*>/i) > -1){//一般标签开始处理(\W*\w*是针对有特殊字符的标签，如：x-dialog)
            codeString =  codeString.replace(/</i,"").replace(/\/\s*>/i," ").replace(/>/i," ");
            labelFlag = true;
          }
          if(codeString.search(/<\w+\W*\w*\s*\w+/i) > -1) {//含有属性的标签开始处理(\W*\w*是针对有特殊字符的标签，如：x-dialog)
            let headString = codeString.substring(codeString.search(/<\w+\W*\w*\s*\w*/i),codeString.search(/\s*>/i)+1);
            headString = getLabelHead(headString);
            codeString = codeString.replace("<"+headString,""+headString+"(").replace(/\(\s*/i,"(").replace(/\/\s*>/i,") ").replace(/>/i,") ");
            let tempArray = codeString.split("");
            let z = 0;
            for( z = tempArray.length ; z > 0 ; z--){
              if(tempArray[z]=="\"" || tempArray[z]=="\'"){
                innerFlag = true;
                break;
              }
              if(tempArray[z]==")"){
                innerFlag = false;
                break;
              }
            }
            let attributeString = codeString.substring(codeString.search(/\(/i)+1,z);
            let tempArray1 = attributeString.split("");

            let attributeFlag = false;//判断是否进入属性里面
            let count = 0;
            for(let k = 0; k < tempArray1.length; k++){
              let temp = tempArray1[k];
              if(temp == "="){
                attributeFlag = true;
              }else if(temp == "\"" && count > 0 && attributeFlag){
                attributeFlag = false;
                tempArray1[k] = "\","
                count = 0;
              }else if(temp == "\"" && attributeFlag){
                count ++;
              }
            }
            let tempString = tempArray1.join("");

            if(specialAttributeArr.length > 0){//特殊属性处理，如：required
              specialAttributeArr.forEach( v1 => {
                if(tempString.search(v1) > -1){
                  let temp2 = tempString.substring(tempString.search(v1),tempString.search(v1)+v1.length);
                  tempString = tempString.replace(temp2,temp2+",");
                }
              })
            }
            codeString = codeString.replace(/\s*\(/i,"(").replace(attributeString,tempString).replace(/,\s*\)/i,")");
            labelFlag = true;
          }
          if(codeString.search(/<\/\w+\W*\w*/i) > -1){//标签结束处理(\W*\w*是针对有特殊字符的标签，如：x-dialog)
            codeString =  codeString.replace(/<\/\w+\W*\w*/i,"").replace(/>/,"");
            labelFlag = false;
          }
          if(codeString.search(/\/\s*>/i) > -1){
            labelFlag = false;
          }
          if(!innerFlag && !labelFlag && !scriptFlag && (codeString.search(/\w/i) > -1 || codeString.search(/[\u4e00-\u9fa5]/g) > -1) && codeString.search(/</i) < 0){//文字段落处理
            let pageString =  codeString.substring(codeString.search(/\s\w/i), codeString.length);
            let tempString =  pageString.replace(/\s+/i,"| ");
            codeString = codeString.replace(pageString,tempString);
          }
          if(codeString.trim("").length == 0){
            return;
          }
          newStrArray[j] = codeString;
          j++;
        });

        //处理段落分级
        let p = 0;
        newStrArray.forEach( v => {
          let codeString = v;
          if((codeString.search(/\|\s\w+/i) > -1 || codeString.search(/\|\s[\u4e00-\u9fa5]/g) > -1)&& p!=0){//文字段落处理
            classCountArray.splice(p,0,classCountArray[p-1]);
          }
          if(p < classCountArray.length){//进行权重缩进
            for(let z = classCountArray[p]; z > 0 ; z--){
              codeString = "    "+codeString;
            }
          }
          newStrArray[p] = codeString;
          p++;
        });

        this.jadeCode = newStrArray.join("<br111>").replace(/<br111>/g,"\n");
      },
      copyHtmlCode () {
        this.tempCode = this.htmlCode;
        this.copyCodeMethod();
      },
      copyJadeCode () {
        this.tempCode = this.jadeCode;
        this.copyCodeMethod();
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
      cleanCode () {
        this.htmlCode = "";
        this.tempCode = "";
      }
    },
  }

</script>
<style>
  @c HtmlToJade {
    @d wrap {
      p{
        font-size: 20px;
        text-align: center;
      }
    }
  }
</style>
