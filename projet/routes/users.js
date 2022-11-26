var express=require("express");

var router=express.Router();
router.use('/',(req,res,next)=>{
    console.log("API call received");
    next();
});
router.get("/",(req,res)=>{
    res.send("Get Request for user !");
});
router.get("/getuser-sdetails/:id/:city",(req,res)=>{
    res.send("Get Request for users !"+req.params.id +req.params.city);
});
router.post("/create-user",(req,res)=>{
    res.send("List of users");
});
router.put('/update-user',(req,res)=>{
    res.send("List of users");
});
router.get('/read-all-user',(req,res)=>{
    res.send("List of users");
});

router.get('/get-user-details',(req,res)=>{
    const userObj={
        id:10,
        name:"ARC",
        LastName:"Tutorial",
        status:true
    }
    res.send(userObj);
});
router.delete('/delete-user',(req,res)=>{
    res.send("List of users ");
});

module.exports=router;


