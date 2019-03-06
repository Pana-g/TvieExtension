chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var button = document.createElement("button");
button.innerHTML = "&#8656 Retour  "; //means 'return' in French

button.style.fontWeight = "bold"
button.style.position = "fixed"
button.style.top = "50"
button.style.left = "0"
button.style.fontSize = "20"
button.style.padding = "10px 20px 10px 10px "
button.style.boxShadow = "2px 2px 3px #222"

var body = document.getElementsByTagName("body")[0];
body.appendChild(button)

button.addEventListener ("click", function() {
  close();
});

	}
	}, 10);
});