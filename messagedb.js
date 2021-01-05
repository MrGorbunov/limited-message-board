/*
Message Database

This isn't really a database, just a JS dictionary with some
functions. This also means that messages are reset when the
server is reset! There is nothing persistent (for now).
*/

// Index is infered from order
let messages = [
  {
    name: '---',
    message: '...'
  }
];

for (var i=2; i<=10; i++) {
  messages.push({
    name: '---',
    message: '...'
  });
}





//
// Useful functions for modifying messages

function addMessage (displayName, messageText) {
  const newMessage = {
    name: displayName,
    message: messageText
  }

  // Add new message and remove last message
  messages.unshift(newMessage);
  messages.pop();
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
exports.addMessage = addMessage;
exports.isValidMessage = isValidMessage;

