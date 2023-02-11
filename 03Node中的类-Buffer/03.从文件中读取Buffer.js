const fs = require('fs')

// 1.从文件中读取Buffer
fs.readFile('./aaa.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log('读取失败', err);
    return
  }
  console.log(data);
})

fs.readFile('./aaa.txt', (err, data) => {
  if (err) {
    console.log('读取失败', err);
    return
  }
  console.log(data.toString());
})

fs.readFile('./aaa.txt', (err, data) => {
  if (err) {
    console.log('读取失败', err);
    return
  }
  console.log(data.toString());
})
