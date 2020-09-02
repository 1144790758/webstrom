const readLine = require('readline')
//它是异步的,监听命令行,而且后面的程序也会立马执行,将事件发生时才会处理
const fs=require('fs')

//逐行读取文本
rl2=readLine.createInterface({
    input:fs.createReadStream('03文件缓冲区处理-文件分段处理后复制.js')
})
rl2.on('line',input => {
    console.log(input)
})