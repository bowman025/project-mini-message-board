const db = require('../db/queries');
const formatDateTime = require('../utils/formatDateTime');
const CustomValidationError = require('../errors/CustomValidationError');

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

async function createMessage(req, res, next) {
  const { name, message } = req.body;
  const added = new Date();
  if (!name || !message) {
    const err = new CustomValidationError('Name and Message Are Required.');
    return next(err);
  }
  await db.addMessage(message, name, added);
  res.redirect('/');
};

module.exports = { listMessages, newMessageForm, createMessage };