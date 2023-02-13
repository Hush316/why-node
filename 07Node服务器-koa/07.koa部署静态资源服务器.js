const Koa = require('koa')
const static = require('koa-static')
const KoaRouter = require('@koa/router')


const app = new Koa()

// 部署静态资源服务器
app.use(static('./uploads'))
app.use(static('./build'))

const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/', (ctx, next) => {
  ctx.body = 'users data list'
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
