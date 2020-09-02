const url=require('url')

// const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(myURL)
//将url对象转为一串url地址
console.log(url.format(myURL))

//url对象中有很多属性,可以直接 . 出来
console.log(myURL.hostname);

//url的拼接,url.resolve(from,to)
console.log(url.resolve('http://example.com/', '/one'));