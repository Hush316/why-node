const http = require('http')

// 1.使用http模块发送网络请求
// http.get('http://localhost:3160', (res) => {
//   // 从可读流中获取数据
//   res.on('data', (data) => {
//     const dataString = data.toString()
//     const dataInfo = JSON.parse(dataString)
//     console.log(dataInfo);
//   })
// })

// 1.使用http模块发送post
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 3160
}, (res) => {
  res.on('data', (data) => {
    const dataString = data.toString()
    const dataInfo = JSON.parse(dataString)
    console.log(dataInfo);
  })
})
req.end()
