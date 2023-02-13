const express = require('express')
const multer = require('multer')

const app = express()

// express内置插件
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 编写中间件
const formdata = multer()

app.post('/login', formdata.any(), (req, res, next) => {
  console.log(req.body, req.url);
  res.end('login success')
})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
