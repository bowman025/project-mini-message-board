const db = require('../db/queries');
const formatDateTime = require('../utils/formatDateTime');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

async function showMessage(req, res, next) {
  const message = await db.findMessage(req.params.id);
  if (!message) {
    const err = new CustomNotFoundError('Message Not Found.');
    return next(err);
  }
  const formattedMessage = { ...message, added: formatDateTime(message.added), };
  res.render('message', {
    title: `MMB: Message by ${formattedMessage.username}`,
    message: formattedMessage,
  });
};

module.exports = showMessage;
