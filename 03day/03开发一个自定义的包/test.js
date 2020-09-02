var test=require('node-validator')
var fs=require('fs')

const check =test();
console.log(check.isEmail("1145790758@qq.com"));
console.log(check.isPhone("136383259854"));

var stream=fs.createWriteStream('a.txt')


var readstream=fs.createReadStream("test.js")
readstream.on('data',chunk=>{
    console.log(chunk.toString('utf-8'))
})