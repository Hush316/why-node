const express = require('express')

const app = express()

// 总结:当express接收到客户端发送的网络请求时,在所有中间件中开始进行匹配
// 当匹配到第一个符合要求的中间件时,那么就会执行这个中间件
// 后续的中间件是否会执行,取决于上一个中间件是否有next()

// 通过use方法注册的中间件是最普通/简单的中间件
// 通过use注册的中间件,无论是什么请求方式都可以匹配上
app.use((req, res, next) => {
  console.log('most normal middleware');
  next()
})

app.use((req, res, next) => {
  console.log('second most normal middleware');
})

app.listen(3160, () => {
  console.log('server-port is at 3160');
})
