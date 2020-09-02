const http=require('http')

const server = http.createServer((req, res) => {
    // req 是一个 http.IncomingMessage 实例，它是可读流。
    // res 是一个 http.ServerResponse 实例，它是可写流。

    var body=''
    // 接收数据为 utf8 字符串，
    // 如果没有设置字符编码，则会接收到 Buffer 对象。
    req.setEncoding('utf-8')
    // 如果添加了监听器，则可读流会触发 'data' 事件。
    req.on('data',chunk=>{
        body+=chunk
    })
    // 'end' 事件表明整个请求体已被接收。
    req.on('end',()=>{
        console.log(body)
        console.log(typeof body)
        try {
            var data = JSON.parse(body);
            // 响应信息给用户。
            res.write(data);
            res.end();
        } catch (er) {
            res.statusCode=500
            res.end(`错误: ${er.message}`)
        }
    })

});

server.listen(1337)

