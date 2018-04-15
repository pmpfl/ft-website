/**
 * @Author Mikk Küttim
 */
const express = require('express')
const app = express()
var favicon = require('serve-favicon')
var path = require('path')


// Static folder
app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) 


 
   app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});