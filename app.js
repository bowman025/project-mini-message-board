const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');
const port = 3000;

app.set('views', path.join(__dirname, '/views/pages'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
})

app.listen(port, () => {
  console.log(`Mini Message Board- App listening on port ${port}`);
});