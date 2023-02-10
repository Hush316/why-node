const EventEmitter = require('events')

const e2 = new EventEmitter()

e2.on('ha', () => {
  console.log('aa');
})
e2.on('ha', () => {
  console.log('aa');
})
e2.on('ha', () => {
  console.log('aa');
})
e2.on('hen', () => {
  console.log('aa');
})
e2.on('hen', () => {
  console.log('aa');
})

// 1.获取所有的监听事件的名称
console.log(e2.eventNames());

// 2.获取监听的最大个数
console.log(e2.getMaxListeners());

// 3.获取某一个事件名称对应的监听器个数
console.log(e2.listenerCount('ha'));

// 4.获取某一个事件名称对应的监听器函数(数组)
console.log(e2.listeners('ha'));
