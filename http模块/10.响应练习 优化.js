//导入http模块
const http = require('http')
const fs = require('fs')

//创建服务对象
const serve = http.createServer((request, response) => {
    //读取文件内容
    let html = fs.readFileSync(__dirname + "/new.html")
    response.end(html);
})

//监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动,端口9000监听中")
})