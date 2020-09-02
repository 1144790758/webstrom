//语法 /pattern/模式

//i是搜索模式,表示忽略大小写,g全局匹配找到了第一个还往后边找,m执行多行匹配
var patt=/abc/i

//常用方法search()用来匹配然后返回位置
//replace()用来替换匹配的字符然后返回替换后的字符串,原字符串没有被修改
//match()用来返回匹配的字符串列表
//split()用正则来分割数组
//四者都是字符串的方法
var str='123abclkja133,a,r3,we4,4sdfg/gsdg'
console.log(str.search(patt));//3
console.log(str.replace(patt, 'DDDD'));
console.log(str.split(/[\D]+/g))

// [ ] 其中内容表示匹配其中任何一个字符
// [abc] a,b,c都可以匹配到,[A-z] 匹配所有的英文字母,[^abc]匹配除开abc的所有字符
var patt2=/[abc]/g
str2='1231rqwratgfc'
console.log(str2.search(patt2));

//(red|green) 括号符用于匹配一个整体,中间用'|'符号可以添加多个或者条件
var str3='red yellow blue black pink red green green greenn'
var patt3=/(red|green|greenn)/g
console.log(str3.match(patt3));

//常用的元匹配
// \d数字 \w单词 \s空白字符 .单个字符除了换行符结束符
var patt4=/\d/g
var str4='affa4fg89'
console.log(str4.match(patt4))

//量词系统
//n+ 至少一个  n* 0个或多个  n? 0个或1个  n{x} x个 n{x,y} x-y个  n{x,} 至少x个  n{,y}至多y个
var patt5=/\d+/g //贪婪匹配多个数字
var str5='affa4fg89'
console.log(str5.match(patt5));

//开始 与结束符匹配
//n$ 匹配以n结尾的字符串
//^n 匹配以n开头的字符串
var patt6=/^1(3|7)\d{9}$/g
var str6='13509483699'
console.log(patt6.test(str6));

str7='[00:04.63]W词：左右 曲：李键'
patt7=/^\[\d+.*?]/g
console.log(str7.match(patt7));

str8="[ '[00:04.63]' ]"
let min=/(\d+\.+\d+)|(\d+)+/g
console.log(str8.match(min));

s=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>{{{styles}}}</style>
</head>
<body>
  <div class="vs">
    {{{content}}}
  </div>
</body>
</html>
`
p=/\{\{\{styles}}}/g
console.log(s.replace(p,'啦啦啦'));

