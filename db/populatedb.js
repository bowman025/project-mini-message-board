const { argv } = require('node:process');
const { Client } = require('pg');

const messages = require('./messages');
const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255),
    username VARCHAR (50),
    added TIMESTAMP WITH TIME ZONE
  );
`;

const insertSQL = `
  INSERT INTO messages (text, username, added) VALUES ($1, $2, $3);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: argv[2],
  });
  try {
    await client.connect();
    await client.query(SQL);
    for (const msg of messages) {
      await client.query(insertSQL, [msg.text, msg.username, msg.added]);
    }
    await client.end();
    console.log('done.');
  } catch (error) {
    console.error(error);
  }
}

main();
