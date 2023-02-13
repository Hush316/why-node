const express = require('express')
const axios = require('axios')
const app = express()

app.use((req, res, next) => {
  console.log('middleware1');
  req.msg = 'aa'
  next()
})
app.use((req, res, next) => {
  console.log('middleware2');
  req.msg += 'bb'
  next()
  // res.json('2 express res')
})
app.use(async (req, res, next) => {
  console.log('middleware3');
  const resData = await axios.get('http://123.207.32.32:8000/home/multidata')
  console.log(resData.data.data.banner.list[0].title);
  req.msg += 'cc' + resData.data.data.banner.list[0].title

  res.json(req.msg)
})
app.listen(3160, () => {
  console.log('server port is at 3160');
})
