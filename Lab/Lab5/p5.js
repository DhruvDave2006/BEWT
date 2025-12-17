const url = require('url')

const link = "C:/Users/dvd/OneDrive/Desktop1/B.Tech SEM-4/BEWT/Lab"

const newUrl = new URL(link);
newUrl.pathname = 'C:/Users/dvd/OneDrive/Desktop1/B.Tech SEM-4/BEWT/Lab/path/'

newUrl.searchParams.append("Name", "Dhruv")
newUrl.searchParams.append("City", "Rajkot")

console.log(newUrl.toString())

