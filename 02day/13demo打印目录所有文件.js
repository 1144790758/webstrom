//用异步的方式去读文件目录顺序总是出现问题
//采用同步试下
const fs = require('fs')
const moment = require('moment')
const progress = require('progress')

let path = process.argv[2] || './'

//fs.readdir(path[, options], callback)
//{withFileTypes:true}带上后 files数组会是<fs.Dirent[]>
function read_directory(path, level) {
    fs.readdir(path, {withFileTypes: true}, (err, files) => {
        if (!err) {
            files.forEach(file => {
                if (file.isDirectory()) {
                    var prefix=''
                    for (let i = 0; i < level; i++) {
                        prefix+=('----')
                    }
                    console.log(prefix+file.name)
                    read_directory(path +file.name+"/",level+1)
                } else {
                    fs.stat(path + "./"+file.name, (err1, stats) => {
                        var prefix=''
                        for (let i = 0; i < level; i++) {
                            process.stdout.write('--');
                        }
                        process.stdout.write(`${file.name} 大小:${stats.size} 最后修改时间${stats.mtime}\n` );
                    })
                }
            })
        }
    })
}
read_directory(path,0)