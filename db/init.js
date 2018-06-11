require('dotenv').config()
var db = require('./connect');
var initData = require('../data.json')
const { Posts } = require('./schemas')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  Posts.remove({}).then(() => {
    console.log('Removed old data')
    Posts.create(initData).then(() => {
      console.log('Initialized DB')
      db.close()
    })
  }).catch(err => console.err(err))
});
