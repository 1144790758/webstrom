const fs=require('fs')
// 向可写流中写入数据一百万次。
// 留意背压（back-pressure）。
//所谓背压就是写入流写到缓冲池中满了,需要告诉生产者暂停生产,当池子释放后
//Writable Stream 会给生产者发送一个 drain(排出,排水) 消息，让它恢复生产
function writeOneMillionTimes(writer, data, encoding, callback) {
    let i = 10000;
    write();
    function write() {
        let ok = true;
        do {
            i--;
            if (i === 0) {
                // 最后一次写入。
                writer.write(data, encoding, callback);
            } else {
                // 检查是否可以继续写入。
                // 不要传入回调，因为写入还没有结束。
                //这时候并没有真正写入到文件中,还在往缓冲池中写
                //写到缓冲池不能写了就返回false,然后某一时刻触发drain事件
                //drain意义为排水,发生了此事件就意味着将数据排到目的文件了
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // 被提前中止。
            // 当触发 'drain' 事件时继续写入。
            console.log("drain  "+i)
                writer.once('drain', write);
        }
    }
}
writeOneMillionTimes(fs.createWriteStream(
    './data.txt'),
    '凎',
    'utf-8',
    ()=>{
        console.log("finish")
})