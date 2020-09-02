const readLine = require('readline')
//它是异步的,监听命令行,而且后面的程序也会立马执行,将事件发生时才会处理
const fs=require('fs')

const my_fs=require('./03文件缓冲区处理-文件分段处理后复制')

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
//每当 input 流接收到接收行结束符（\n、\r 或 \r\n）时触发 'line' 事件。
// 通常发生在用户按下 <Enter> 键或<Return> 键。
// 监听器函数被调用时会带上一个包含接收的那一行输入的字符串
rl.on('line', input => {
    switch (input) {
        case 'readFile':
            console.log(`输入的是${input}即将读取文件...\n`)
            break;
        case 'exit':
            //触发close()事件,关闭前会执行close监听器方法
            rl.close()
            break;
        default:
            console.log(`输入的是${input}`)
            break
    }
})

rl.on('close',()=>{
    // 因为readline模块只要一开始获取用户输入就不会结束，必须使用这种直接的方式来结束程序
    console.log("bye !")
    process.exit(0)
})
