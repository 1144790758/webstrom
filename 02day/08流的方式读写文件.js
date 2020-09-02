// const fl=require('./07歌词的读取')
// fl.read_song("song.lrc") //试验上一个模块的导出是否正常

// 文件流的方式读取文件内容
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

var readStream=fs.createReadStream('song.lrc.gbk')
// 让文件流通过iconv过滤编码,再返回一个流
var stream=readStream.pipe(iconv.decodeStream('gbk'))
//输出到控制台
// stream.pipe(process.stdout)

//当流将数据块传送给消费者后触发。
//当调用 readable.pipe()， readable.resume()
//或绑定监听器到 'data' 事件时，流会转换到流动模式。
//当调用 readable.read() 且有数据块返回时，也会触发 'data' 事件。
stream.on('data',data=>{
    console.log("执行了")
    console.log(data)
})