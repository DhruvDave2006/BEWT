const path = require('path')
const os = require('os')

// 1.
console.log("Directory Name :", __dirname)
console.log("File Name : ", path.basename(__filename))
console.log("Extension Name : ", path.extname(__filename))
console.log("File Path : ", __filename)

//2.
console.log("Join Method : ", path.join("users", "arjun", "documents", "project"))

//3.
console.log("Normalise Method :", path.normalize("//folder//subfolder////file.txt"))

//4.
console.log("Is Absolute : ", path.isAbsolute("C:/Users/dvd/OneDrive/Desktop1/B.Tech SEM-4/BEWT/Lab"))
console.log("Is Absolute : ", path.isAbsolute("Lab04.js"))

//5.
console.log("Resolve Method : ", path.resolve("folder", "subfolder", "app.js"))

//6.
console.log("Os Name : ", os.type())
console.log("Version : ", os.version())
console.log("Platform : ", os.platform())
console.log("Architechture : ", os.arch())

//7.
console.log("Total Memory : ", os.totalmem() * 1e-9)
console.log("Free Memory : ", os.freemem() * 1e-9)

//8.
console.log("User Info : ",os.userInfo())

//9.
console.log("Up Time : ", os.uptime())

//10.
console.log("CPU Core : ",os.cpus())
console.log("Network Interface : ", os.networkInterfaces())