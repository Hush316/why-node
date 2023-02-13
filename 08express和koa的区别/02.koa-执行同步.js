const Koa = require('koa')

const app = new Koa()


app.use((ctx, next) => {
  console.log('koa middleware1');

  next()
  ctx.msg += 'aa'
  // 返回结果
  ctx.body = ctx.msg
})
app.use((ctx, next) => {
  console.log('koa middleware2');

  next()
  ctx.msg += 'bb'
})
app.use((ctx, next) => {
  console.log('koa middleware3');
  ctx.msg = 'cc'
})


app.listen(3161, () => {
  console.log('server port is at 3161 🚀🚀🚀');
})
