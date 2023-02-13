const express = require('express')


const app = express()

const userRouter = require('./router/useRouter')

app.use('/users', userRouter)

app.listen(3160, () => {
  console.log('server port is at 3160');
})
