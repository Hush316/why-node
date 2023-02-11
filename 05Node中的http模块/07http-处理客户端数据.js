const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  console.log('访问服务器 🚀');
  // 参数一:query类型参数
  // 1.1解析url
  const urlString = req.url
  const urlInfo = url.parse(urlString)
  // 1.2解析query
  const queryString = urlInfo.query
  const queryInfo = qs.parse(queryString)
  console.log(queryInfo);
  res.end('aaa')
})

server.listen(3160, () => {
  console.log('服务器启动');
})
