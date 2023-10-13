//导入http模块
const http = require('http')

//创建服务对象
const serve = http.createServer((request, response) => {
    // 1.设置响应状态码
    // response.statusCode = 203;
    // 2.响应状态描述
    // response.statusMessage = 'hello';
    // 3.设置响应头
    // response.setHeader('content-type', 'text/html;charset=utf-8');
    // 4.设置响应体
    response.write("welcome")
    response.end('404 not found');
})

//监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动,端口9000监听中")
})