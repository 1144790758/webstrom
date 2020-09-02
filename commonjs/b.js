var module_a=require('./a')//自定义的模块导入要写 ./ 不然找不到模块
// var mm=require('my-module')
console.log(module_a.foo(1, 2));