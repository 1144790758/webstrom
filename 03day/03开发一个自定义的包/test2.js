//测试nodejs循环1000w次所用时间

console.time("a")
for (let i = 0; i < 1000000000; i++) {
}
console.timeEnd('a')