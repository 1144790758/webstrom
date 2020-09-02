const http=require('http')
const fs=require('fs')

var server=http.createServer()

server.on('request',(req,res)=>{
    var buffer=fs.readFileSync('./1.jpg')
    // console.log(req)
    // console.log(res)
    res.end(buffer.toString('base64'))
})
server.listen(8080)