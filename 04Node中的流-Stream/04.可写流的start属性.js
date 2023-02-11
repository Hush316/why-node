const fs = require('fs')

const writeStream = fs.createWriteStream('./444.txt', {
  flags: 'r+',
  start: 8
})

writeStream.write('kabuto go')
writeStream.close()

