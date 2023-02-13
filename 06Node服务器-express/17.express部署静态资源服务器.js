const express = require('express')

const app = express()

// 内置的中间件:直接将一个文件夹作为静态资源
app.use(express.static('./uploads'))
app.use(express.static('./build'))

app.post('/login', (req, res, next) => {

})

app.listen(3160, () => {
  console.log('server port is at 3160');
})
