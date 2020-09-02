const request=require('request')

var arg=process.argv[2]

//有道词典翻译公共接口
//http://fanyi.youdao.com/openapi.do?keyfrom
// =node-translator&key=2058911035&type
// =data&doctype=json&version=1.1&q=参数
request('http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q='+arg
    ,(error, response, body) =>{
    if (!error){
        // console.log(typeof response)
        // console.log(body)
        json_body=JSON.parse(body)
        console.log(json_body.translation.toString());
        console.log(json_body.basic.explains.toString());
    }
}
)