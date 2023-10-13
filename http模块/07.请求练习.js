//1.导入http模块
const http = require('http')

//2.创建服务对象
const serve = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8')
    // 获取请求的方法
    let { method } = request;
    // 获取请求的url路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    console.log(method);
    console.log(pathname);
    // 判断
    if (method == 'GET' && pathname == '/login') {
        // 登录情形
        response.end('登录');
    }
    else if (method == 'GET' && pathname == '/reg') {
        // 注册情形
        response.end('注册');
    } else {
        response.end('404 not found');
    }
})

//3.监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动,端口9000监听中")
})