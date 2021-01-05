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

// Fetching is done on page load only 
// - refreshes required to see new results
// - form submission auto refreshes
// function pullMessageData () {
//   fetch('./api')
// }
fetch('/api/').then(res => {
    return res.json(); // ty Aveek <3
}).then(data => {
  console.log(data);
});

var messageBoard = new Vue({
  el: '#masterContainer',
  data: {
    messages: [
      {
        index: 1,
        name: "Spicester",
        message: "Save the world my youngling"
      },
      {
        index: 2,
        name: "True Spicester",
        message: "No truer spicester ever lived\nI really belive that\nOne day we'll goto the moon."
      }
    ],
  }
});