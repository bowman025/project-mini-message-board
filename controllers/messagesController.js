const messages = require('../db/messages');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

function showMessage(req, res, next) {
  const message = messages.find((msg) => msg.id === req.params.id);
  if (!message) {
    const err = new CustomNotFoundError('Message not found');
    return next(err);
  }
  res.render('message', {
    title: `MMB: Message by ${message.user}`,
    message,
  });
};

module.exports = showMessage;