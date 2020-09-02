const querystring = require('querystring')

//querystring模块一般用来编码url实现百分比化编码
//https://fanyi.baidu.com/?aldtype=16047#zh/mau/实现
//编码后  https://fanyi.baidu.com/?aldtype=16047#zh/mau/%E5%AE%9E%E7%8E%B0
console.log(querystring.escape('实现'));//%E5%AE%9E%E7%8E%B0
//一般用于百分比化中文然后访问
console.log('https://fanyi.baidu.com/?aldtype=16047#zh/mau/'+
    querystring.escape('实现'));

//与上者相反的从百分比字符串转为了正常显示的格式
console.log(querystring.unescape("%E5%AE%9E%E7%8E%B0"))

//querystring.parse(str[, sep[, eq[, options]]])
//字符串的解析sep <string> 用于在查询字符串中分隔键值对的子字符串。默认值: '&'。
//eq <string> 用于在查询字符串中分隔键和值的子字符串。默认值: '='
console.log(querystring.parse('a=1&b=2&c=3').b);

//querystring.stringify(obj[, sep[, eq[, options]]])
//与上面parse方法是相反的,可以由对象生产固定格式如'a=1&b=2&c=3'的字符串
//参数意义也同上者
console.log(querystring.stringify({a:1,b:2,c:3,foo:'abc'}))