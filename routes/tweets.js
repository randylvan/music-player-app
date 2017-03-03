var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

const client = () => {
  return new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET,
  })
}

router.get('/:handle', function(req, res) {
  client().get('statuses/user_timeline', { screen_name: req.params.handle}, (err, tweets) => {
    return res.json(tweets);
  });
});

module.exports = router;
