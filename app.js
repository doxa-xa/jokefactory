const express = require('express');
const ejs = require('ejs');

var app = express();

app.use('/assets',express.static('assets'));

app.set('view engine','ejs');

app.app.listen(3000,()=>{
  console.log('now listening on port 3000');
});
