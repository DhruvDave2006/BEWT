const fs = require('fs')

console.log("File read Start")

fs.readFile('packageDes.txt', (err,data) => {

    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
});

console.log("File read successful")