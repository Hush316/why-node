const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  console.log('访问服务器 🚀');
  req.setEncoding('binary')

  let boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '')
  console.log(boundary, 111);
  // 客服端传递的数据是表单数据(请求体)
  let formData = ''
  req.on('data', (data) => {
    formData += data
  })

  req.on('end', () => {
    // 1.截取从image/jpeg位置开始后面所有的数据
    const imgType = 'image/jpeg'
    const imageTypePosition = formData.indexOf(imgType) + imgType.length
    let imageData = formData.substring(imageTypePosition)
    // 2.imageData开始位置会有两个空格
    imageData = imageData.replace(/^\s\s*/, '')
    // 3.替换最后的boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

    // 4.将imageData的数据存储到文件中
    fs.writeFile('./bar.jpg', imageData, 'binary', (err) => {
      if (err) {
        console.log('存储失败', err);
        return
      }
      console.log('存储成功');
    })
    res.end('文件上传成功')
  })
})

server.listen(3160, () => {
  console.log('服务器启动');
})


