const express = require('express');
const path = require('path');
const messagedb = require('./messagedb');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));


// API calls right here
app.get('/api/messages', (req, res) => {
  res.json(messagedb.messages);
});

app.post('/api/messages', (req, res) => {
  res.json({ msg: "It's alive!" });
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} :)`);
});
