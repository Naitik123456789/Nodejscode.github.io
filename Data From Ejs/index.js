const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser')
const app = express();
const port = 8000;


// set view engine

app.set('views',path.join(__dirname,"views"));
app.set('view engine' ,' ejs');

// static files
app.use('/static',express.static('public'));

app.get('/index',(req,res)=>{
    res.render('index.ejs');
});

app.get('/getrequest',(req,res)=>{
    fname=req.query.fname;
    console.log(fname);
    

    email=req.query.email;
    console.log(email);

    fpass=req.query.fpass;
    console.log(fpass);
    res.redirect("/home");
});

app.get('/home',(req,res)=>{
    res.render('abc.ejs',{
        name:fname,
        email:email,
        fpass:fpass
    });
    // res.send("bfxdh");
});












app.listen(port, ()=>{
    console.log('Listining to port 8000');
});