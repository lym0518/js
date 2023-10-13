//导入http模块
const http = require('http')
const fs = require('fs')

//创建服务对象
const serve = http.createServer((request, response) => {
    //获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    if ((pathname) === '/') {
        //读取文件内容
        let html = fs.readFileSync(__dirname + "/new.html")
        response.end(html);
    } else if (pathname === '/new.css') {
        let css = fs.readFileSync(__dirname + "/new.css")
        response.end(css);
    } else if (pathname === '/new.js') {
        let js = fs.readFileSync(__dirname + "/new.js")
        response.end(js);
    } else {
        response.statusCode = 404;
        response.end("<h1>404 Not Found</h1>")
    }

})

//监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动,端口9000监听中")
})