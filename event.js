let EventEmitter = require('events').EventEmitter;

let event = new EventEmitter();

// 循环事件
event.on('customer_event', function () {
    console.log('customer_event has be occured : ' + new Date());
});

// 一次事件
event.once('customer_event_once', function () {
    console.log('customer_event_once has be occured : ' + new Date());
});

setInterval(function () {
    event.emit('customer_event')
}, 500);

setInterval(function () {
    event.emit('customer_event_once')
}, 500);