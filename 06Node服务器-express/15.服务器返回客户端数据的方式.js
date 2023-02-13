const express = require('express')

const app = express()

app.post('/login', (req, res, next) => {
  // 1.res.end方法,比较少用
  // res.end('login success')

  // 2.res.json方法,较常用
  // res.json({
  //   code: 0,
  //   msg: '登录成功 欢迎回来',
  //   list: []
  // })

  // 3.res.status方法
  res.status(201)
  res.json({
    code: 0,
    msg: '登录成功 欢迎回来',
    list: []
  })
})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
