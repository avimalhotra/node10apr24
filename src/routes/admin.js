const express=require("express");
const router=express.Router();

/* admin middleware */
router.use((req,res,next)=>{
    console.log(`Admin login at ${new Date().toLocaleString()}`);
    next();
})

router.get("/",(req,res)=>{
    res.status(200).send("Hello Admin")
});
router.get("/login",(req,res)=>{
    res.status(200).send("Admin Login")
});

module.exports=router;