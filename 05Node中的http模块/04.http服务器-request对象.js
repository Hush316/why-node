const http = require('http')

const server = http.createServer((req, res) => {
  console.log('访问服务器 🚀');
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.end('aaa')
})

server.listen(3160, () => {
  console.log('服务器启动');
})
