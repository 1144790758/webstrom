const fs = require('fs')
const ProgressBar = require('progress');

// process.argv ��ȡ�������������еĲ����� node xxx.js �ҵĲ���1 �ҵĲ���2
args = process.argv.slice(2)//�����������Ƭ�����ﵽ��,����������������
console.log(process.argv)
var readStream = fs.createReadStream(args[0])
var writeStream = fs.createWriteStream(args[1])

fs.stat(args[0], (err, stats) => {
    var length = stats.size
    //�������ؼ�
    var bar = new ProgressBar('progress: [:bar] :rate/bps :percent :etas',
        {total: length, width: 30, complete: '*'});
    //ΪreadStream���data�¼�ʱ�ᴥ����������,Ȼ��һֱѭ����ȡ��
    readStream.on('data', data => {
        // console.log(data);
        writeStream.write(data, err => {
            if (!err) {
                bar.tick(data.length);  //���Ȳ���
            }
        })
    })

})