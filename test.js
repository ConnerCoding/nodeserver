const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('fun');
    if (err) console.log(err);
    let count = 0;
    const fileData = data.toString();
    const directionsArray = fileData.split('');
    for (let i = 0; i < fileData.length; i++) {
        if (directionsArray[i] === '(') {
            count += 1;
        } else {
            count -= 1;
        }
        // count += 1;
        // if (x - y < 0) break;
    }
    console.log(count);
    console.timeEnd('fun');
})

fs.readFile('./input.txt', (err, data) => {
    console.time('funasd');
    if (err) console.log(err);
    const fileData = data.toString();
    const directionsArray = fileData.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
        if (currentValue === '(') return acc += 1;
        else if (currentValue === ')') return acc -= 1;
    }, 0)
    console.log('floor: ', answer);
    console.timeEnd('funasd');
})