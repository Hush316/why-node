const express = require('express')

const app = express()

// 注册中间件:对path/method都有限制
// app.method(path,middleware)
app.get('/home', (req, res, next) => {
  console.log('get-home-middleware');
  res.end('get-home-middleware')
})

app.post('/users', (req, res, next) => {
  console.log('post-users-middleware');
  res.end('post-users-middleware')
})

app.listen(3160, () => {
  console.log('server-port is at 3160');
})
