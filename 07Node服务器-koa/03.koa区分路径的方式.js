const Koa = require('koa')

const app = new Koa()


// 中间件:path/method使用路由区分
app.use((ctx, next) => {
  console.log(ctx.path);
  if (ctx.path === '/home') {
    ctx.body = '首页'
  } else if (ctx.path === '/login') {
    ctx.body = 'login success'
  } else if (ctx.path === '/users') {
    if (ctx.method === 'GET') {
      ctx.body = '用户列表'
    } else if (ctx.method === 'POST') {
      ctx.body = '创建成功'
    }
  }
})

app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
