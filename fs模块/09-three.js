const fs = require('fs')

const ws = fs.createWriteStream('./座右铭.txt')

ws.write('第一句话\r\n');

ws.close();