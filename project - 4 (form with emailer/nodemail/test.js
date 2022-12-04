var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'kjayesh136@outlook.com',
    pass: 'jay123esh'
  }
});

var mailOptions = {
  from: 'kjayesh136@outlook.com',
  to: 'khandelwaljayesh103@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<!DOCTYPE html> <html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><style>body{background-color: aquamarine;         }         div{             background-color: aqua;             width: 300px;             display:inline;             top: 400px;             left: 700px;             font-size: large;         }     </style> </head> <body>     <div>     <center>         <h1>Form</h1>        name <input type="text">         <br>         <br>         <br>        age <input type="text">         <br>         <br>         <br>        graduation <input type="text">         <br>         <br> <br>       country  <input type="text">       </center> </div> </body> </html> '
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});