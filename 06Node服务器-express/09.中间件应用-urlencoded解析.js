const express = require('express')

const app = express()

// 应用一些中间件
app.use(express.json()) //解析客户端传递过来的json
// 解析传递过来的urlencoded时,默认使用node内置的queryString模块
// { extended: true }:不再使用内置的queryString模块,而是使用qs第三方库
app.use(express.urlencoded({ extended: true })) //解析客户端传递过来的urlencoded

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('login success')
})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
