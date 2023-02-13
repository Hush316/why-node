const express = require('express')

const app = express()

// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) => {
//       const jsonInfo = JSON.parse(data.toString())
//       req.body = jsonInfo
//     })
//     req.on('end', () => {
//       next()
//     })
//   } else {
//     next()
//   }
// })

// 可以直接使用express提供的中间件做解析
app.use(express.json())

app.post('/login', (req, res, next) => {
  console.log('login', req.body);
})

app.post('/register', (req, res, next) => {
  console.log('reg', req.body);
})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
