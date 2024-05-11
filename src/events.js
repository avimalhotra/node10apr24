const events=require('events').EventEmitter;

const emitter=new events();

module.exports=emitter;

/* emitter.on("login",(res,x)=>{
    console.log(`Login done by ${res} and ${x.handled}`);  
    x.handled=false;
});
emitter.on("login",(res,x)=>{
    if(x.handled){console.log(`Login done by ${res} and ${x.handled}`)}  
}); */

/* emitter.once("login",(res)=>{
    console.log(`Login done `);  
}); */

/* function callMe(){
    console.log("called");
    emitter.removeListener("login",callMe);
}

emitter.on("login",callMe);

emitter.emit("login"); */


const l=require('./login');
const a=require('./account');

emitter.emit("login");
emitter.emit("account");