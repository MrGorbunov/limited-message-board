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