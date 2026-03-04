const messages = require('../db/messages');
const formatDateTime = require('../utils/formatDateTime');
const CustomValidationError = require('../errors/CustomValidationError');

function listMessages(_, res) {
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

function createMessage(req, res, next) {
  const { name, message } = req.body;
  if (!name || !message) {
    const err = new CustomValidationError('Name and Message Are Required.');
    return next(err);
  }
  messages.push({
    id: crypto.randomUUID(),
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
};

module.exports = { listMessages, newMessageForm, createMessage };