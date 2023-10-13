//导入http模块
const http = require('http');
// 导入url模块
const url = require('url');

//创建服务对象
const serve = http.createServer((request, response) => {
    // 解析request.url
    let res = url.parse(request.url, true);
    // 路径
    let pathname = res.pathname;
    // 查询字符串
    let keyword = res.query.keyword;
    console.log(keyword);
    response.end('url');
})

//监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动");
})