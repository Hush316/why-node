const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  console.log('访问服务器 🚀');
  // 创建可写流
  const writeStream = fs.createWriteStream('./foo.jpg', {
    flags: 'a+'
  })
  // 客服端传递的数据是表单数据(请求体)
  req.on('data', (data) => {
    console.log(data);
    writeStream.write(data)
  })
  req.on('end', () => {
    console.log('数据传输完成');
    writeStream.close()
    res.end('文件上传成功')
  })
})

server.listen(3160, () => {
  console.log('服务器启动');
})


