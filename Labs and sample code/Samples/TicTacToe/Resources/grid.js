var Grid = function(numSquares) {
	var Square = require('square'),
		squareSize = Math.floor(Ti.Platform.displayCaps.platformWidth / (numSquares+1));
	
	var self = Ti.UI.createView({
		backgroundColor: 'transparent',
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		left: squareSize/2,
		layout: 'vertical'
	});
	
	var makeRow = function() {
		return row = Ti.UI.createView({
			backgroundColor: 'transparent',
			height: squareSize+4,
			width: Ti.UI.FILL,
			layout: 'horizontal',
			top: 1, bottom: 1
		});
	}
	
	for(var i=0; i<numSquares; i++) {
		var row = makeRow();
		for(var x=0; x<numSquares; x++) {
			var gridPosition = i * x;
			row.add(new Square(squareSize, i, x));
		}
		self.add(row);
	}

	return self;
};

module.exports = Grid;
