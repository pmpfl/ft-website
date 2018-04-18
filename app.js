const express = require('express')
const app = express()
var favicon = require('serve-favicon')
var path = require('path')
const nodemon = require('nodemon')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');



// Static folder
app.use(express.static('public'))
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')))

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('contact');
});

app.post('/contact', (req, res) => {
  const output = `
      <p>You have a new message from contact form.</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'i3brpyll74gl4m6v@ethereal.email', // generated ethereal user
      pass: 'bMC1hmYKaxKtRr53mj' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: 'form@fitric.ee', // sender address
    to: 'mikk@fitric.ee', // list of receivers
    subject: 'Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.end("error");
    } else {
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.sendStatus(200);
    }
  });
});


app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/contact.html'));
});

/**
 * Portfolio subdirectories
 */
app.get('/portfolio/ieep', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/portfolio/ieep.html'));
});

app.get('/portfolio/givedish', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/portfolio/givedish.html'));
});

app.get('/team', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/team.html'));
});

app.get('/jobs/join-us/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/jobs/join-us.html'));
});

app.get('/inspire/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/inspire.html'));
});

app.get('/cookies/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/cookies.html'));
});
app.listen(process.env.PORT || 3000, function () {
  console.log("listening on 3000");
});