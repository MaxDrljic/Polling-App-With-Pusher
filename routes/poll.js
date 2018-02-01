const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '467276',
  key: '1d832592855516476586',
  secret: 'a7b23c894c9477561051',
  cluster: 'eu',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('Poll');
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });

  return res.json({success: true, message: 'Thank you for voting!'});
});

module.exports = router;
