var feed = document.getElementById('stream_pagelet');

// Init friction content container
var frictionContent = document.createElement("div")
frictionContent.setAttribute("id", "friction_content")
feed.insertAdjacentElement('beforebegin', frictionContent);


// UI components
function toggleFeed() {

    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("View the newsfeed");
    btn.setAttribute("id", "newsfeed_toggle");
    btn.appendChild(t);
    frictionContent.insertAdjacentElement('afterbegin', btn);

    btn.addEventListener('click', (event) => {
      if (feed.style.display === 'none') {
        moveThenReveal();
      } else {
        feed.style.display = "none";x
        frictionContent.style.display = "";
      }
    });
}

function chatPSA() {
  var psa = document.createElement("div");
  var t = document.createTextNode("On facebook to send messages? Use messenger.com instead.");
  psa.appendChild(t)
  psa.setAttribute("id", "chatPSA");
  frictionContent.insertAdjacentElement('afterbegin', psa)
}

function createLoad() {
  var progress = document.createElement("div");
  progress.setAttribute("id", "fr_progress");
  var bar = document.createElement("div");
  progress.setAttribute("id", "fr_bar");

  btn = document.getElementById("newsfeed_toggle")
  btn.insertAdjacentElement('afterend', progress);
  progress.insertAdjacentElement('afterbegin', bar);
}


// Behaviour
function moveThenReveal() {
    var bar = document.getElementById("fr_bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            feed.style.display = '';
            frictionContent.style.display = "none"
        } else {
            width++;
            bar.style.width = width + '%';
        }
    }
}

function hideFeed() {
  feed.style.display = "none";
}

// Init friction content
hideFeed();
toggleFeed();
chatPSA();
createLoad();

// Hide feed after 5 minutes
window.setInterval(hideFeed, 300000);
