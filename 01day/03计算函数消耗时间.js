var foo=()=>{
    console.log("test......")
    for (var i = Date.now(); Date.now()-i <2000 ;){}

}
var getTime=()=>{
    //label 是表示这个timer的标志
    console.time("unique_identify")
    foo()
    console.timeEnd("unique_identify")
}
getTime()
