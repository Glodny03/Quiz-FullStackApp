const express = require('express');
const router = express.Router();

const login = 'kubunia69';
const passwd = 'kuba12';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Logowanie'
  });
});

router.post('/login', (req, res) => {
  const body = req.body;
  if (body.login === login && body.password === passwd) {
    req.session.admin = 1;
    res.redirect('/news');
  } else {
    res.redirect('/login');
  }
})

module.exports = router;