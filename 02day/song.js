// readline实现一行一行读取歌词

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const readline = require('readline');

var readStream = fs.createReadStream(path.join(__dirname, './song.lrc')).pipe(iconv.decodeStream('gbk'));
var rl = readline.createInterface({ input: readStream });

var regex = /\[(\d{2}):(\d{2})\.(\d+)\](.+)/;
rl.on('line', function(line) {
    var time = regex.exec(line);
    if (time) {
        var m = parseInt(time[1]);
        var s = parseInt(time[2]);
        var ms = parseInt(time[3]);
        var all = m * 60 * 1000 + s * 1000 + ms;
        setTimeout(function() {
            console.log(time[4]);
        }, all);
    } else {
        console.log(line);
    }
});