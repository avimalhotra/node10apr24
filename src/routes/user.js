const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("Hello User")
});
router.get("/login",(req,res)=>{
    res.status(200).send("User Login")
});

module.exports=router;