const express = require('express')
const multer = require('multer')

const app = express()

// 应用第三方中间件
const upload = multer({ dest: './uploads' })

// 上传单文件:single方法
app.post('/upload', upload.single('avatar'), (req, res, next) => {
  console.log(req.file);
  res.end('文件上传成功')
})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
