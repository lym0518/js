function avg(...arg) {
    var sum = 0;
    for (let value of arg) {
        sum += value;
    }
    return sum / arg.length;
}

console.log(avg(2, 4, 6, 8))