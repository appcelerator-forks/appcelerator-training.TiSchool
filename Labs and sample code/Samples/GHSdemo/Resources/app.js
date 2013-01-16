var win = Ti.UI.createWindow({
	backgroundColor: 'white'
});

var logo = Ti.UI.createImageView({
	image: '/images/logo.png',
	top: 100,
	left: 100
});

var moveIt = function() {
	logo.left = Math.round(Math.random()*300);
	logo.top = Math.round(Math.random()*400);
};

var timer = setInterval(moveIt, 300);


logo.addEventListener('click', function() {
	alert('You clicked me!');
	clearInterval(timer);
});


win.add(logo);

win.open();
