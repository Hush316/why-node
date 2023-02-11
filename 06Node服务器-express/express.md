## 使用 express 的两种方式

- 方式一:通过脚手架创建应用骨架
  安装脚手架
  npm install -g express-generator
  创建项目
  express express-demo
  安装依赖
  npm install
  启动项目
  node bin/www
- 方式二:从零搭建自己的 express 应用结构
  npm init -y

## 中间件

**中间件可以执行哪些任务呢**

- 执行任何代码
- 更改请求和响应对象
- 结束请求-响应周期(返回数据)
- 调用栈中的下一个中间件
