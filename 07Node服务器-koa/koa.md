**koa 路由**

- npm install @koa/router

**koa json 解析库**

- npm install koa-bodyparser
- npm install --save @koa/multer multer

**koa 部署静态服务器**

- koa 并没有内置部署相关的功能,所有需要使用第三方库
  npm install koa-static

**koa 数据的响应**
输出结果:body 将响应主体设置为以下之一:

- string:字符串数据
- Buffer:Buffer 数据
- Stream:流数据
- Object || Array:对象或者数组
- null:不输出任何内容
- 如果 response.status 尚未设置,Koa 会自动将状态设置为 200 或 204
