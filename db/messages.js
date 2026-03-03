const formatDateTime = require('../utils/formatDateTime');

const messages = [
  {
    id: crypto.randomUUID(),
    text: 'I play weird.',
    user: 'Ringo',
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: 'I used to think that anyone doing anything weird was weird.',
    user: 'Paul',
    added: new Date(Date.now() - 69000000),
  },
  {
    id: crypto.randomUUID(),
    text: 'All the world is birthday cake, so take a piece, but not too much.',
    user: 'George',
    added: new Date(Date.now() - 4200000000),
  },
  {
    id: crypto.randomUUID(),
    text: "Life is what happens to you while you're busy making other plans.",
    user: 'John',
    added: new Date(Date.now() - 13370000000),
  },
];

module.exports = messages; 