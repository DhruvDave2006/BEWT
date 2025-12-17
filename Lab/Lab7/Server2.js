const http = require("http")

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.statusCode = 200;
        res.end('Home page')
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.end('About Us page')
    }
    else if(req.url === '/contact'){
        res.statusCode = 200;
        res.end('Contact us page')
    }
    else if(req.url === 'help'){
        res.statusCode = 200;    
        res.end('Help Page')
    }
    else{
        res.statusCode = 404;
        res.end("Page not found")
    }
})

server.listen(3001, ()=>{
    console.log('Server started at @3001')
})