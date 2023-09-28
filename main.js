let btne = document.getElementById('lala');
let mydive = document.getElementById('nol');

var colors = ["red", "blue", "green",];
var i = 0;

btne.onclick = function() {
	mydive.style.backgroundColor =  colors[i]; 
	i++;
	if (i == 3) {
		i = 0
	}
}

