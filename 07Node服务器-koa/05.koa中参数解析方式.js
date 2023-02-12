const Koa = require('koa')
const KoaRouter = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')

const app = new Koa()

// 使用第三方中间件解析body数据
const formParser = multer()
app.use(bodyParser())

const userRouter = new KoaRouter({ prefix: '/users' })

// 1.params
userRouter.get('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = 'users id:  ' + id
})
// 2.query
userRouter.get('/', (ctx, next) => {
  const query = ctx.query
  console.log(query);
  ctx.body = 'users query info: ' + JSON.stringify(query)
})
// 3.post/json(一般使用最多)
userRouter.post('/json', (ctx, next) => {
  // 注意事项: 不能从ctx.body中获取数据
  console.log(ctx.request.body);
  ctx.body = 'users json info'
})
// 4.post/urlencoded
userRouter.post('/urlencoded', (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = 'users urlencoded info'
})
// 5.post/form-data
userRouter.post('/formdata', formParser.any(), (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = 'users formdata info'
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
