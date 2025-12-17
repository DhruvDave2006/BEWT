const url = require('url')
const link = "C:/Users/dvd/OneDrive/Desktop1/B.Tech SEM-4/BEWT/Lab/path.js?name=dhruv&age=18&city=rajkot"

const newUrl = url.parse(link, true);

console.log("Protocol:", newUrl.protocol)

console.log("Hostname:", newUrl.hostname)

console.log("Pathname:", newUrl.pathname)

console.log("Query-Parameters", newUrl.query)

