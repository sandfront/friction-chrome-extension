// UI components

// Create and insert toggle button and triggers creation of progress bar
function toggleFeed(feed, fr_container) {
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("View the newsfeed");
  btn.setAttribute("id", "newsfeed_toggle");
  btn.appendChild(t);
  fr_container.insertAdjacentElement('afterbegin', btn);

  createLoad(btn);

  btn.addEventListener('click', (event) => {
    if (feed.style.display === 'none') {
      moveThenReveal(fr_container);
    } else {
      feed.style.display = "none";
      fr_container.style.display = "";
    }
  });

}

// Create and insert progress bar
function createLoad(btn) {
  var progress = document.createElement("div");
  progress.setAttribute("id", "fr_progress");

  var bar = document.createElement("div");
  progress.setAttribute("id", "fr_bar");

  btn.insertAdjacentElement('afterend', progress);
  progress.insertAdjacentElement('afterbegin', bar);
}

// Create and insert messenger.com PSA
function chatPSA(fr_container) {
    var psa = document.createElement("div");
    var t = document.createTextNode("On facebook to send messages? Use messenger.com instead.");
    psa.appendChild(t)
    psa.setAttribute("id", "chatPSA");
    fr_container.insertAdjacentElement('afterbegin', psa)
}

// Behaviour
function moveThenReveal(fr_container) {
    var feed = document.getElementById('stream_pagelet');
    var bar = document.getElementById("fr_bar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
          clearInterval(id);
          feed.style.display = '';
          fr_container.style.display = "none";
      } else {
          width++;
          bar.style.width = width + '%';
      }
    }
}

function hideFeed() {
  var feed = document.getElementById('stream_pagelet');
  var fr_container = document.getElementById('fr_container');
  feed.style.display = "none";
  fr_container.style.display = "";
}

// Runtime functions
function run() {
  var feed = document.getElementById('stream_pagelet');
  if (feed) {
    var fr_container = document.createElement("div")
    fr_container.setAttribute("id", "fr_container")
    feed.insertAdjacentElement('beforebegin', fr_container);
    hideFeed(feed);
    toggleFeed(feed, fr_container);
    chatPSA(fr_container);
  }
}

function check() {
  if (document.getElementById('fr_container') !== null) {
  } else {
    run()
  }
}

// runs friction on first load of fb
run()

// Need to continuously check page to make sure friction is running, since DOM doesn't reload on navigation
window.setInterval(check, 1000)

// Hide feed after 5 minutes
window.setInterval(hideFeed, 300000);

