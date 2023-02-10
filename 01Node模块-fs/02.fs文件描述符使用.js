const fs = require('fs')

fs.open('./222.text', (err, fd) => {
  if (err) {
    console.log('打开失败', err);
    return
  }
  // 1.获取文件描述符
  console.log('文件描述符', fd);

  // 2.读取到文件的信息
  fs.fstat(fd, (err, stats) => {
    if (err) return
    console.log(stats);

    // 3.手动关闭文件
    fs.close(fd)
  })
})
