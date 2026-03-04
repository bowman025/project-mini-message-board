const messages = require('../db/messages');
const formatDateTime = require('../utils/formatDateTime');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

function showMessage(req, res, next) {
  const message = messages.find((msg) => msg.id === req.params.id);
  if (!message) {
    const err = new CustomNotFoundError('Message Not Found.');
    return next(err);
  }
  const formattedMessage = { ...message, added: formatDateTime(message.added), };
  res.render('message', {
    title: `MMB: Message by ${formattedMessage.user}`,
    message: formattedMessage,
  });
};

module.exports = showMessage;