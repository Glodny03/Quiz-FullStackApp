const express = require('express');
const News = require('../models/news');

const router = express.Router();

router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('login');

    return;
  }

  next();
});

router.get('/', (req, res) => {

  // const newsData = new News({
  //   title: 'New title',
  //   description: 'Optional description'
  // })

  // newsData.save((err) => console.log(`Error ${err}`));

  res.render('admin/index', {
    title: 'Admin'
  });
});

router.get('/news/add', (req, res) => {

})

module.exports = router;