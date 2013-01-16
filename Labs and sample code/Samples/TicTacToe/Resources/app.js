var win = Ti.UI.createWindow({
	title: 'Tic Tac Toe',
	backgroundColor: 'white'
});

var Grid = require('grid');
var gridSize = 3;

win.add(new Grid(gridSize));

// ** section on tracking game play and determining the winner
// ** ignore for now...
// Function to create an to hold the letters tapped in each square
var makeStateGrid = function(numSquares){
	var grid = [];
	for(var i=0; i<numSquares; i++) {
		grid[i] = Array(numSquares);
	}
	return grid;
};
var stateGrid = makeStateGrid(gridSize);

// function to check for our winner
function checkForWinner(letter) {
	var oppositeplayer = (letter=='x') ? 'o' : 'x';
	var colArray = Array(gridSize);
	// check for winner by row
	for(var r=0;r<gridSize;r++) {
		var tempRow = stateGrid[r].join('');
		if(tempRow.length==3 && tempRow.indexOf(oppositeplayer)==-1) {
			alert('You Win!');
			return;
		}
		// build our array of column values
		for(var c=0;c<gridSize;c++) {
			if(stateGrid[r][c] != null) 	colArray[r] += letter;
		}
		
	}
	// check for winner by column
	for(var c=0;c<gridSize;c++) {
		if(colArray[c] && colArray[c].length==3 && colArray[c].indexOf(oppositeplayer)==-1) {
			alert('You Win!');
			return;
		}
	}
}
Ti.App.addEventListener('squareTapped', function(e) {
	stateGrid[e.row][e.col] = e.letter;
	checkForWinner(e.letter);
});
// *** END OF STUFF FOR TRACKING GAME PLAY AND DETERMINING THE WINNER


// create and add our New Game button
var reset = Ti.UI.createButton({
	title: 'New Game',
	bottom: 10
});
reset.addEventListener('click', function() {
	stateGrid = makeStateGrid(gridSize);
	Ti.App.fireEvent('clearSquares');
	Ti.App.Properties.setString('turn', '');
});
win.add(reset);

win.open();




// *** Stuff for TiShadow, not part of a final/regular app
try {
  exports.close = function() {
    // Your code to close, e.g, main_window.close();
  };
  Ti.API.info("Running in TiShadow");
} catch (e) {
  Ti.API.info("Running stand-alone");
}