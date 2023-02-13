const express = require('express')

const app = express()

app.use(express.json())

//服务器给客户端返回错误信息的方案:

app.post('/login', (req, res, next) => {
  // 1.获取登录传入的用户名和密码
  const { username, password } = req.body
  // 2.对用户名和密码进行校验判断
  if (!username || !password) {
    next(-1001)
  } else if (username !== 'kabuto' || password !== '123456') {
    next(-1002)
  } else {
    res.json({
      code: 0,
      msg: '登录成功-欢迎回来',
      token: '341413ghj1gj41gj1h4ghj'
    })
  }
})

app.use((errCode, req, res, next) => {
  const code = errCode
  let msg = '未知的错误信息'
  switch (code) {
    case -1001:
      msg = '没有输入账号或密码'
      break;
    case -1002:
      msg = '账号或密码错误'
      break;
  }
  res.json({ code, msg })
})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
