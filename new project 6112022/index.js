const express = require('express');

const app = express();
const port = 8000;
// route (used for routing)

app.get('/',(req,res)=>{
    res.send("hello");
});

app.get('/about',(req,res)=>{
    res.send("hello about");
});

app.get('/naitik',(req,res)=>{
    res.send("hello naitik");
});

app.get('/about/naitik',(req,res)=>{
    res.send("hello");
});



app.listen(port, ()=>{
    console.log('Listining to port 8000');
});