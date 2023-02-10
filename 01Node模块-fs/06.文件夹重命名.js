const fs = require('fs')

// 1.对文件夹重命名
// fs.rename('./kabuto', './moon', (err) => {
//   if (err) {
//     console.log('重命名失败:', err);
//     return
//   }
//   console.log('重命名成功');
// })

// 2.对文件重命名
fs.rename('./666.txt', './6666.txt', (err) => {
  if (err) {
    console.log('重命名失败', err);
    return
  }
  console.log('重命名成功');
})
