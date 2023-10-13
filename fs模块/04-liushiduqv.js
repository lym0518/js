const fs = require('fs')

const rs = fs.createReadStream('./试验.mp4');

rs.on('data', chunk => {
    console.log(chunk);
})