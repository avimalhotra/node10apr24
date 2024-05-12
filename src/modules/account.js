const x=require('./events');

x.once("account",(res)=>{
    console.log(`Account created `);
});