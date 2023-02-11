const http = require('http')

const server = http.createServer((req, res) => {
  console.log('访问服务器 🚀');
  const url = req.url
  if (url === '/login') {
    res.end('登录成功')
  } else if (url === '/products') {
    res.end('商品列表')
  } else if (url === '/lyric') {
    res.end('过了很久终于我愿抬头看')
  }
})

server.listen(3160, () => {
  console.log('服务器启动');
})
