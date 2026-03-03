const { Router } = require('express');
const router = Router();
const showMessage = require('../controllers/messagesController');

router.get('/:id', showMessage);

module.exports = router;