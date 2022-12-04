var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'Codingproject20@outlook.com',
    pass: '9351429145@naitik'
  }
});

var mailOptions = {
  from: 'Codingproject20@outlook.com',
  to: 'Codingproject20@outlook.com',
  subject: 'Sending Email using Node.js',
  html:indexedD.html ,
  attachments: [{
    filename: 'index.html',
    path: 'D:\\node js\\project -3 (node emailer)\\index.html',
    cid: 'image1' 
}]
 
};

    



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});