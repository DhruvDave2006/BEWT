const http = require("http")

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.end('Home 1 page')
    }
    else{

    }
})

server.listen(3000, ()=>{
    console.log('Server started at @3000')
})