//1.导入http模块
const http = require('http')

//2.创建服务对象
const serve = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('Hello http server')
})

//3.监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动")
})