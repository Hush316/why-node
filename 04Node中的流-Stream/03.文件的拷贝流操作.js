const fs = require('fs')

// 1.一次性读取和写入文件
fs.readFile('./333.txt', (err, data) => {
  fs.writeFile('./333-copy.txt', data, (err) => {
    console.log('一次性写入完成');
  })
})

// 2.创建可读流和可写流
const readStream = fs.createReadStream('./333.txt')
const writeStream = fs.createWriteStream('./333_copy.txt')
// readStream.on('data', (data) => {
//   console.log('写入成功');
//   writeStream.write(data)
// })
// readStream.on('end', () => {
//   console.log('读取结束,关闭写入');
//   writeStream.close()
// })

// 3.在可读流和可写流之间建立一个管道
readStream.pipe(writeStream)
