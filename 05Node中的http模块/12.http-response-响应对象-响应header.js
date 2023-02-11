const http = require('http')

const server = http.createServer((req, res) => {
  console.log('访问了服务器 🚀')
  // 设置header信息,数据的类型以及数据的编码格式
  // 1.单独设置某一个header
  // res.setHeader('Content-Type', 'text/plain;charset=utf8;')

  // 2.和http status code 一起设置
  res.writeHead(202, {
    'Content-Type': 'application/json;charset=utf8;'
  })
  const list = [
    { name: 'kabuto', age: 18 },
    { name: '17', age: 88 }
  ]
  res.end(JSON.stringify(list))
})

server.listen(3160, () => {
  console.log('服务器启动');
})
