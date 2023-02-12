const KoaRouter = require('@koa/router')

// 1.创建路由对象
const userRouter = new KoaRouter({ prefix: '/users' })
// 2.在理由中注册中间件:path/method
userRouter.get('/', (ctx, next) => {
  ctx.body = 'users data list'
})
userRouter.get('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = `获取id为${id}的用户信息`
})
userRouter.post('/', (ctx, next) => {

})
userRouter.delete('/:id', (ctx, next) => {
  const id = ctx.params.id
  ctx.body = `删除id为${id}的用户`
})
userRouter.patch('/:id', (ctx, next) => {

})

module.exports = userRouter
