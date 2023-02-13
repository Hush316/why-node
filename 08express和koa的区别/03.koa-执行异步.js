const Koa = require('koa')
const axios = require('axios')
const app = new Koa()


app.use(async (ctx, next) => {
  console.log('koa middleware1');
  ctx.msg = 'aa'
  await next()
  // 返回结果
  ctx.msg += 'hh'
  console.log('1 next');
  ctx.body = ctx.msg
})
app.use(async (ctx, next) => {
  console.log('koa middleware2');
  ctx.msg += 'bb'
  // 如果执行的下一个中间件是一个异步函数,那么next默认不会等到中间件的结果,就会执行下一步操作
  // 如果我们希望等待下一个异步函数的执行结果,那么需要在next函数前加await
  await next()
  console.log('2 next');
})
app.use(async (ctx, next) => {
  console.log('koa middleware3');
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  console.log(res.data.data.banner.list[0].title);
  ctx.msg += res.data.data.banner.list[0].title

})


app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
