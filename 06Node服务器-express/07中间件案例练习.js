const express = require('express')

const app = express()

app.post('/login', (req, res, next) => {
  let body = ''
  let isLogin = false
  req.on('data', (data) => {
    body += data.toString()
    let loginInfo = JSON.parse(body)
    if (loginInfo.username === 'kabuto' && loginInfo.password === '123456') {
      isLogin = true
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

app.post('/register', (req, res, next) => {
  let body = ''
  let isRegister = false
  req.on('data', (data) => {
    body += data.toString()
    let registerInfo = JSON.parse(body)
    if (registerInfo.username === 'kabuto' && registerInfo.password === '123456') {
      isRegister = true
    }
  })
  res.end('end', () => {
    if (isRegister) {
      res.end('注册成功')
    } else {
      res.end('注册失败,请重新注册')
    }
  })
})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
