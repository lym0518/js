const fs = require('fs')

fs.stat('./试验.mp4', (err, data) => {
    if (err) {
        console.log('操作失败');
    }
    console.log(data)
    console.log(data.isFile());
    console.log(data.isDirectory());
})

//相对路径参照物，命令行的工作目录
//绝对路径全局变量
console.log(__dirname)

fs.writeFileSync(__dirname + '/index.html', 'love');