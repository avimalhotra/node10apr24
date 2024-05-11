const fs=require("fs");


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
});


