const express = require('express');
const dbUser = require('./data/helpers/userDb');
const dbPost = require('./data/helpers/postDb');
const dbTags = require('./data/helpers/tagDb');

const server = express();

server.use(express.json()); // built-in middleware

server.get('/', (req, res) => res.send('your server is working'));

// retrieve all users 
server.get('/users', (req, res) => { 
  dbUser.get()
  .then(users => res.json(users))
    .catch(err => req.status(500).json({ error: "The users could not be retrieved." }))
})

// retrieve all posts
server.get('/posts', (req, res) => {
  dbPost.get()
    .then(posts => res.json(posts))
    .catch(err => res.status(500).json({ error: "The posts could not be retrieved." }))
})

// retrieve all tags
server.get('/tags', (req, res) => {
  dbTags.get()
    .then(tags => res.json(tags))
    .catch(err => res.status(500).json({ error: "The tags could not be retrieved." }))
})

server.listen(5000);