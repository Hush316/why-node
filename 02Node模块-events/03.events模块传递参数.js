// events模块中的事件总线
const EventEmitter = require('events')

//创建EventEmitter的实例
const emitter = new EventEmitter()
console.log(emitter.getMaxListeners());

// 监听事件
// 监听事件的回调
function handleWhyFn(...args) {
  console.log('监听why的事件', args);
}
emitter.on('why', handleWhyFn)
console.log(emitter.eventNames());
console.log(emitter.listenerCount('why'));
console.log(emitter.listeners('why'));
// 发射事件
setTimeout(() => {
  emitter.emit('why', 'kabuto', 18, 'man')

  // 取消事件监听
  // emitter.off('why', handleWhyFn)

  setTimeout(() => {
    emitter.emit('why')
  }, 1000);
}, 2000);
