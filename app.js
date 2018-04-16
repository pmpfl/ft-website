/**
 * @Author Mikk Küttim
 */
const express = require('express')
const app = express()
var favicon = require('serve-favicon')
var path = require('path')
const nodemon = require ('nodemon')


// Static folder
app.use(express.static('public'))
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico'))) 



app.get('/services',function(req,res){
  res.sendFile(path.join(__dirname+'/public/services.html'));
});

app.get('/cookies',function(req, res) {
  res.sendFile(path.join(__dirname+'/public/cookies.html'));
})

app.get('/design',function(req, res) {
  res.sendFile(path.join(__dirname+'/public/design.html'));
})

app.get('/contact',function(req, res) {
  res.sendFile(path.join(__dirname+'/public/contact.html'));
})

app.get('/team',function(req, res) {
  res.sendFile(path.join(__dirname+'/public/team.html'));
})

app.get('/portfolio',function(req, res) {
  res.sendFile(path.join(__dirname+'/public/portfolio.html'));
})

app.get('/inspire',function(req, res) {
  res.sendFile(path.join(__dirname+'/public/inspire.html'));
})

app.get('/company',function(req, res) {
  res.sendFile(path.join(__dirname+'/public/company.html'));
})
 
app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});