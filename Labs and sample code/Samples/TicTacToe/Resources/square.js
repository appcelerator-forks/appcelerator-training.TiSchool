var Square = function(size, rownum, colnum) {
	var sq = Ti.UI.createLabel({
		width: size,
		height: size,
		font: {
			fontSize: 60,
			fontWeight: 'bold'
		},
		textAlign: 'center',
		color: 'black',
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 8,
		backgroundColor: 'white',
		left: 1, right: 1,
		rownum: rownum,
		colnum: colnum
	});
	
	sq.addEventListener('click', function() {
		var turn = Ti.App.Properties.getString('turn', '');
		var letter = '';
		switch(turn) {
			case '':
				// empty turn means, first move of game, X goes first
				letter = 'x';
				sq.text = 'X';
				sq.color = '#B3121A'; 
				Ti.App.Properties.setString('turn', 'o'); // set to next player
			break;
			case 'x':
				letter = 'x';
				sq.text = 'X';
				sq.color = '#B3121A'; 
				Ti.App.Properties.setString('turn', 'o');
			break;
			case 'o':
				letter = 'o';
				sq.text = 'O';
				sq.color = '#1712B3'; 
				Ti.App.Properties.setString('turn', 'x');
			break;
		}
		Ti.App.fireEvent('squareTapped', {row: sq.rownum, col:sq.colnum, letter: letter})
	});
	
	Ti.App.addEventListener('clearSquares', function() {
		sq.text = '';
	})
	
	return sq;
}

module.exports = Square;