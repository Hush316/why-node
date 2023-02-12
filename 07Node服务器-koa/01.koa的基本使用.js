const Koa = require('koa')

const app = new Koa()

// koa的中间件有两个参数
app.use((ctx, next) => {
  console.log('koa middleware');
  ctx.body = 'hhhhh'
})

app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
