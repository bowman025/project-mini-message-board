const { Router } = require('express');
const router = Router();
const {
  listMessages,
  newMessageForm,
  createMessage,
} = require('../controllers/indexController');

router.get('/', listMessages);
router.get('/new', newMessageForm);
router.post('/new', createMessage);

module.exports = router;
