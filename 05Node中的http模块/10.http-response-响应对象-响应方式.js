const http = require('http')

const server = http.createServer((req, res) => {
  console.log('访问服务器 🚀')
  // res:response对象=>Writable可写流
  // 1.响应数据方式1:write
  res.write('hellohhhhh')

  // 2.响应方式二:end
  res.end('aaa')
})

server.listen(3160, () => {
  console.log('服务器启动');
})
