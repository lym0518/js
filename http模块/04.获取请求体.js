//1.导入http模块
const http = require('http')

//2.创建服务对象
const serve = http.createServer((request, response) => {
    // 声明一个变量
    let body = '';
    // 绑定事件
    request.on('data', chunk => {
        body += chunk;
    })
    // 绑定end事件
    request.on('end', () => {
        console.log(body);
        // 响应
        response.end('hello');
    })
})

//3.监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动")
})