const express = require('express')

// 1.创建express的服务器
const app = express()

// 客户端访问URL:/login和/home
app.post('/login', (req, res) => {
  res.end('登录成功,欢迎回来')
})

app.get('/home', (req, res) => {
  res.end('首页的数据')
})

// 2.启动服务器,并且监听端口
app.listen(3160, () => {
  console.log('服务器启动了');
})
