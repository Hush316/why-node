const fs = require('fs')


fs.mkdir('./kabuto', (err) => {
  if (err) {
    console.log('创建失败', err);
    return
  }
})
