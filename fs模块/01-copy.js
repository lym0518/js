const fs = require('fs')
//方式一 readFile
// let data = fs.readFileSync('./试验.mp4')
// fs.writeFileSync('./试验-2.mp4', data)
//方式二 流式
//创建读取流对象
const rs = fs.createReadStream('./试验.mp4')
const ws = fs.createWriteStream('./试验3.mp4')
//绑定data事件
rs.on('data', chunk => {
    ws.write(chunk);
})