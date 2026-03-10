const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function findMessage(id) {
  const message = await pool.query(
    'SELECT * FROM messages WHERE id = $1',
    [id]
  );
  return message;
}

async function addMessage(text, username, added) {
  await pool.query(
    'INSERT INTO messages (text, username) VALUES ($1, $2, $3)',
    [text, username, added]
  );
}

module.exports = {
  getAllMessages,
  findMessage,
  addMessage,
}
