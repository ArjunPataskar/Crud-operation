const http = require('http');
const server = http.createServer((req,res) => {
    if(req.method === 'GET' && req.url=== '/arjun'){
        res.writeHead(200,{'content-Type':'text/plain'})
        res.end("Hello Everyone!");
    }
    else{
        res.writeHead(404,{'content-Type':'text/plain'})
        res.end("Not Found");
    }
});

server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000/arjun")
})