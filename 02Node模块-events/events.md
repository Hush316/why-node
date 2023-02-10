**Node中的核心API都是基于异步事件驱动的**
- 在这个体系中,某些对象(发射器(Emitters))发出某一个事件
- 我们可以监听这个事件(监听器Listeners),并且传入的回调函数,这个回调函数会在监听到事件时调用

**EventEmitter的实例有一些属性,可以记录一些信息**
- emitter.eventNames():返回当前EventEmitter对象注册的事件字符串数组
- emitter.getMaxListeners():返回当前EventEmitter对象的最大监听器数量,可以通过setMaxListeners()来修改,默认是10
- emitter.listenerCount(事件名称):返回当前EventEmitter对象某一个事件名称,监听器的个数
- emitter.listeners(事件名称):返回当前EventEmitter对象某个事件监听器上所有的监听器数组

**方法的补充**
EventEmitter的实例方法补充:
- emitter.once(eventName,listener):事件监听一次
- emitter.prependListener():将监听事件添加到最前面
- emitter.prependOnceListener():将监听事件添加到最前面,但是只监听一次
- emitter.removeAllListeners():移除所有的事件监听
