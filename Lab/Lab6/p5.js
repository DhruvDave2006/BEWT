const fs = require('fs')

fs.unlink('hello.txt', (err) => {

    if(err){
        console.log("Something Error while deleting the file", err)
    }
    else{
        console.log("File Deleted successfully")
    }
})