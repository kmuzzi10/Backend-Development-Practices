const User = require('../models/user')

exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req
  //     .get('Cookie')
  //     .split(';')[1]
  //     .trim()
  //     .split('=')[1] === 'true';
  // console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.session)
  req.session.isLoggedIn = true;
  User.findById('66be38a9bb8a3929788e7456')
  .then(user => {
    req.session.user = user
    res.redirect('/');
    }).catch(err => {
      console.log(err)
    })
};
