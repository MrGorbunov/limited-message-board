const express = require('express');
const path = require('path');
const messagedb = require('./messagedb');

const app = express();
const PORT = process.env.PORT || 5000;


// Needed for handling POST & form submissions
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Static submission page + api
app.use(express.static(path.join(__dirname, 'public')));

// API - Endpoint for messages (form submission & GET reqs)
app.get('/api', (req, res) => {
  res.json(messagedb.messages);
});

app.post('/api', (req, res) => {
  const infoDict = req.body;

  if (!messagedb.isValidMessage(infoDict.displayName, infoDict.messageBody)) {
    console.log("Invalid Message");
    res.status(400);
    res.redirect('/');
  }

  // Add message
  messagedb.addMessage(infoDict.displayName, infoDict.messageBody);
  res.redirect('/');
});



// Loads database.txt into memory
messagedb.readDBFile();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} :)`);
});
