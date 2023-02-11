const fs = require('fs')

// 1.一次性读取
// 缺点1:没有办法精准控制从哪里读取,读取到什么位置
// 缺点2:不能读取到某一个位置,暂停读取,恢复读取
// 缺点3:文件非常大的时候,多次读取
fs.readFile('./111.txt', (err, data) => {
  if (err) {
    console.log('读取失败', err);
  }
  console.log('读取成功', data);
})

// 2.通过流读取文件
// 2.1创建一个可读流
// start:从什么位置开始读取
// end:读取到什么位置后结束(包括end位置字节)
//
const readStream = fs.createReadStream('./111.txt', {
  start: 2,
  end: 7,
  highWaterMark: 3
})
readStream.on('data', (data) => {
  console.log(data.toString());

  // 暂停读取
  readStream.pause()

  // 恢复读取
  setTimeout(() => {
    readStream.resume()
  }, 2000);
})

// 3.补充其他的事件监听
readStream.on('open', (fd) => {
  console.log('通过流将文件打开', fd);
})
readStream.on('end', () => {
  console.log('已经读取到end位置');
})
readStream.on('close', () => {
  console.log('文件读取结束,并且被关闭');
})
