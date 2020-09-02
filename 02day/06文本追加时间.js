const fs = require('fs')
const moment = require('moment')

var timer = setInterval(() => {
    var date = new Date()
    fs.appendFile(
        'time.txt',
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss") + '\n',
        'utf-8',
        err => {
            console.log(err)
        })
}, 1000)

