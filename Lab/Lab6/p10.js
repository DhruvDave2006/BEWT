const fs = require('fs')

fs.watch('watchMe.txt', (eventType, filename) => {

    console.log("EventType :", eventType, "FileName :", filename)
})

