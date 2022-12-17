const express = require('express');
const path = require('path');
const ejs =require('ejs');
const app = express();
const port = 8000;

app.set("views",path.join(__dirname,"views"));
app.set('view engine', 'ejs')

app.use('/static',express.static("public"));

const data=[
    {link:'/static/images/baner.jfif',price:'80,000',discreption:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae voluptate facilis eaque quisquam corrupti harum recusandae totam tempora reprehenderit?'},
    {link:'/static/images/i1.png',price:'50,000',discreption:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae voluptate facilis eaque quisquam corrupti harum recusandae totam tempora reprehenderit?'},
    {link:'/static/images/i2.png',price:'1,80,000',discreption:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae voluptate facilis eaque quisquam corrupti harum recusandae totam tempora reprehenderit?'},
    {link:'/static/images/i3.png',price:'2,50,000',discreption:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae voluptate facilis eaque quisquam corrupti harum recusandae totam tempora reprehenderit?'}
];

app.get('/another' , (req,res)=>{

    // const data=[5,6,3,2];
    // let i=0;
    // for(i=0;i<4;i++){

    //     console.log(data[i]);
    // }
    res.render('index.ejs',{
        data:data
    });

});

app.get('/banners',(req,res)=>{
   res.render('abc.ejs',{
    list:data
   })
});

app.listen(port , ()=>{
    console.log("listning to port 8000")
});