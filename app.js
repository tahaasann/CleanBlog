const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
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

app.post('/posts', (req, res) => {
  console.log(req.body);
  res.redirect('/home');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
