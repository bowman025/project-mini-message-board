const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('newMessage');
});

module.exports = router;