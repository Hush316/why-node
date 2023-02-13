const express = require('express')

const app = express()

app.get('/home', (req, res, next) => {
  console.log('get-home-middleware1');
  next()
}, (req, res, next) => {
  console.log('get-home-middleware2');
}, (req, res, next) => {
  console.log('get-home-middleware3');
},)

app.listen(3160, () => {
  console.log('server-port is at 3160');
})
