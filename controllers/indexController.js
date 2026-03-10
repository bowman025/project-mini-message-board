const db = require('../db/queries');
const { 
  body, 
  validationResult, 
  matchedData, 
} = require('express-validator');
const formatDateTime = require('../utils/formatDateTime');

const alphaErr = 'must only contain letters.';
const nameLengthErr = 'must be between 1 and 50 characters.';
const messageLengthErr = 'must be between 1 and 255 characters.';

const validateMessage = [
  body('name').trim()
    .isAlpha().withMessage(`Name ${alphaErr}`)
    .isLength({ min: 1, max: 50 }).withMessage(`Name ${nameLengthErr}`),
  body('message').trim()
    .isLength({ min: 1, max: 255 }).withMessage(`Message ${messageLengthErr}`),
];

async function listMessages(_, res) {
  const messages = await db.getAllMessages();
  const sorted = [...messages]
    .sort((a, b) => b.added - a.added)
    .map(m => ({
      ...m,
      added: formatDateTime(m.added),
    }));
  res.render('index', { title: 'MMB: Mini Message Board', messages: sorted });
};

function newMessageForm(_, res) {
  res.render('newMessage', { title: 'MMB: New Message' });
};

const createMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('newMessage', {
        title: 'MMB: New Message - 400 Error',
        errors: errors.array(),
        data: matchedData(req, { onlyValidData: false }),
      });
    }
    const { name, message } = matchedData(req);
    const added = new Date();
    await db.addMessage(message, name, added);
    res.redirect('/');
  }
];

module.exports = { listMessages, newMessageForm, createMessage };
