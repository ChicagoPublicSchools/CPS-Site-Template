
// Easy background image without touching CSS
var list = document.querySelectorAll("div[bg-img]");

for (var i = 0; i < list.length; i++) {
  var url = list[i].getAttribute("bg-img");
  list[i].style.backgroundImage = "url('" + url + "')";
}

