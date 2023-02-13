const express = require('express')

// 1.创建路由对象
const userRouter = express.Router()

// 2.定义路由对象中的映射
userRouter.get('/', (req, res, next) => { res.end('查询成功') })
userRouter.get('/:id', (req, res, next) => {
  const id = req.params.id
  res.json(`获取id为 ${id} 的用户信息`)
})
userRouter.post('/', (req, res, next) => { })
userRouter.delete('/:id', (req, res, next) => {
  const id = req.params.id
  res.json(`删除id为 ${id} 的用户`)
})
userRouter.patch('/:id', (req, res, next) => { })

// 3.导出路由
module.exports = userRouter
