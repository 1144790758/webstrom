const fs=require('fs')

//option对象中interval 属性，指示轮询目标的频率（以毫秒为单位）
fs.watchFile("time.txt",{interval:200},(curr, prev) => {
    console.log(`当前的最近修改时间是: ${curr.mtime}`);
    console.log(`之前的最近修改时间是: ${prev.mtime}`);
})

//就连文件目录中的文件变化也能监视
fs.watchFile("../02day",{interval:200},(curr, prev) => {
    console.log(`是否目录:${curr.isDirectory()}当前的最近修改时间是: ${curr.mtime}`);
    console.log(`之前的最近修改时间是: ${prev.mtime}`);
})