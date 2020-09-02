//fs-extra是fs的升级版,若没有回调函数则返回promise
//fs-extra也包含了fs的功能
const fs=require('fs-extra')
fs.copy('./01获取命令行参数.js','01获取命令行参数.js.back').then(data=>{
    console.log("复制成功")
}).catch(error=>{
    console.log(error)
})
console.time("同步")
var data=fs.readFileSync('./01获取命令行参数.js','utf-8')
console.log(data);
console.timeEnd("同步")

console.time("异步")
var data=fs.readFile('./01获取命令行参数.js','utf-8',(error,data)=>{
    console.log(data)
})
console.timeEnd("异步")

console.time("异步2")
//没有回调函数就返回promise对象更加方便,这是fs-extra的特性
var data=fs.readFile('./01获取命令行参数.js','utf-8').then(data=>{
    console.log(data);
})
console.timeEnd("异步2")
