//参数固定第一个是node程序主路径,第二个是当前文件js路径,然后就是node 01express.js joe=123中的joe了
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})