const messages = require('../db/messages');
const formatDateTime = require('../utils/formatDateTime');

function listMessages(_, res) {
  res.render('index', { title: 'Mini Message Board', messages });
};

function newMessageForm(_, res) {
  res.render('newMessage', { title: 'MMB: New Message' });
};

function createMessage(req, res) {
  messages.push({
    id: crypto.randomUUID(),
    text: req.body.message,
    user: req.body.name,
    added: formatDateTime(new Date()),
  });
  res.redirect('/');
};

module.exports = { listMessages, newMessageForm, createMessage };