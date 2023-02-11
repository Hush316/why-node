**Node 中很多对象是基于流实现的**

- http 模块的 Request 和 Response 对象

**所有的流都是 EventEmitter 的实例**

Node.js 中四种基本流类型

- Writable:可以向其写入数据的流(例如 fs.createWriteStream())
- Readable:可以从中读取数据的流(例如 fs.createReadStream())
- Duplex:同时为 Readable 和 Writable(例如 net.Socket)
- Transform:Duplex 可以在写入和读取时修改或转换数据的流(例如 zlib.createDeflate())

**createReadStream**

- start:文件读取开始的位置
- end:文件读取结束的位置
- highWaterMark:一次性读取字节的长度,默认是 64kb

**我们会发现,我们并不能监听到 close 事件**

- 这是因为写入流在打开后是不会自动关闭的
- 我们必须手动关闭,来告诉 Node 已经写入结束了
- 并且会发出一个 finish 事件

**另外一个常用方法是 end:end 相当于做了两步操作,write 传入数据并且调用 close 方法**
