const http = require('http')


const server1 = http.createServer((req, res) => {
  res.end('3160端口')
})

server1.listen(3160, () => {
  console.log('http://localhost:3160  启动成功');
})

const server2 = http.createServer((req, res) => {
  res.end('3161端口')
})

server2.listen(3161, () => {
  console.log('http://localhost:3161  启动成功');
})

const server3 = new http.Server((req, res) => {
  res.end('hello server3')
})
server3.listen(3162, () => {
  console.log('http://localhost:3162  启动成功');
})
