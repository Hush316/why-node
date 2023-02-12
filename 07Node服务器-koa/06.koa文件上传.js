const Koa = require('koa')
const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')

const app = new Koa()

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads')
    },
    filename(req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname)
    }
  })
})

const uploadRouter = new KoaRouter({ prefix: '/upload' })
uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  ctx.body = 'avatar upload success'
})
app.use(uploadRouter.routes())
app.use(uploadRouter.allowedMethods())

app.listen(3160, () => {
  console.log('server port is at 3160 🚀🚀🚀');
})
