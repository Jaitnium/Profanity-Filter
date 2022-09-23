// When a page loads, or when new modal appears
// Traverse through all of the html elements
    // If an element has a 'text' field
       // create a new string without any naughty words
       // update that text field

function traverseDOM() {

  /*
  console.log('document:', document);
  console.log('traverseDom_target:', target);*/
  const allComments = document.getElementsByClassName('_1qeIAgB0cPwnLhDF9XSiJM');

  //console.log(allComments);

  console.log('totalComments:', allComments.length);

  for (let i = 0; i < allComments.length; i++) {
    // For the current element
    let comment = allComments[i];
    // If it's not an element that we want to avoid
    //console.log(allElements[i].getAttribute('name'));
    console.log(comment.nodeName, typeof comment.innerText, comment.innerText);
    //console.log('before filtering', currElement.innerText);
    filter(comment);
    console.log('after_filter:', comment);
        //console.log('after filtering', currElement.innerText);
  }
}

const naughtyRegex = /motherfucker|dipshit|motherfucka|fucker|fucka|bitch|cum|ass|fuck|crap|shit|dick|cock|bastard|cunt|whore|damn|prick|douche|nigger|faggot|tit|titty|titties|piss|turd|twat|slut|sperm|wench|trash|anal|retard|retarded|hentai|hentia|porn|vagina|racist|god|dammit|damnit|nipples|jesus|fister|humping|hump|pedophile|pedo|paedo|shart|nigga/ig;

function getNiceWord() {
  const niceWords = ['salt', 'bubble', 'friend', 'butter', 'guy', 'rooster', 'custard', 'firetruck', 'muffin', 'duck', 'donkey', 'pillow', 'blanket', 'gosh', 'darn', 'food', 'walrus', 'unicorn', 'wizard', 'rainbow', 'sailor', 'cat', 'athelete'];
  console.log(Math.floor(Math.random() * niceWords.length));
  return niceWords[Math.floor(Math.random() * niceWords.length)];
}

function filter(commentEle) {
  console.log('filter_input:', commentEle);
  try {
    commentEle.innerHTML = commentEle.textContent.replaceAll(naughtyRegex, getNiceWord);
  }
  catch (err) {
    console.log(err);
    return;
  }
}

//traverseDOM();


function eventFire(event) {
  console.log('eventFired:', event.type);
}

document.addEventListener('scroll', (event) => {
  eventFire(event);
  traverseDOM();}
);

window.onload = (event) => {
  console.log('page is fully loaded');
  traverseDOM();
};
document.addEventListener('DOMContentLoaded', (event) => eventFire(event));

document.addEventListener('load', (event) => {

  eventFire(event);
  console.log('target:', event.target);
  console.log('first_child:', event.target.firstChild);

  traverseDOM();
  console.log(event);
});