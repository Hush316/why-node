// 1.创建Buffer
const buf = new Buffer('hello')
console.log(buf);

// 2.第二种创建的方式
const buf2 = Buffer.from('world')
console.log(buf2);

// 3.创建Buffer(字符串中包含中文)
const buf3 = Buffer.from('你好哈')
console.log(buf3);

// 4.手动指定的Buffer创建过程的编码
const buf4 = Buffer.from('你是谁', 'utf16le')
console.log(buf4);
// 解码操作
console.log(buf4.toString('utf16le'));
