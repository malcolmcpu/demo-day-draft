const express = require('express');
const app = express();

//SERVING UP THE ROOT PAGE
app.get('/', async (req, res) => {
  res.render('index');
});

//SERVING UP THE LOGGED IN PROFILE
app.get('/profile', isLoggedIn, function (req, res) {
  res.render('profile');
});

//
