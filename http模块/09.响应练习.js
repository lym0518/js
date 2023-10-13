//导入http模块
const http = require('http')

//创建服务对象
const serve = http.createServer((request, response) => {
    response.end(`
    <!DOCTYPE html>
    <html lang="zh-CN">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            td{
                padding: 20px 40px;
            }
            table,td{
                border-collapse: collapse;
            }
            table tr:nth-child(odd){
                background: #aef;
            }
            table tr:nth-child(even){
                background: #fcb;
            }
        </style>
    </head>

    <body>
    <table border="1">
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
    </table>
    <script>
        //获取所有的td
        let tds = document.querySelectorAll('td');
        //遍历
        tds.forEach(item => {
            item.onclick = function(){
                this.style.background = '#222';
            }
        })
    </script>
    </body>

    </html>
`);
})

//监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已启动,端口9000监听中")
})