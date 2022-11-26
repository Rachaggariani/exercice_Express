var express=require("express");
var Prod=require('./routes/Products');
var userpers=require('./routes/Users');
var app=express();
app.use("/Products",Prod);
app.use("/Users",userpers);
// app.get("/",(req,res)=>{
//     res.send("Hello world");
// });
// app.get("/getusers",(req,res)=>{
//     var personne={
//         id:12,
//          name:"racha",
//          lastname:"Ghariani",
//          age:22,
//          active:true
//     }
//     res.send(personne);
// });

app.listen(3002);