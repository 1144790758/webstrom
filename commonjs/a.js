//变量记得写前面,不然导出的时候找不到变量
const a=100
var foo=(a,b)=>{
    return a+b
}
module.exports={
    a:a,
    foo
}
