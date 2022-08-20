function encrypt() {
  var str = document.getElementById("raw").value;
  var enc = btoa(str);

  document.getElementById("raw").value = enc;
}

function decrypt() {
  var str = document.getElementById("dec").value;
  var enc = atob(str);

  document.getElementById("dec").value = enc;
}



