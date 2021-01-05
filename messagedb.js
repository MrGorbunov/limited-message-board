/*
Message Database

This isn't really a database, just a JS dictionary with some
functions. To keep persistence across server restarts, the
dictionary is written to a file.
*/

const fs = require('fs');
const path = require('path');



// This list is sorted (i.e. message 1 = index 0)
var messages = [
];

for (var i=0; i<10; i++) {
  messages.push({
    name: '---',
    message: 'Write a message to take over this one'
  });
}





//
// Useful functions for modifying messages

function resetDB () {
  let ogDB = [];
  for (var i=0; i<10; i++) {
    ogDB.push({
      name: '---',
      message: 'Write a message to take over this one.'
    });
  }

  // Write new object to file
  fs.writeFile(path.join(__dirname, 'database.txt'), JSON.stringify(ogDB), (err, written, string) => {
    if (err) {
      throw err;
    }
  });

  readDB();
}

/**
 * Reads database.txt, pulling it into runtime memory.
 */
function readDB () {
  fs.readFile(path.join(__dirname, 'database.txt'), (err, data) => {
    if (err) {
      throw err;
    }

    // There is likely a way to clean this up but ngl I'm not 100% sure how
    let localMessages = JSON.parse(data);
    messages = localMessages;
    exports.messages = localMessages;
  });
}


function addMessage (displayName, messageText) {
  const newMessage = {
    name: displayName,
    message: messageText
  }

  // Add new message and remove last message
  messages.unshift(newMessage);
  messages.pop();

  // Write new object to file
  fs.writeFile(path.join(__dirname, 'database.txt'), JSON.stringify(messages), (err, written, string) => {
    if (err) {
      throw err;
    }
  });
}


function checkMessages () {
  console.log(messages);
}


/**
 * Conditions that must be satisified
 * displayName:
 *  - string type
 *  - no newlines
 *  - length <= 25
 * 
 * messageText:
 *  - string type
 *  - max 5 new lines
 *  - length <= 300
 */
function isValidMessage (displayName, messageText) {
  if (typeof displayName !== 'string' || 
      displayName.includes('\n', 0) ||
      displayName.length > 25) {
        return false;
  }

  if (typeof messageText !== 'string') {
    return false;
  }

  const numNewLines = messageText.split('\n').length;
  return numNewLines <= 5 && messageText.length <= 300; 
}





exports.messages = messages;
exports.isValidMessage = isValidMessage;
exports.addMessage = addMessage;

exports.resetDB = resetDB;
exports.readDB = readDB;
