const express = require('express');

const router = express.Router();

router.get('/hello/', (req, res) => {
  res.render('../views/hello');
});

module.exports = router;
