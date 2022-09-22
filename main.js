// When a page loads, or when new modal appears
// Traverse through all of the html elements
    // If an element has a 'text' field
       // create a new string without any naughty words
       // update that text field

//const filter = import{'./filter'};
//import { filter } from './filter.js';
//censor = require('./filter.js');
/*
const avoid = {
  'BODY' : true,
  'STYLE' : true,
  'SCRIPT' : true,
  'LINK' : true,
  'HEAD' : true,
  'PATH' : true,
  'SVG' : true,
  'G' : true,
  'A' : true,
  'HTML' : true,
  'META' : true,
  'IFRAME' : true,
  'IMG' : true,
  'BR' : true
};*/

// p, span, h1, h2, h3, h4, h5, h6, title, main, nav, section



function traverseDOM() {

  /*
  console.log('document:', document);
  console.log('traverseDom_target:', target);*/
  const allComments = document.getElementsByClassName('_1qeIAgB0cPwnLhDF9XSiJM');

  console.log(allComments);

  console.log('totalComments:', allComments.length);

  for (let i = 0; i < allComments.length; i++) {
    // For the current element
    let comment = allComments[i];
    // If it's not an element that we want to avoid
    //console.log(allElements[i].getAttribute('name'));
    console.log(comment.nodeName, typeof comment.innerText, comment.innerText);
    //console.log('before filtering', currElement.innerText);
    comment.innerText = filter(comment.innerText);
        //console.log('after filtering', currElement.innerText);
  }
  /*
  //document.body.style.backgroundColor = 'red';
  const allElements = document.getElementsByTagName('*');
  for (let i = 0; i < 1000; i++) {
    try {
      // For the current element
      let currElement = allElements[i];
      // If it's not an element that we want to avoid
      if (currElement && !avoid[currElement.nodeName.toUpperCase()]) {
        //console.log(allElements[i].getAttribute('name'));
        console.log(currElement.nodeName, typeof currElement.innerText, currElement.innerText);
        //console.log('before filtering', currElement.innerText);
        currElement.textContent = filter(currElement.textContent);
        //console.log('after filtering', currElement.innerText);
      }
    }
    catch (err) {
      console.log(err);
    }

  }*/
}

// CAUTION: NAUGHTY WORDS
const badWords =
{
  'motherfucker': '*firetrucker*',
  'motherfucka': '*firetrucka*',
  'bitch': '*witch*',
  'cum': '*dumb*',
  'ass': '*donkey*',
  'fuck': '*duck*',
  'crap': '*poo*',
  'shit': '*poop*',
  'dick': '*snitch*',
  'cock' : '*rooster*',
  'bastard' : '*custard*',
  'cunt' : '*bunt*'
};

function filter(str) {

  console.log('filter??');
  // handle case sensitive
  for (const key in badWords) {
    str = str.replaceAll(key, badWords[key]);
  }

  return str;
}

traverseDOM();

document.addEventListener('scroll', (event) => {
  console.log('target:', event.target);
  console.log('first_child:', event.target.firstChild);

  traverseDOM();
  // const allComments = event.target.getElementsByClassName('_1qeIAgB0cPwnLhDF9XSiJM');
  // console.log(allComments, typeof(allComments));
  // //allComments.forEach((element => element.innerText = element.innerText + 's'));
  // for(let i = 0; i < allComments.length; i++) {
  //   allComments[i].innerText = filter(allComments[i].innerText); // + 's';
  // }
  /*
  traverseDOM(event.target);*/
  /*
  setTimeout(() => traverseDOM(), 3000)
 */
  console.log(event)});


// async helperFunction() {
//   await traverseDOM();
// }


// console.log(chrome);
// console.log(chrome.action);
// console.log(chrome.browserAction);

/*
chrome.browserAction.onClicked.addListener((tabs) => {
  console.log('hi');
});*/