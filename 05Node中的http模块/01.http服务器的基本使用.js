const http = require('http')

// 创建一个http对应的服务器
const server = http.createServer((request, response) => {
  // request对象包含本次客户端请求的所有信息
  // 请求的url,请求的method,请求的headers,请求携带的数据

  // response对象用于给客户端返回结果
  response.end('hello world')
})

// 开启对应的服务器,并且告知需要监听的端口
// 监听端口时,监听1024以上的端口,65535以下的端口
server.listen(3160, () => {
  console.log('服务器启动成功了  ' + 'http://localhost:3160');
})
