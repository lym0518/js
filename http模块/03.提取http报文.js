//1.导入http模块
const http = require('http')

//2.创建服务对象
const serve = http.createServer((request, response) => {
    //获取请求的方法
    console.log(request.method);
    // 获取请求的url
    console.log(request.url);
    // 获取http协议的版本号
    console.log(request.httpVersion);
    // 获取http请求头
    console.log(request.headers);

    response.end('Hello http server')
})

//3.监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动")
})