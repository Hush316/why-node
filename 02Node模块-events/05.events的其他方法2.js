const EventEmitter = require('events')

const e2 = new EventEmitter()

// 1.once:时间监听只监听一次(第一次发射事件的时候进行监听)
e2.once('ha', () => {
  console.log('once 监听ha');
})

// 2.prependListener:将事件监听添加到最前面
e2.prependListener('ha', () => {
  console.log('haha-prepend');
})

e2.emit('ha')

e2.on('why', () => {
  console.log('why')
})
// 3.移除所有的事件监听
// 不传递参数的情况下,移除所有事件名称的所有事件监听
// 在传递参数的情况下,只会移除传递的事件名称的事件监听
e2.removeAllListeners('ha')
console.log(e2.eventNames())
