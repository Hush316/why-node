const http = require('http')

const server = http.createServer((req, res) => {
  console.log('访问服务器 🚀');
  const url = req.url
  const method = req.method
  if (url === '/login') {
    if (method === 'POST') {
      res.end('登录成功---')
    } else {
      res.end('不支持的请求方式,请检测您的请求方式')
    }
  } else if (url === '/products') {
    res.end('商品列表')
  } else if (url === '/lyric') {
    res.end('过了很久终于我愿抬头看')
  }
})

server.listen(3160, () => {
  console.log('服务器启动');
})
