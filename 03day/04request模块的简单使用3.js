const request = require('request')
const fs=require('fs')
const path=require('path')

var arg = process.argv[2]
url_addr='https://dlc2.pconline.com.cn/filedown_51614_13933227/cm47brfW/84.0.4147.135_chrome_installer_64.exe'

var writer=fs.createWriteStream('./dl'+path.extname(url_addr))

var r=request(url_addr, (error, response, body) => {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    //放入一个buffer中方便对其截取然后输入到流中
    var buff=Buffer.from(body,"binary")
    console.log(buff.length);

    for (var i = 0; i < buff.length;) {
        writer.cork()
        writer.write(buff.slice(i,i+1000));
        i+=1000
        writer.uncork()
    }
    writer.end(buff.slice(i-1000))
    console.log(writer.writableFinished)

})
