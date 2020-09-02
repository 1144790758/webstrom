const request = require('request')
const fs=require('fs')
const path=require('path')

var arg = process.argv[2]
url_addr='https://dlc2.pconline.com.cn/filedown_51614_13933232/XRsglnA9/84.0.4147.135_chrome_installer_32.exe'

var r=request(url_addr, (error, response, body) => {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body);
})

var stream=fs.createWriteStream('./dl'+path.extname(url_addr))
r.pipe(stream)
// console.log(stream.writableObjectMode);