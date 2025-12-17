const fs = require('fs')

fs.appendFile('output.txt', ' From Dhruv Dave', (err) => {
    if(err){
        console.log(err)
    }
    else{


        console.log("Data append success");
    }
})

