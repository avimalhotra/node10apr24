const express=require("express");
require("dotenv").config();
const path=require("path");
const port=process.env.PORT || 3000;
const bp=require("body-parser");
const cookie=require("cookie-parser");
const session=require("express-session");
const parseurl=require("parseurl");
const multer=require("multer");
//const upload=multer({dest:"src/public/uploads"});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);          // for original name 
      //cb(null, Date.now() + path.extname(file.originalname)) 
    }
  });

  const upload=multer({storage:storage});
  const fields=upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'resume', maxCount: 4 }]);


const app=express();
app.use(express.static(path.resolve("src/public")));
app.use(express.static(path.resolve("node_modules/bootstrap/dist")));

app.set('trust proxy', 1); 
app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false,maxAge:10000}
}));

app.use(cookie("secret"));
app.use(bp.json());
app.use(bp.text());
app.use(bp.urlencoded({ extended: false }));

/* app.use((req,res,next)=>{
    console.log(`Login at ${new Date().toLocaleString()}`);
    next();
}); */
app.use((req,res,next)=>{

    if(!req.session.views ){req.session.views={}};

    const pathname=parseurl(req).pathname;

    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

    next();
})


const admin=require("./routes/admin");
const user=require("./routes/user");
const { log } = require("console");

app.use('/admin',admin);
app.use('/user',user);

app.get("/",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    //res.status(200).send("Home Page");
    //res.status(200).send(req.url);
    //res.status(200).send(req.query);
    //res.status(200).send(req.method);
    //res.status(200).send(req.headers.host);
    //res.status(200).send(req.headers.host});
    //res.status(200).send(req.cookies);
    //res.status(200).send(req.signedCookies);
    res.status(200).send(`Session Id is : ${req.sessionID}, views: ${req.session.views['/']}`);
});

app.get("/cut",(req,res)=>{
    req.session.destroy();
    res.status(200).send("session ends");
});

// app.post("/upload",upload.array('resume',2),(req,res)=>{
//     //console.log( req.files );
//     res.status(200).send(`files uploaded`);
// });
app.post("/upload",fields,(req,res)=>{
    console.log( req.files );
    res.status(200).send(`files uploaded`);
});




/* cookies */
app.get("/setcookie",(req,res)=>{
     //res.cookie("city","noida",{signed:true});
    res.cookie("state","up",{maxAge:30000,httpOnly:true});
    res.status(200).send("cookie saved");
});
app.get("/getcookie",(req,res)=>{
    res.status(200).send(req.cookies);
})

app.get("/search",(req,res)=>{
    res.status(200).send(`Query is ${req.query.car}`);
});

app.post("/login",(req,res)=>{
    //res.header('Access-Control-Allow-Origin',"*");
    res.status(200).json(req.body);
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


const data=[
    {"name": "swift 2022", "type": "hatchback", "price":820000},
    {"name": "swift 2024", "type": "hatchback", "price":920000},
    {"name": "dzire", "type": "sedan", "price":880000},
    {"name": "ciaz", "type": "sedan", "price":1000000},
    {"name": "baleno", "type": "hatchback", "price":850000},
    {"name": "brezza", "type": "suv", "price":990000},
    {"name": "grand vitara", "type": "suv", "price":1790000},
    {"name": "grand vitara hybrid", "type": "suv", "price":1990000},
    {"name": "alto", "type": "hatchback", "price":400000},
    {"name": "wagon r", "type": "hatchback", "price":500000},
    {"name": "jimny", "type": "suv", "price":1400000}
];



/* basic APIs */
app.get("/api",(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    //return res.status(200).send("response");
    //return res.status(200).json({res:data});
    return res.status(200).json(data);
});
app.post("/api",(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    const x=JSON.parse(req.body);
    const y=x.q.toLowerCase(); 

    const z=data.filter(i=>i.name.includes(y));
    //const z=data.filter(i=>y==new RegExp( i.name, 'i'));

    return res.status(200).json(z);
});



/* wildcard handler */
app.get("/**",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(404).send("404, Page not found");
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);
});