const circle = require('./a1.js');
var {foo}=require('./my-lib/my-module')

console.log(`半径为 4 的圆的面积是${circle.area(4)} `);
foo(10,10)