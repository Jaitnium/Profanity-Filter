/*global chrome*/

// When a page loads
// Traverse through all of the html elements
    // If an element has a 'text' field
       // create a new string without any naughty words
       // update that text field

//alert('Hello Matt');


chrome.runtime.onInstalled.addListener(() => {
  console.log('Hello Matthew!');
  //chrome.storage.sync.set({ color });
  //const allElements = document.getElementsByTagName('*');
  // for(let i = 0; i < 20; i++) {
  //   console.log(allElements[i].getAttribute('name'));
  // }
});