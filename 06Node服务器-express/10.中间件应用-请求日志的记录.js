const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const app = express()

// 应用第三方中间件
const writeStream = fs.createWriteStream('./logs/access.log')

app.use(morgan('combined', { stream: writeStream }))

app.post('/login', (req, res, next) => {

})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
