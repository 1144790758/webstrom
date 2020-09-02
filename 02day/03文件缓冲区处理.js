//创建一个1024个字节的缓冲区
var buff=new Buffer(1024)

//往里面写东西,默认从开头开始写
buff.write("你好啊",0,'utf-8')
//从开头读两个字符,以utf-8来计算字符个数,中文需要占4位不然会显示不全
console.log(buff.toString('utf-8', 0, 3));
console.log(buff.toString('utf-8'))

//读取图片资源
const fs=require('fs')
var buff2=new Buffer(1024*50)
fs.readFile('./1.jpg',((err, data) => {
    //可以发现这个data是一个Buffer类型的数据,使用Buffer.toString()进行编码转换
    // data:image/png;base64, 浏览器加上就可以显示了
    console.log(data.toString('base64'));
}))

