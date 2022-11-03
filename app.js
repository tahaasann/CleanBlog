const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');

const app = express();

//connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//ROUTES
app.get('/home', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
});

app.get('/add', (req, res) => {
  res.render('add_post');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post', (req, res) => {
  res.redirect('/home');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/home');
});

app.get('/posts/edit/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
});

app.put('/posts/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.description = req.body.description;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
