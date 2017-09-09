window.addEventListener('beforeunload', function(event) {
  console.log("the unload event has been triggered")
  document.getElementById('pageLoginAnchor').click()
  document.querySelector("._w0d").submit();
  setTimeout(3000)
  alert("you are leaving")
}, false);
