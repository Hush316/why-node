const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/', (ctx, next) => {
  const isAuth = false
  if (isAuth) {
    ctx.body = 'users data list qaq'
  } else {
    /*    ctx.body = {
         code: -1003,
         msg: '未授权的token'
       } */
    ctx.app.emit('error', -1003, ctx)
  }
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


//独立的error-handle.js
app.on('error', (code, ctx) => {
  let errCode = code
  let msg = ''
  switch (errCode) {
    case -1001:
      msg = '账号或者密码错误'
      break;
    case -1002:
      msg = '参数错误'
      break;
    case -1003:
      msg = '未授权,请检查token信息'
      break;
  }

  const body = {
    code: errCode,
    msg
  }
  ctx.body = body
})

app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
