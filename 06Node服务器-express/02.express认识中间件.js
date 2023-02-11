const express = require('express')

const app = express()

// 给expres创建的app传入一个回调函数
// 传入的这个回调函数就称之为中间件
app.post('/login', (req, res, next) => {
  // 1.中间件中可以执行任意代码

  // 2.在中间件中修改req/res对象
  req.age = 22

  // 3.可以在中间件中结束响应周期
  res.json({ message: 'login success', code: 200 })

  // 4.执行下一个中间件
  next()
})

app.use((req, res, next) => {
  console.log('next middleware');
})

app.listen(3160, () => {
  console.log('server-port is at 3160');
})
