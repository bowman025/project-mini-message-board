const formatDateTime = require('../utils/formatDateTime');

const messages = [
  {
    id: crypto.randomUUID(),
    text: 'Hi there!',
    user: 'Amando',
    added: formatDateTime(new Date()),
  },
  {
    id: crypto.randomUUID(),
    text: 'Hello World!',
    user: 'Charles',
    added: formatDateTime(new Date()),
  },
];

module.exports = messages; 