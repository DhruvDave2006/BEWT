const fs = require('fs')

fs.writeFile('output.txt', 'Hello World', (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Data written Successfully")
    }
})

