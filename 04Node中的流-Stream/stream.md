**Node 中很多对象是基于流实现的**

- http 模块的 Request 和 Response 对象

**所有的流都是 EventEmitter 的实例**

Node.js 中四种基本流类型

- Writable:可以向其写入数据的流(例如 fs.createWriteStream())
- Readable:可以从中读取数据的流(例如 fs.createReadStream())
- Duplex:同时为 Readable 和 Writable(例如 net.Socket)
- Transform:Duplex 可以在写入和读取时修改或转换数据的流(例如 zlib.createDeflate())
