// const express= require("express");
// const path =require("path");
// const ejs = require("ejs");
// const app= express();
// const port=8000;

// app.set('views',path.join(__dirname,"views"));
// app.set('view engine','ejs');

// app.use('/static',express.static( "public"));

// app.get('/index',(req,res)=>{
//     res.render("index.ejs");
// });

// app.get('/getrequest',(req,res)=>{
//     Name=req.query.fname;
//     console.log(Name);

//     Pass=req.query.fpass;
//     console.log(Pass);
// });


// app.listen(path,()=>{
//     console.log("Listning to port 8000");
// });


const express = require( "express" );
const app = express();
const path =require("path");
 const ejs = require("ejs");
const port = 8080; 

app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');

app.use('/static',express.static( "public"));

app.get('/index',(req,res)=>{
    res.render("index.ejs");
});

app.get('/getrequest',(req,res)=>{
var Name=String(req.query.fname);
var Pass=String(req.query.fpass);

var username="Naitik";
let password="11223344";


if (username==Name){
    res.send("Your Registration Is Successfull");

}

if (password==Pass){
    res.send("Your Registration Is Successfull");

}
else{
    res.send("Registration Unsuccessfull");
};
});




app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );