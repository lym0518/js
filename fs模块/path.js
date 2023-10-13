const fs = require('fs')
const path = require('path')

//resolve
console.log(path.resolve(__dirname, '01-copy.js'));

//sep分隔符
//获取操作系统的分隔符
console.log(path.sep);

//parse
//解析路径并返回对象
console.log(__filename);//文件的绝对路径
let str = 'D:\\Code\\Web\\js\\path.js';
console.log(path.parse(str));

//basename
//获取路径基础名
console.log(path.basename(str));
//dirname
//获取路径目录名
console.log(path.dirname(str));
//extname
//获取路径扩展名
console.log(path.extname(str));