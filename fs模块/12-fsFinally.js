const fs = require('fs')

const files = fs.readdirSync('../js');

// console.log(files);

files.forEach(item => {
    //拆分文件名
    let data = item.split('-')
    let [num, name] = data;
    if (Number(num) < 10) {
        num = '0' + num
    }
    let newname = num + '-' + name;
    console.log(newname);
    fs.renameSync(`../js/${item}`, `../js/${newname}`)
})