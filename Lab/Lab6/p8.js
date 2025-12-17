const { Console } = require('console')
const fs = require('fs')

fs.copyFile('output.txt', 'backup.txt', (err) => {
    if(err){
        console.log(err)
    }
    console.log("Copy successful")
})

console.log()
console.log()