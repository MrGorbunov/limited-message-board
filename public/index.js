//
// Client-Side validation
//

var previousTextState = "";

function limitNewLines (textArea) {
  const numNewLines = textArea.value.split('\n').length;

  if (numNewLines > 5) {
    textArea.value = previousTextState;
  } else {
    previousTextState = textArea.value;
  }
}




//
// Vue.js & Routing
//

function updateBoard () {
  fetch('/api/').then(res => {
    return res.json(); // ty Aveek <3
  }).then(data => {
    console.log(data);
    console.log("Hello");
    messageBoard.messages = data;
  }).catch(err => {
    console.log(err);
  });
}

var messageBoard = new Vue({
  el: '#masterContainer',
  data: {
    messages: [
      {
        name: "Spicester",
        message: "Save the world my youngling"
      },
      {
        name: "True Spicester",
        message: "No truer spicester ever lived\nI really belive that\nOne day we'll goto the moon."
      }
    ],
  }
});





//
// Fetching
//

// Fetching is done on page load only 
// - refreshes required to see new results
// - form submission auto refreshes
updateBoard();