var fs = require("fs");
var readline = require("readline");
var stream = require("stream");

var instream = fs.createReadStream("words-fi");
var outstream

var word = document.getElementById('word');

function randomizeWord() {
	xhr.open("GET", "/word", false);
	xhr.send(null);
	xhr.onload = function(e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				word.textContent = xhr.responseText;
			} else {
				console.error(xhr.statusText);
			}
		}
	}
}

document.onmouseup = randomizeWord();
