const fs = require('fs')

// 读取文件夹
// 1.读取文件夹,获取到文件夹中文件的字符串
// fs.readdir('./kabuto', (err, files) => {
//   if (err) {
//     console.log('读取失败', err);
//     return
//   }
//   console.log(files);
// })

// 2.读取文件夹,获取到文件夹中文件的信息
// fs.readdir('./kabuto', { withFileTypes: true }, (err, files) => {
//   if (err) {
//     console.log('读取失败', err);
//     return
//   }
//   console.log(files);
//   files.forEach(item => {
//     if (item.isDirectory()) {
//       console.log('是一个文件夹:', item.name);
//     } else {
//       console.log('是一个文件:', item.name);
//     }
//   })
// })

// 3.递归读取文件夹中所有的文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log('读取失败', err);
      return
    }
    files.forEach(item => {
      if (item.isDirectory()) {
        readDirectory(`${path}/${item.name}`)
      } else {
        console.log('获取到文件', item.name);
      }
    })
  })
}
readDirectory('./kabuto')
