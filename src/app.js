const express=require("express");
require("dotenv").config();
const path=require("path");

const app=express();
//app.use(express.static(path.resolve("src/public")));

const port=process.env.PORT || 3000;

/* app.use((req,res,next)=>{
    console.log(`Login at ${new Date().toLocaleString()}`);
    next();
}); */

app.get("/",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    //res.status(200).send("Home Page");
    //res.status(200).send(req.url);
    //res.status(200).send(req.query);
    //res.status(200).send(req.method);
    //res.status(200).send(req.headers.host);
    res.status(200).send(`<h1>${req.headers.host}</h1>`);
});

app.get("/:brand/",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.params);
});

app.get("/:brand/:product",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.params);
});
app.get("/:brand/:product/:model",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.params);
});


app.get("/api",(req,res)=>{
    return res.status(200).json({message:"GET API"});
});
app.post("/api",(req,res)=>{
    return res.status(200).json({message:"POST API"});
});



/* wildcard handler */
app.get("/**",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(404).send("404, Page not found");
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);
})
