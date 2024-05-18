const express=require("express");
require("dotenv").config();
const path=require("path");
const port=process.env.PORT || 3000;
const bp=require("body-parser");

const app=express();
app.use(express.static(path.resolve("src/public")));
app.use(express.static(path.resolve("node_modules/bootstrap/dist")));
app.use(bp.json());
app.use(bp.text());
app.use(bp.urlencoded({ extended: false }));

/* app.use((req,res,next)=>{
    console.log(`Login at ${new Date().toLocaleString()}`);
    next();
}); */

const admin=require("./routes/admin");
const user=require("./routes/user");

app.use('/admin',admin);
app.use('/user',user);

app.get("/",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    //res.status(200).send("Home Page");
    //res.status(200).send(req.url);
    //res.status(200).send(req.query);
    //res.status(200).send(req.method);
    //res.status(200).send(req.headers.host);
    res.status(200).send(`<h1>${req.headers.host}</h1>`);
});


app.get("/search",(req,res)=>{
    res.status(200).send(`Query is ${req.query.car}`);
});

app.post("/login",(req,res)=>{

    res.status(200).json(req.body);
    
    /* if(req.body.email=="admin@domain" && req.body.password=="123456"){
        res.status(200).json('Hello Admin');
    }
    else{
        res.status(200).json('invalid name or password');
    } */

});

/* parameters */
/* app.get("/:brand/",(req,res)=>{
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
}); */



/* basic APIs */
app.get("/api",(req,res)=>{
    return res.status(200).json({message:"GET API"});
});
app.post("/api",(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    return res.status(200).json({message:"POST API"});
});



/* wildcard handler */
app.get("/**",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(404).send("404, Page not found");
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);
});