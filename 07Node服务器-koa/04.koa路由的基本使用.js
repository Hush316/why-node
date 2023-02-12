const Koa = require('koa')
const userRouter = require('./router/userRouter')

const app = new Koa()

// 3.让路由中的中间件生效
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.use((ctx, next) => {
})

app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
