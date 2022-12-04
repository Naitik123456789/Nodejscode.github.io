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

const urlencoded = bodyParser.urlencoded({extended:false});

app.get('/index',(req,res)=>{
    res.render('index.ejs');
});
var fname;
var email;
var fpass;
app.post('/getrequest',urlencoded,(req,res)=>{
    fname=req.body.fname;
    console.log(fname);

    email=req.body.email;
    console.log(email);

    fpass=req.body.fpass;
    console.log(fpass);
    res.redirect("/home");
});

app.get('/home',(req,res)=>{
    res.render('abc.ejs',{
        title:fname,
        email:email,
        pass:fpass
    });
    // console.log(email);
    // res.send("bfxdh");
});

app.get('/another' , (req,res)=>{
    const studentdata=[
        {name:'nitesh',class:'X',age:'15'},
        {name:'hitesh',class:'X',age:'15'},
        {name:'jitesh',class:'X',age:'15'}
    ]
    // const data=[5,6,3,2];
    // let i=0;
    // for(i=0;i<4;i++){

    //     console.log(data[i]);
    // }
    res.render('another.ejs',{
        studentdata:studentdata
    });

});













app.listen(port, ()=>{
    console.log('Listining to port 8000');
});