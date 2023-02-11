const fs = require('fs')

// 创建一个写入流
const writeStream = fs.createWriteStream('./222.txt', {
  flags: 'a',
})

writeStream.on('open', (fd) => {
  console.log('文件被打开', fd);
})
writeStream.write('kabuto run')
writeStream.write('sun', (err) => {
  console.log('写入成功', err)
})

writeStream.on('finish', () => {
  console.log('写入完成了');
})

writeStream.on('close', () => {
  console.log('文件夹被关闭');
})

// 写入完成时,需要手动去调用close方法
// writeStream.close()

// end方法做两个操作:
// 1.将最后的内容写入到文件中
// 2.并且关闭文件
writeStream.end('hhhh')
