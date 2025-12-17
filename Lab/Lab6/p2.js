const fs = require('fs')

console.log("File read start")

try{

    data = fs.readFileSync('packageDes.txt')
    console.log(data.toString())

}catch(err){
    console.log(err)
}
