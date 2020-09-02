const fs = require('fs')
const ProgressBar = require('progress');

// process.argv 获取的是命令行所有的参数从 node xxx.js 我的参数1 我的参数2
args = process.argv.slice(2)//对数组进行切片从哪里到哪,返回切下来的数据
console.log(process.argv)
var readStream = fs.createReadStream(args[0])
var writeStream = fs.createWriteStream(args[1])

fs.stat(args[0], (err, stats) => {
    var length = stats.size
    //进度条控件
    var bar = new ProgressBar('progress: [:bar] :rate/bps :percent :etas',
        {total: length, width: 30, complete: '*'});
    //为readStream添加data事件时会触发流的流动,然后一直循环读取了
    readStream.on('data', data => {
        // console.log(data);
        writeStream.write(data, err => {
            if (!err) {
                bar.tick(data.length);  //进度步长
            }
        })
    })

})