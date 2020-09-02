const fs = require('fs')
//循环读取只能同步的进行,异步会while true 死循环
var buff = Buffer.alloc(100)

var mycopy_file = function (origin, target) {
    fs.stat(origin, (err, stats) => {
        let size = stats.size
        //注意flags必须是r+读
        fs.open(origin, 'r+', (err, fd) => {
            var point = 0;
            var bytesRead = 0;
            while (size > 0) {
                bytesRead = fs.readSync(fd, buff, 0, buff.length, point)
                point += bytesRead
                size -= bytesRead
                fs.appendFileSync(target, buff.slice(0, bytesRead))
            }
        })
    })
}

module.exports={
    mycopy_file
}
