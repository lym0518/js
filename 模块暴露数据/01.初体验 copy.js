// 声明一个函数
function tiemo() {
    console.log("贴膜");
}

function niejiao() {
    console.log('捏脚');
}

// 暴露数据
// module.exports = {
//     tiemo,
//     niejiao
// };

// exports 暴露数据
exports.tiemo = tiemo;
exports.niejiao = niejiao;

// module.exports可以暴露任意数据

// 不能使用exports=value的形式暴露数据，模块内部module与exports的隐式关系 exports=module。exports ={}