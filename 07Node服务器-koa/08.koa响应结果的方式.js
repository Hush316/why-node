const Koa = require('koa')
const fs = require('fs')
const KoaRouter = require('@koa/router')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/', (ctx, next) => {
  // 1.body的类型是string
  // ctx.body = 'users data list'
  // 2.body的类型是Buffer
  // ctx.body = Buffer.from('hello kabuto')
  // 3.body的类型是Stream
  // const readStream = fs.createReadStream('./uploads/1676213785013_kabuto.jpg')
  // ctx.type = 'image/jpeg'
  // ctx.body = readStream
  // 4.body的类型是对象或者数组
  ctx.status = 201
  ctx.body = {
    code: 0,
    msg: '访问成功'
  }
  // 5.返回null,状态码会被自动设置为204
  // ctx.body = null
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
