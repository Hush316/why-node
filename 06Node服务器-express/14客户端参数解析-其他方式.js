const express = require('express')

const app = express()

// 编写中间件
// 1.解析queryString
app.get('/home/list', (req, res, next) => {
  const queryInfo = req.query
  console.log(queryInfo);
  res.end('list data')
})

// 2.解析params参数
app.get('/users/:id', (req, res, next) => {
  const id = req.params.id
  res.end(`获取到${id}的数据`)
})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
