const ProgressBar = require('progress')
const https=require('https')

var req = https.request({
    host: 'github.com',
    port: 443,
    path: '/seata/seata/archive/develop.zip'
});

req.on('response',response => {
    console.log(response.headers['content-length'])
    var len = parseInt(response.headers['content-length'], 10);
    var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: len
    });
    response.on('data', function (chunk) {
        bar.tick(chunk.length);
    });

    response.on('end', function () {
        console.log('\n');
    });

})
req.end()