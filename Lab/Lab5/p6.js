const EventEmitter = require('events')

const ee = new EventEmitter();

ee.on('greet', (name) => {

    console.log("Event fired")
})

setInterval(()=>{
    ee.emit('greet')
},1000)


