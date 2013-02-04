function randomColor() {
	var clr = Math.floor(Math.random()*16777215).toString(16);
	if(clr.length == 5) clr = '0'+clr;
	return '#'+clr;
};

var makeBox = function(x,y) {
	return Ti.UI.createView({
		center: { x: x, y: y},
		height: 20, width: 20,
		backgroundColor: randomColor()
	});
}

var win = Ti.UI.createWindow({
	backgroundColor: 'white'
});

win.addEventListener('click', function(e) {
	win.add(makeBox(e.x, e.y));
});

win.open();
