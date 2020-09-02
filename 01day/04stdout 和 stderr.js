//console.log 非常适合在控制台中打印消息。 这就是所谓的标准输出
//就是stdout ,而错误流输出 console.error 会输出到stderr流中
const chalk=require('chalk')
console.log(chalk.yellow("hello"))
console.error("这是个错误")