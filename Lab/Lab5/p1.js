const child_process = require('child_process')

child_process.exec('node --version', (error, stdout, stderr) => {

    if(error){
        console.log("Erorr generated :", error)
    }

    else if(stdout){
        console.log("Current node version :", stdout)
    }

    else if(stderr){
        console.log("Node version not found: ", stderr)
    }
})