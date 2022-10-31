const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));



app.get('/home', (req, res) => {
  
  res.render('index');
});
app.get('/add', (req, res) => {
  
  res.render('add_post');
});
app.get('/about', (req, res) => {
  
  res.render('about');
});
app.get('/post', (req, res) => {
  
  res.render('post');
});


const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
