const messages = require('../db/messages');
const formatDateTime = require('../utils/formatDateTime');

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

function createMessage(req, res) {
  messages.push({
    id: crypto.randomUUID(),
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
};

module.exports = { listMessages, newMessageForm, createMessage };