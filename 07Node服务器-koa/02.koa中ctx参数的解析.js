const Koa = require('koa')

const app = new Koa()

// koa的中间件有两个参数
app.use((ctx, next) => {
  // 1.请求对象
  console.log(ctx.request) //请求对象:Koa封装的请求对象
  console.log(ctx.req) //请求对象:Node封装的请求对象

  // 2.响应对象
  console.log(ctx.response); //请求对象:Koa封装的响应对象
  console.log(ctx.res); //请求对象:Node封装的响应对象

  // 3.其他属性
  console.log(ctx.query);
  console.log(ctx.path);
  ctx.body = 'xxx'
})

app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
