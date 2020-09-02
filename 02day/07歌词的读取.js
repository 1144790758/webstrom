const readLine = require('readline')
const fs = require('fs')

function read_song(song_name){
    var rl = readLine.createInterface({
        input: fs.createReadStream(song_name, 'utf-8')
    })
    var show_time=0
    rl.on('line', input => {
        let reg = /^\[\d+.*?]/g
        let time = /(\d+\.+\d+)|(\d+)+/g

        let res = input.match(reg)
        if (res != null) {
            let the_time = res[0].match(time)
            let rest_time= parseInt(the_time[0], 10) * 60 * 1000 + parseFloat(the_time[1] * 1000)
            let timer = setTimeout(() => {
                console.log(input.replace(reg,''))
                show_time=rest_time
            },rest_time-show_time)
        }else {
            console.log(input)
        }
    })
}

exports.read_song=read_song