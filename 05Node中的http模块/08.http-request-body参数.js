const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  // 获取参数:body参数
  req.setEncoding('utf-8')
  // request对象本质上是一个readable可读流
  let isLogin = false
  let body = ''
  req.on('data', (data) => {
    body += data
    const loginInfo = JSON.parse(body)
    console.log('账号信息', loginInfo);
    if (loginInfo.name === 'kabuto' && loginInfo.password === '123456') {
      isLogin = true
    } else {
      isLogin = false
    }
  })

  req.on('end', () => {
    if (isLogin) {
      res.end('登录成功')
    } else {
      res.end('登录失败,请检查账号密码')
    }
  })
})

server.listen(3160, () => {
  console.log('服务器启动');
})
