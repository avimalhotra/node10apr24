const os=require("os");
const fs=require("fs");

//console.log(os.cpus().length);
//console.log(os.freemem()/1073741824);
//console.log(os.totalmem()/1073741824);
//console.log( os.arch() );
//console.log( os.networkInterfaces() );
//console.log(os.platform());
//console.log(os.uptime()/(60*60*24));
//console.log(os.userInfo());
//console.log( 'host ', os.hostname() );
//console.log( os.machine() );


//console.log( fs.readFileSync("src/data.txt").toString() );
//console.log("done");


/* fs.readFile("src/data.txt",'utf-8',(rej,data)=>{
   try{
        console.log(data);
   }
   catch(err){ 
        console.warn(err);
   }
}); */

/* fs.stat("src/data.txt",(err,res)=>{
    try{ console.log(res.size, res.isFile(), res.isDirectory() ) }
    catch(e){ console.warn(e);}
}); */

/* fs.writeFile("src/data.txt","Hello World",{encoding:'utf-8'},(err,res)=>{
    try{ console.log("file updated")}
    catch(e){ console.warn(e);}
}); */


/* fs.appendFile("src/data.txt",`${new Date().toLocaleString()} \n`,{encoding:'utf-8'},(err,res)=>{
    try{ console.log("file updated")}
    catch(e){ console.warn(e);}
}); */

fs.unlink("src/data.txt",(err,res)=>{
    if(err){ console.log(err) }
    else{ console.log("file deleted");}
})

