const fs = require('fs')

// fs.mkdir('./acc', err => {
//     if (err) {
//         console.log("创建失败")
//         return;
//     }
//     console.log("创建成功")
// })

//递归创建
// fs.mkdir('./acc/s/a/c', { recursive: true }, err => {
//     if (err) {
//         console.log("创建失败")
//         return;
//     }
//     console.log("创建成功")
// })

// fs.readdir('./', (err, data) => {
//     if (err) {
//         console.log("创建失败")
//         return;
//     }
//     console.log(data)
// })

fs.rm('./acc', { recursive: true }, err => {
    if (err) {
        console.log("删除失败")
        return;
    }
    console.log("删除成功")
})