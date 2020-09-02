//用异步的方式去读文件目录顺序总是出现问题
//采用同步试下
//还是出现了打印顺序的问题,结果发现fs.stat是异步的,应该使用同步的fs.statSync(但是好像不是很需要?)
const fs = require('fs')
const moment = require('moment')
const path2=require('path')

let path = process.argv[2] || './'


//fs.readdir(path[, options], callback)
//{withFileTypes:true}带上后 files数组会是<fs.Dirent[]>
function read_directory(path, level) {
    var files = fs.readdirSync(path, {withFileTypes: true});

    var prefix=new Array(level+1).join('│  ')

    files.forEach(file=>{
        if (file.isDirectory()) {
            console.log(`${prefix}├──${file.name}`)
            read_directory(path2.join(path,file.name),level+1)
        } else {
            console.log(`${prefix}└──${file.name}`)
        }
    })
}
read_directory(path,0)
