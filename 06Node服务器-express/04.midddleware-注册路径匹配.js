const express = require('express')

const app = express()

// 注册普通的中间件
app.use((req, res, next) => {
  console.log('normal middleware');
  next()
})

// 注册路径匹配的中间件
// 路径匹配的中间件是不会对请求的方式(method)进行限制的
app.use('/home', (req, res, next) => {
  console.log('home middleware');
  res.end('home end')
})

app.listen(3160, () => {
  console.log('server-port is at 3160');
})

