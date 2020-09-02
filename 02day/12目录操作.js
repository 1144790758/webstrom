const fs = require('fs');

//创建一个目录,如果目录本身已经存在则不会创建,直接执行回调函数(前提是recursive:true)
//fs.mkdir(path[,option],callback),option中可以设置是否recursive递归创建
fs.mkdir('./testDir/a/b',{recursive:true},()=>{
    console.log('目录创建成功')
})

//删除一个目录
// fs.rmdir(path[,options],callback)
// fs.rmdirSync(path[,options])
//option也可以设置recursive:true是否递归,此外还可以设置重试超时等
//具体事项官网详细查看
fs.rmdir('./testDir/a',{recursive:false},err => {
    if (err){
        console.log(err.message)
    }else {
        console.log(`删除成功`)
    }
})