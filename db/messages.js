const formatDateTime = require('../utils/formatDateTime');

const messages = [
  {
    id: crypto.randomUUID(),
    text: 'I play weird.',
    user: 'Ringo',
    added: new Date(Date.now() - 100000000),
  },
  {
    id: crypto.randomUUID(),
    text: 'I used to think that anyone doing anything weird was weird.',
    user: 'Paul',
    added: new Date(Date.now() - 1000000000),
  },
  {
    id: crypto.randomUUID(),
    text: 'All the world is birthday cake, so take a piece, but not too much.',
    user: 'George',
    added: new Date(Date.now() - 4000000000),
  },
  {
    id: crypto.randomUUID(),
    text: "Life is what happens to you while you're busy making other plans.",
    user: 'John',
    added: new Date(Date.now() - 8000000000),
  },
  {
    id: crypto.randomUUID(),
    text: `The past is a great place and I don't want to erase it or to regret it, but I don't want to be its prisoner either.`,
    user: 'Mick',
    added: new Date(Date.now() - 12000000000),
  },
  {
    id: crypto.randomUUID(),
    text: 'Music is a necessity. After food, air, water, and warmth, music is the next necessity of life',
    user: 'Keith',
    added: new Date(Date.now() - 20000000000),
  },
  {
    id: crypto.randomUUID(),
    text: `When you're doing it for a year, night after night, it drives you up the bloody wall.`,
    user: 'Charlie',
    added: new Date(Date.now() - 28000000000),
  },
  {
    id: crypto.randomUUID(),
    text: "My real self is probably more creative and more frightening than any sort of drink or drug-induced state.",
    user: 'Ronnie',
    added: new Date(Date.now() - 44000000000),
  },
];

module.exports = messages; 