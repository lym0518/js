const fs = require('fs')

fs.rename('./座右铭.txt', './更改.txt', err => {
    if (err) {
        console.log("操作失败")
        return;
    }
    console.log("成功")
})