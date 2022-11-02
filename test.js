const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

//create schema
const PostSchema = new Schema({
  title: String,
  description: String,
  postNumber: Number,
});

const Post = mongoose.model('Post', PostSchema);

//create a post
/* Post.create({
  title: 'Post Title 1',
  description: 'Post description 1 lorem ipsum',
  postNumber: 1
}); */

//read a post
/* Post.find({}, (err, data) => {
    console.log(data);
}); */

//update post
/* Post.find({}, (err,data) => {
    console.log(data);
}) */

//update post
/* const id = '6361f867987f65c284595e80';

Post.findByIdAndUpdate(
    id,
    {
        title: 'Post Title 2 updated by Title 1',
        description: 'Post description 1 updated',
        postNumber: 2
    },
    {
        new: true,
    },
    (err, data) => {
        console.log(data);
    }
); */

const id = '6361f867987f65c284595e80';

Post.findByIdAndDelete(id, (err,data) => {
    console.log('Photo  is removed');
});