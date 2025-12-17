const fs = require('fs')

try{

    const exists = fs.existsSync('abc.html')
    console.log(exists)

}catch(err){
    console.log(err)
}

console.log("End");

