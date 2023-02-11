const http = require('http')

const server = http.createServer((req, res) => {
  console.log('访问服务器 🚀')
  // 响应状态码
  // 1.方式一:statusCode
  // res.statusCode = 403

  // 2.方式二:setHead 响应头
  res.writeHead(401)
  res.end('aaa')
})

server.listen(3160, () => {
  console.log('服务器启动');
})
