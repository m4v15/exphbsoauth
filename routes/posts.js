var express = require('express');
var router = express.Router();

const { Posts } = require('../db/schemas')


/* GET users listing. */
router.get('/', function (req, res, next) {
  Posts.find({}).sort([['updatedAt', 'descending']]).then(posts => {
    res.render("posts", { title: "Posts", posts });
  }).catch(next)
});

router.post('/', (req, res, next) => {
  Posts.create(req.body).then(() => {
    res.redirect('/posts')
  }).catch(next)
})


module.exports = router;
