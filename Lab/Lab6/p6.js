const fs = require('fs')

fs.mkdir('my-data', (err) => {

    if(err){
        if(err.code === 'EEXIST'){
            console.log("Already exists")
        }
        else{
            console.log(err)
        }
    }
    else{
        console.log("Directory created successfully")
    }
})

