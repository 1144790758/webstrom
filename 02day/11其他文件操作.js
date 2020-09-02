const fs=require('fs')
//验证路径是否存在,注意是验证的目录路径
fs.exists('F:\\my_project\\WebStromProject\\pro1\\02day',
    function(exists){
        if (exists){
            console.log('路径有效')
        }
    })
//fs.stat(path,callback(err,stats)
//stats对象包含了当前文件的许多属性
fs.stat('F:\\my_project\\WebStromProject\\pro1\\02day',(err, stats) => {
    if (!err){
        console.log('它是不是一个目录?'+stats.isDirectory())
    }else {
        console.log(err.message)
    }
})

//重命名文件或目录或移动文件
// fs.rename(oldPath,newPath,callback)
// fs.renameSync(oldPath,newPath)

// fs.unlink(path,callback(err))
// fs.unlinkSync(path)
fs.unlink('./a2',err => {
    if (!err){
        console.log('delete success')
    }
})
