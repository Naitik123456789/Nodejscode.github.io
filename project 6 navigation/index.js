const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser')
const app = express();
const port = 8000;
// route (used for routing)

const urlencoded = bodyParser.urlencoded({extended:false});
// middleware
app.use('/static',express.static('public'));

app.get('/abc',(req,res)=>{
    res.render('abc.ejs');
});
var fname;
app.post('/getrequest',urlencoded,(req,res)=>{
    fname=req.body.fname;
    console.log(fname);
    res.redirect("/home");
});

app.get('/home',(req,res)=>{
    res.render('index.ejs',{
        title:fname,
        about:"fname"
    });
    // res.send("bfxdh");
});

// app.post('/getrequest',urlencoded,(req,res)=>{
//     fname=req.body.fname;
//     console.log(fname);
//     res.redirect("/home");
// });

// app.get('/home',(req,res)=>{
//     res.render('index.ejs',{
//         title:fname,
//         about:"fname"
//     });
//     // res.send("bfxdh");
// });



 app.set('views',path.join(__dirname,"views"));
app.set('view engine' ,' ejs');
// app.use(route,express.static('location'));


app.get('/aboutus',(req,res)=>{
    res.render('index.ejs' ,{
        title:'About Us',
        about:'Hellos'
    });
})


app.get('/nav',(req,res)=>{
    res.render('index.ejs' ,{
        title:'Home Page' , 
        about:'And Bout'
    });
})

app.get('/contact',(req,res)=>{
    res.render('index.ejs' ,{
        title:'Contact page',
        about:'contact'
    });
for(i=1;i<10;i++){
    console.log(i)
}

})



// app.get('/home',(req,res)=>{
//     res.send("<a href='/nextpage'>Next Page</a>");
// });

app.get('/nextpage',(req,res)=>{
    res.write("<h1>Heading 1</h1>")
    res.write("<h1>Heading 2 </h1>")
    res.write("<a href='/static'>Back</a>")
    res.end()
});
app.get('/',(req,res)=>{
    console.log(path.join(__dirname,"views"))
    res.sendFile(path.join(__dirname,"index2.html"));
});


// app.get('/about',(req,res)=>{
//     res.send("This Is About Page");
// });

app.get('/contact',(req,res)=>{
    res.send("contact");
});

app.get('/help',(req,res)=>{
    res.send("help");
});

app.listen(port, ()=>{
    console.log('Listining to port 8000');
});