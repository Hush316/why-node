const fs = require('fs')

// 1.同步读取
// const res1 = fs.readFileSync('./abc.text', {
//   encoding: 'utf-8'
// })
// console.log(res1)

// 2.异步读取:回调函数
// fs.readFile('./abc.text', {
//   encoding: 'utf-8'
// }, (err, data) => {
//   if (err) {
//     console.log('读取错误', err);
//     return
//   }
//   console.log('读取的文件', data);
// })

// 3.异步读取:Promise
fs.promises.readFile('./abc.text', {
  encoding: 'utf-8'
}).then(res => {
  console.log('获取到的文件', res);
}).catch((err => {
  console.log('读取错误', err);
}))
