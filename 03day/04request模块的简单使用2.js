const request = require('request')
const fs=require('fs')
const path=require('path')

var arg = process.argv[2]
url_addr='https://dlc2.pconline.com.cn/filedown_51614_13933232/CpWYhh5l/84.0.4147.135_chrome_installer_32.exe'

var writer=fs.createWriteStream('./dl'+path.extname(url_addr))

var r=request(url_addr, (error, response, body) => {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    let i=Math.ceil(body.length/writer.writableHighWaterMark)

    function ww(writer){
        var flag=true
        for (var j = 0; j < i; j++) {
            flag=writer.write(body)
            // if (flag===false){
            //     writer.on('drain',ww)
            // }
        }
    }
    ww(writer)
})
