const fs = require('fs')

const content = 'hello i am kabuto'

// 1.文件的写入操作
fs.writeFile('./333.txt', content, {
  encoding: 'utf-8',
  flag: 'w'
}, (err) => {
  if (err) {
    console.log('文件写入失败', err);
    return
  }
  console.log('文件写入成功');
})
