//导入http模块
const http = require('http');
// 导入url模块
const url = require('url');

//创建服务对象
const serve = http.createServer((request, response) => {
    // 实例化url对象
    let url = new URL(request.url, 'http://127.0.0.1');
    // 输出路径
    console.log(url.pathname);
    // 输出keyword查询字符串
    console.log(url.searchParams.get('keyword'))
    response.end('url');
})

//监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动");
})