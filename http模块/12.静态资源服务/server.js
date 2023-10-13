//导入http模块
const http = require('http')
const fs = require('fs')
const path = require('path')
const mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

//创建服务对象
const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.statusCode = 405;
        response.end('<h1>405 Method Not Allowed</h1>');
        return;
    }
    //获取请求url的路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    //声明变量
    let root = __dirname + '/page';
    //拼接文件路径
    let filePath = root + pathname;
    //读取文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            //设置字符集
            response.setHeader('content-type', 'text/html;charset=utf-8');
            switch (err.code) {
                case 'ENOENT':
                    response.statusCode = 404;
                    response.end('<h1>404 not found</h1>')
                case 'EPERM':
                    response.statusCode = 403;
                    response.end('<h1>403 Forbidden</h1>')
                default:
                    response.statusCode = 500;
                    response.end('<h1>Internal Server Error</h1>')
            }
            // response.statusCode = 500;
            // response.end("文件读取失败");
            return;
        }
        //获取文件的后缀名
        let ext = path.extname(filePath).slice(1);
        //获取对应的类型
        let type = mimes[ext];
        if (type) {
            //匹配到了
            if (ext == 'html') {
                response.setHeader('content-type', type + ';charset=utf-8');
            } else {
                response.setHeader('content-type', type);
            }
        } else {
            //没有匹配到
            response.setHeader('content-type', 'application/octet-stream');
        }
        // response.setHeader('content-type', 'text/html;charset=utf-8');
        response.end(data);
    })
})

//监听端口，启动服务
server.listen(9000, () => {
    console.log("服务已启动,端口9000监听中")
})