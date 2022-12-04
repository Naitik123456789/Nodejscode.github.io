var nodemailer = require('nodemailer');
var fs = require('fs');

var transporter = nodemailer.createTransport({
 service: 'outlook',
 auth: {
   user: 'Codingproject20@outlook.com',
   pass: '9351429145@naitik'
 }
});

fs.readFile('index.html', {encoding: 'utf-8'}, function (err, htmlread) {
 if (err) {
   console.log(err);
 } else {
   let mailOptions = {
     from: 'Codingproject20@outlook.com',
     to: 'Codingproject20@outlook.com',
     subject: 'Sending Html in node mailer',
     html:htmlread,
   }
   }
   };

   transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
     console.log(error);
    } else {
     console.log('Email has been sent: ' + info.response);
    }
});
