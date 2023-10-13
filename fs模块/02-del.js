const fs = require('fs')

// fs.unlink('./new.txt', err => {
//     if (err) {
//         console.log("操作失败")
//     }
//     console.log("操作成功")
// })

fs.rm('./new.txt', err => {
    if (err) {
        console.log("操作失败")
        return;
    }
    console.log("操作成功")
})