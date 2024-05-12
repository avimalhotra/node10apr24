const http=require('http');
require("dotenv").config();
const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    //res.write( req.url );
    //res.write( req.method );
    //res.write( req.headers.host );
    //res.statusCode=200;
    //res.setHeader('Content-Type','text/html');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Hello World</h1>");
    res.end();
});

server.listen(port,()=>{
    console.log(`App starts at http://127.0.0.1:${port}`);  
});