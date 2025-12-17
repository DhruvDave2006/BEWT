const fs = require('fs')

fs.readdir('./Lab6', (err,data) => {
    if(err){

        console.log(err);
        
    }
    console.log(data);
    
})